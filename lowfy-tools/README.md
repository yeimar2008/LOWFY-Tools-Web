# LOWFY Tools — Evolución a SaaS Real

Aplicación web para freelancers y pequeños negocios en Colombia: clientes, cotizaciones, ingresos, gastos, pagos pendientes y dashboard.

## Estructura del proyecto

```
lowfy-tools/
├── index.html              # Punto de entrada (landing + app + lógica)
├── firebase-config.js      # Configuración pública de Firebase (NO subir secretos)
├── firestore-service.js    # Servicio de Cloud Firestore (CRUD + listeners)
├── firestore.rules         # Reglas de seguridad de Firestore
├── firestore.indexes.json  # Índices compuestos requeridos por Firestore
├── .env.example            # Ejemplo de variables de entorno
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Este archivo
```

## Tecnologías

- HTML5, CSS3, JavaScript vanilla (sin frameworks)
- Firebase Authentication (correo/contraseña)
- Cloud Firestore (base de datos en la nube)
- localStorage (fallback cuando no hay sesión activa)

## 1. Configuración de Firebase (pasos manuales)

### En Firebase Console

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. **Authentication > Sign-in method**: activa **Email/Password**.
3. **Authentication > Configuración > Dominios autorizados**: agrega `localhost`, `127.0.0.1` y el dominio de despliegue (ej. `tuusuario.github.io`).
4. **Firestore Database > Create database**: elige ubicación cercana (ej. `southamerica-east1`).
5. **Configuración del proyecto > Tus aplicaciones > Agregar app Web**: registra la app y copia el objeto `firebaseConfig`.

### Archivo `firebase-config.js`

Pega los valores públicos copiados de Firebase Console en `lowfy-tools/firebase-config.js`. Estos valores son visibles en el navegador y es normal; la protección real depende de **Authentication + Security Rules**.

## 2. Reglas de seguridad (`firestore.rules`)

El archivo `firestore.rules` contiene las reglas obligatorias:

- Exige autenticación para todos los datos privados.
- Restringe lectura/creación/actualización/eliminación al propietario (`ownerId == request.auth.uid`).
- Valida tipos de datos, campos permitidos, valores monetarios y estados aceptados.
- Impide que un usuario cambie el `ownerId` de un documento.
- No usa reglas abiertas (`allow read, write: if true`).

### Desplegar reglas

Desde la carpeta del proyecto, con Firebase CLI instalado:

```bash
firebase login
firebase init firestore   # si aún no está inicializado
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

> **Nota:** Las reglas no se aplican automáticamente solo por existir el archivo. Debes desplegarlas con Firebase CLI. Hasta que lo hagas, Firestore puede estar en modo test o bloqueado según lo que elijas al crear la base de datos.

## 3. Desarrollo local

Los módulos ES (`type="module"`) requieren un servidor local (no funciona abriendo el archivo directamente con `file://`).

Con Python:

```bash
cd lowfy-tools
python -m http.server 8000
```

Luego abre: `http://localhost:8000`

Con Node (npx):

```bash
npx serve lowfy-tools
```

## 4. Despliegue estático (GitHub Pages / Firebase Hosting)

El proyecto es un sitio estático. Puedes desplegarlo en:

- **GitHub Pages**: sube el repositorio y activa Pages en la configuración del repositorio.
- **Firebase Hosting**: `firebase init hosting` y `firebase deploy`.

No se requiere backend para el funcionamiento base. Los pagos reales no están integrados (Fase 6 prepara la arquitectura pero no activa cobros).

## 5. Modelo de datos en Firestore

Cada registro privado tiene el campo `ownerId` con el UID de Firebase Authentication:

| Colección | ID del documento | Campo propietario |
|-----------|-----------------|-------------------|
| `users` | `uid` | `uid` |
| `clients` | automático | `ownerId` |
| `quotes` | automático | `ownerId` |
| `transactions` | automático | `ownerId` |
| `settings` | `uid` | `uid` |

## 6. Migración de localStorage (Fase 4)

Cuando un usuario inicia sesión, puede importar voluntariamente sus datos locales a su cuenta de Firebase:

- Vista previa de los registros que se importarán.
- Confirmación explícita antes de subir.
- Evita duplicados.
- No borra los datos locales hasta verificar la importación.
- Permite exportar una copia de respaldo.

## 7. Planes y suscripciones (Fase 6)

- Gratis: $0 COP (límite: 5 clientes, 10 cotizaciones, 30 movimientos)
- Pro: $12.900 COP/mes (ilimitado)
- Negocio: $24.900 COP/mes (ilimitado + funciones avanzadas próximamente)

**No se procesan pagos reales todavía.** Los cambios de plan en la interfaz son solo demostrativos hasta que un backend verifique pagos mediante eventos autenticados de un proveedor de pagos (Wompi, PayU, Mercado Pago, etc.).

## 8. Seguridad

- Las credenciales de cuenta de servicio **nunca** van al frontend.
- El `firebaseConfig` es público por diseño de Firebase; la protección está en Authentication y Security Rules.
- Las reglas de Firestore se despliegan por separado con Firebase CLI.
- No confíes únicamente en filtros del frontend; las reglas son la fuente de verdad.

## 9. Pruebas pendientes

- [ ] Registro e inicio de sesión con Firebase Auth
- [ ] Cada usuario ve solo sus datos (aislamiento por `ownerId`)
- [ ] CRUD de clientes, cotizaciones y transacciones en Firestore
- [ ] Reglas de seguridad bloquean acceso a datos de otros usuarios
- [ ] Migración localStorage → Firestore sin duplicados
- [ ] Funcionamiento en móvil
- [ ] Manejo de errores de red y permisos
