// ==================== FIRESTORE SERVICE ====================
// Servicio de Cloud Firestore para LOWFY Tools.
// Estrategia: colecciones raíz con campo ownerId (UID de Firebase Auth).
// Cada registro privado pertenece a un único usuario.
// Nunca se descargan datos de todos los usuarios para filtrar en el navegador.
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  getDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const COLLECTIONS = {
  clients: 'clients',
  quotes: 'quotes',
  transactions: 'transactions',
  settings: 'settings',
  users: 'users'
};

// Normaliza un timestamp de Firestore a string ISO (YYYY-MM-DD) o deja el valor original.
function normalizeTs(value) {
  if (!value) return value;
  if (typeof value.toDate === 'function') {
    return value.toDate().toISOString().slice(0, 10);
  }
  return value;
}

function normalizeTsFull(value) {
  if (!value) return value;
  if (typeof value.toDate === 'function') {
    return value.toDate().toISOString();
  }
  return value;
}

export class FirestoreService {
  constructor(db, auth) {
    this.db = db;
    this.auth = auth;
    this.unsubscribers = {};
    this.initialized = false;
  }

  get uid() {
    const user = this.auth?.currentUser || window.currentFirebaseUser;
    return user ? user.uid : null;
  }

  get isEnabled() {
    return !!this.uid;
  }

  col(name) {
    return collection(this.db, name);
  }

  // ---- Perfil de usuario ----
  async ensureUserProfile(user) {
    if (!user) return;
    try {
      const ref = doc(this.db, COLLECTIONS.users, user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        await setDoc(
          ref,
          {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          },
          { merge: true }
        );
      }
    } catch (err) {
      console.warn('[Firestore] No se pudo crear perfil de usuario:', err);
    }
  }

  // ---- Listeners en tiempo real (actualizan window.appState) ----
  startListening(callbacks = {}) {
    if (!this.isEnabled || this.initialized) return;
    this.initialized = true;

    const listen = (name, localKey, orderByField = 'createdAt', desc = true) => {
      const q = query(
        this.col(name),
        where('ownerId', '==', this.uid),
        orderBy(orderByField, desc ? 'desc' : 'asc'),
        limit(500) // seguridad: no descargar miles de registros de golpe
      );
      this.unsubscribers[name] = onSnapshot(
        q,
        (snap) => {
          const items = snap.docs.map((d) => {
            const data = d.data();
            return {
              id: d.id,
              ...data,
              createdAt: normalizeTs(data.createdAt),
              updatedAt: normalizeTsFull(data.updatedAt)
            };
          });
          if (window.appState) window.appState[localKey] = items;
          if (callbacks.onDataLoaded) callbacks.onDataLoaded(name, items);
        },
        (err) => {
          console.error(`[Firestore] Error escuchando ${name}:`, err);
          if (callbacks.onError) callbacks.onError(name, err);
        }
      );
    };

    listen('clients', 'clients');
    listen('quotes', 'quotes');
    listen('transactions', 'transactions');

    // Settings: un documento por usuario (id = uid)
    const settingsRef = doc(this.db, COLLECTIONS.settings, this.uid);
    this.unsubscribers.settings = onSnapshot(
      settingsRef,
      (snap) => {
        if (snap.exists()) {
          if (window.appState)
            window.appState.settings = { id: snap.id, ...snap.data() };
          if (callbacks.onDataLoaded)
            callbacks.onDataLoaded('settings', window.appState.settings);
        } else {
          if (window.appState) window.appState.settings = null;
          if (callbacks.onDataLoaded) callbacks.onDataLoaded('settings', null);
        }
      },
      (err) => {
        console.error('[Firestore] Error escuchando settings:', err);
        if (callbacks.onError) callbacks.onError('settings', err);
      }
    );
  }

  stopListening() {
    Object.values(this.unsubscribers).forEach((unsub) => {
      if (unsub) unsub();
    });
    this.unsubscribers = {};
    this.initialized = false;
  }

  // ---- Helpers ----
  basePayload(data) {
    return {
      ...data,
      ownerId: this.uid,
      updatedAt: serverTimestamp()
    };
  }

  // ---- CRUD Clientes ----
  async createClient(data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.col(COLLECTIONS.clients));
    const payload = {
      id: ref.id,
      ...data,
      ownerId: this.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    await setDoc(ref, payload);
    return payload;
  }

  async updateClient(id, data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.col(COLLECTIONS.clients), id);
    await updateDoc(ref, this.basePayload(data));
  }

  async deleteClient(id) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    await deleteDoc(doc(this.col(COLLECTIONS.clients), id));
  }

  // ---- CRUD Cotizaciones ----
  async createQuote(data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.col(COLLECTIONS.quotes));
    const payload = {
      id: ref.id,
      ...data,
      ownerId: this.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    await setDoc(ref, payload);
    return payload;
  }

  async updateQuote(id, data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.col(COLLECTIONS.quotes), id);
    await updateDoc(ref, this.basePayload(data));
  }

  async deleteQuote(id) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    await deleteDoc(doc(this.col(COLLECTIONS.quotes), id));
  }

  // ---- CRUD Transacciones ----
  async createTransaction(data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.col(COLLECTIONS.transactions));
    const payload = {
      id: ref.id,
      ...data,
      ownerId: this.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    await setDoc(ref, payload);
    return payload;
  }

  async updateTransaction(id, data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.col(COLLECTIONS.transactions), id);
    await updateDoc(ref, this.basePayload(data));
  }

  async deleteTransaction(id) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    await deleteDoc(doc(this.col(COLLECTIONS.transactions), id));
  }

  // ---- Configuración ----
  async saveSettings(data) {
    if (!this.isEnabled) throw new Error('No hay usuario autenticado');
    const ref = doc(this.db, COLLECTIONS.settings, this.uid);
    await setDoc(
      ref,
      { ...data, uid: this.uid, updatedAt: serverTimestamp() },
      { merge: true }
    );
  }

  async getSettings() {
    if (!this.isEnabled) return null;
    const snap = await getDoc(doc(this.db, COLLECTIONS.settings, this.uid));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }
}

window.FirestoreService = FirestoreService;
