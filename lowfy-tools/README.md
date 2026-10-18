<!DOCTYPE html>
<html lang="es-CO">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LOWFY Tools – Administra tu negocio sin complicarte</title>
  <meta name="description" content="Herramienta simple para freelancers y pequeños negocios en Colombia: clientes, cotizaciones, ingresos, gastos y pagos pendientes." />
  <style>
    :root {
      --bg: #0f0f0f;
      --bg-card: #1a1a1a;
      --bg-hover: #252525;
      --border: #2e2e2e;
      --text: #f5f5f5;
      --text-muted: #a0a0a0;
      --accent: #3b82f6;
      --accent-hover: #2563eb;
      --success: #22c55e;
      --warning: #f59e0b;
      --danger: #ef4444;
      --radius: 10px;
      --shadow: 0 4px 20px rgba(0,0,0,0.35);
      --font: 'Inter', system-ui, -apple-system, sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    .skip-link {
      position: absolute;
      top: -10000px;
      left: 0;
      background: var(--accent);
      color: white;
      padding: 0.75rem 1.5rem;
      z-index: 10000;
      text-decoration: none;
      font-weight: 600;
      border-radius: 4px;
    }
    .skip-link:focus {
      top: 1rem;
      left: 1rem;
    }
    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ===== LANDING ===== */
    .landing { display: block; }
    .landing.hidden { display: none; }
    .app { display: none; }
    .app.visible { display: flex; min-height: 100vh; }

    .nav-landing {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 1.5rem; max-width: 1200px; margin: 0 auto;
    }
    .logo { font-weight: 700; font-size: 1.35rem; letter-spacing: -0.5px; }
    .logo span { color: var(--accent); }
    .btn {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.65rem 1.25rem; border-radius: 8px; font-weight: 600;
      font-size: 0.95rem; cursor: pointer; border: none; transition: all 0.2s;
    }
    .btn-primary { background: var(--accent); color: white; }
    .btn-primary:hover { background: var(--accent-hover); }
    .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); }
    .btn-outline:hover { background: var(--bg-hover); }
    .btn-sm { padding: 0.4rem 0.85rem; font-size: 0.85rem; }
    .btn-danger { background: var(--danger); color: white; }
    .btn-success { background: var(--success); color: white; }
    .btn-ghost { background: transparent; color: var(--text-muted); }
    .btn-ghost:hover { color: var(--text); background: var(--bg-hover); }

    .hero {
      text-align: center; padding: 4rem 1.5rem 3rem; max-width: 800px; margin: 0 auto;
    }
    .hero h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }
    .hero p { font-size: 1.15rem; color: var(--text-muted); margin-bottom: 2rem; }
    .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    .section { max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem; }
    .section h2 { font-size: 1.75rem; margin-bottom: 0.5rem; text-align: center; }
    .section .subtitle { text-align: center; color: var(--text-muted); margin-bottom: 2.5rem; }

    .features {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;
    }
    .feature-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);
      padding: 1.5rem; transition: transform 0.2s, border-color 0.2s;
    }
    .feature-card:hover { transform: translateY(-3px); border-color: var(--accent); }
    .feature-card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
    .feature-card p { color: var(--text-muted); font-size: 0.95rem; }

    .demo-preview {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
      padding: 1.5rem; margin-top: 1rem; overflow: hidden;
    }
    .demo-preview img, .demo-mock {
      width: 100%; border-radius: 8px; background: #111; min-height: 220px;
      display: flex; align-items: center; justify-content: center; color: var(--text-muted);
    }

    .pricing {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;
    }
    .price-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);
      padding: 2rem 1.5rem; text-align: center; position: relative;
    }
    .price-card.popular { border-color: var(--accent); }
    .price-card.popular::before {
      content: "Más popular"; position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
      background: var(--accent); color: white; font-size: 0.75rem; font-weight: 600;
      padding: 0.25rem 0.75rem; border-radius: 20px;
    }
    .price-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .price-card .price { font-size: 2rem; font-weight: 800; margin: 1rem 0; }
    .price-card .price span { font-size: 0.9rem; font-weight: 400; color: var(--text-muted); }
    .price-card ul { list-style: none; text-align: left; margin: 1.5rem 0; }
    .price-card li { padding: 0.4rem 0; font-size: 0.95rem; color: var(--text-muted); }
    .price-card li::before { content: "✓ "; color: var(--success); font-weight: 700; }

    .faq details {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px;
      margin-bottom: 0.75rem; padding: 1rem 1.25rem;
    }
    .faq summary { cursor: pointer; font-weight: 600; }
    .faq p { margin-top: 0.75rem; color: var(--text-muted); font-size: 0.95rem; }

    footer {
      border-top: 1px solid var(--border); padding: 2rem 1.5rem; text-align: center;
      color: var(--text-muted); font-size: 0.9rem;
    }
    footer a { color: var(--text-muted); text-decoration: none; margin: 0 0.75rem; }
    footer a:hover { color: var(--accent); }

    /* ===== APP LAYOUT ===== */
    .sidebar {
      width: 240px; background: var(--bg-card); border-right: 1px solid var(--border);
      display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0;
      z-index: 100; transition: transform 0.25s ease;
    }
    .sidebar-header { padding: 1.25rem 1.25rem 1rem; border-bottom: 1px solid var(--border); }
    .sidebar nav { flex: 1; padding: 1rem 0.75rem; overflow-y: auto; }
    .nav-item {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.7rem 1rem;
      border-radius: 8px; color: var(--text-muted); cursor: pointer; font-weight: 500;
      margin-bottom: 0.25rem; transition: all 0.15s;
    }
    .nav-item:hover { background: var(--bg-hover); color: var(--text); }
    .nav-item.active { background: rgba(59,130,246,0.15); color: var(--accent); }
    .sidebar-footer { padding: 1rem; border-top: 1px solid var(--border); font-size: 0.85rem; color: var(--text-muted); }

    .main {
      flex: 1; margin-left: 240px; min-height: 100vh; display: flex; flex-direction: column;
    }
    .topbar {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); background: var(--bg);
      position: sticky; top: 0; z-index: 50;
    }
    .topbar h1 { font-size: 1.25rem; font-weight: 700; }
    .content { padding: 1.5rem; flex: 1; max-width: 1200px; width: 100%; margin: 0 auto; }

    /* Cards & Stats */
    .stats-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;
    }
    .stat-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);
      padding: 1.25rem;
    }
    .stat-card .label { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.35rem; }
    .stat-card .value { font-size: 1.5rem; font-weight: 700; }
    .stat-card .value.positive { color: var(--success); }
    .stat-card .value.negative { color: var(--danger); }
    .stat-card .value.warning { color: var(--warning); }

    .card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);
      padding: 1.25rem; margin-bottom: 1.25rem;
    }
    .card-header {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;
    }
    .card-header h2 { font-size: 1.15rem; }

    /* Tables */
    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    th, td { padding: 0.75rem 0.85rem; text-align: left; border-bottom: 1px solid var(--border); }
    th { color: var(--text-muted); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em; }
    tr:hover td { background: var(--bg-hover); }
    .badge {
      display: inline-block; padding: 0.2rem 0.55rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
    }
    .badge-draft { background: #374151; color: #d1d5db; }
    .badge-sent { background: #1e3a8a; color: #93c5fd; }
    .badge-accepted { background: #14532d; color: #86efac; }
    .badge-rejected { background: #7f1d1d; color: #fca5a5; }
    .badge-pending { background: #78350f; color: #fcd34d; }
    .badge-paid { background: #14532d; color: #86efac; }

    /* Forms */
    .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.35rem; }
    input, select, textarea {
      width: 100%; padding: 0.6rem 0.85rem; background: var(--bg); border: 1px solid var(--border);
      border-radius: 7px; color: var(--text); font-size: 0.95rem; font-family: inherit;
    }
    input:focus, select:focus, textarea:focus { outline: none; border-color: var(--accent); }
    textarea { resize: vertical; min-height: 80px; }
    .form-actions { display: flex; gap: 0.75rem; margin-top: 1.25rem; flex-wrap: wrap; }
    .error-msg { color: var(--danger); font-size: 0.85rem; margin-top: 0.25rem; }

    /* Empty states */
    .empty {
      text-align: center; padding: 3rem 1rem; color: var(--text-muted);
    }
    .empty p { margin-bottom: 1rem; }

    /* Modal */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 200;
      display: none; align-items: center; justify-content: center; padding: 1rem;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
      width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto; padding: 1.5rem;
    }
    .modal-lg { max-width: 720px; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
    .modal-header h3 { font-size: 1.2rem; }
    .close-btn { background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer; line-height: 1; }

    /* Toast */
    .toast-container { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 300; display: flex; flex-direction: column; gap: 0.5rem; }
    .toast {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px;
      padding: 0.85rem 1.25rem; min-width: 280px; box-shadow: var(--shadow);
      animation: slideIn 0.25s ease;
    }
    .toast.success { border-left: 4px solid var(--success); }
    .toast.error { border-left: 4px solid var(--danger); }
    @keyframes slideIn { from { transform: translateY(20px); opacity: 0; } to { transform: none; opacity: 1; } }

    /* Chart simple */
    .chart-container { height: 220px; position: relative; }
    .chart-bars { display: flex; align-items: flex-end; gap: 8px; height: 180px; padding-top: 10px; }
    .chart-bar-group { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .chart-bar { width: 100%; max-width: 32px; border-radius: 4px 4px 0 0; transition: height 0.4s; }
    .chart-bar.income { background: var(--success); }
    .chart-bar.expense { background: var(--danger); }
    .chart-label { font-size: 0.7rem; color: var(--text-muted); }

    /* Quote print view */
    .print-area { display: none; }
    @media print {
      body * { visibility: hidden; }
      .print-area, .print-area * { visibility: visible; }
      .print-area { display: block; position: absolute; left: 0; top: 0; width: 100%; background: white; color: black; padding: 2rem; }
    }

    /* Mobile */
    .menu-toggle { display: none; background: none; border: none; color: var(--text); font-size: 1.5rem; cursor: pointer; }
    .overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 90; }
    .overlay.show { display: block; }

    @media (max-width: 768px) {
      .sidebar { transform: translateX(-100%); }
      .sidebar.open { transform: translateX(0); }
      .main { margin-left: 0; }
      .menu-toggle { display: block; }
      .stats-grid { grid-template-columns: 1fr 1fr; }
      .hero { padding: 3rem 1rem; }
    }

    /* Welcome guide */
    .welcome-banner {
      background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05));
      border: 1px solid rgba(59,130,246,0.3); border-radius: var(--radius);
      padding: 1.25rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;
    }
    .welcome-banner p { color: var(--text-muted); font-size: 0.95rem; margin-top: 0.35rem; }

    /* Items list in quote form */
    .items-list { margin: 1rem 0; }
    .item-row {
      display: grid; grid-template-columns: 2fr 80px 110px 40px; gap: 0.5rem; margin-bottom: 0.5rem; align-items: center;
    }
    @media (max-width: 500px) {
      .item-row { grid-template-columns: 1fr 1fr; }
    }

    .plan-limit {
      background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3);
      border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem; font-size: 0.9rem; color: #fcd34d;
    }

    /* ===== Pantalla de autenticación ===== */
    .auth-screen {
      display: none;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: var(--bg);
      padding: 1rem;
    }
    .auth-screen.visible { display: flex; }
    .auth-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem;
      width: 100%;
      max-width: 400px;
    }
    .auth-card h2 { margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem; }
    .auth-switch { text-align: center; margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted); }
    .auth-switch button { background: none; border: none; color: var(--accent); cursor: pointer; text-decoration: underline; }
    .auth-switch button:hover { color: var(--accent-hover); }
    .auth-error { background: rgba(239,68,68,0.1); border: 1px solid var(--danger); color: var(--danger); border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; font-size: 0.9rem; display: none; }
    .auth-error.visible { display: block; }

    /* ===== FASE 2.5: Animaciones sutiles página pública (landing) ===== */

    /* Respetar preferencia de reducir movimiento */
    @media (prefers-reduced-motion: reduce) {
      .reveal, .reveal-stagger > *, .hero-appear {
        animation: none !important;
        transition: none !important;
      }
      .reveal, .reveal-stagger > * {
        opacity: 1 !important;
        transform: none !important;
      }
    }

    /* Estado inicial: elementos ocultos antes de entrar en viewport */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Grupo escalonado: cada hijo aparece con ligero retraso */
    .reveal-stagger > * {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }

    .reveal-stagger > *.active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Delays escalonados suaves (sin exceso) */
    .reveal-stagger > *.active:nth-child(1) { transition-delay: 0.05s; }
    .reveal-stagger > *.active:nth-child(2) { transition-delay: 0.12s; }
    .reveal-stagger > *.active:nth-child(3) { transition-delay: 0.19s; }
    .reveal-stagger > *.active:nth-child(4) { transition-delay: 0.26s; }
    .reveal-stagger > *.active:nth-child(5) { transition-delay: 0.33s; }
    .reveal-stagger > *.active:nth-child(6) { transition-delay: 0.40s; }

    /* Aparición inicial del hero (suave, no bloqueante) */
    .hero-appear {
      animation: heroFadeIn 0.8s ease-out forwards;
    }

    @keyframes heroFadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Microinteracción: clic en botones */
    .btn:active {
      transform: scale(0.96);
    }

    /* Transiciones suaves en tarjetas interactivas */
    .feature-card, .price-card {
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    /* Focus visible para accesibilidad por teclado */
    *:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    /* ===== FASE 4: Indicador de sincronización ===== */
    .sync-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      padding: 0.35rem 0.75rem;
      border-radius: 20px;
      margin-top: 0.5rem;
      transition: background 0.2s, color 0.2s;
    }
    .sync-indicator.sync-idle {
      background: rgba(34,197,94,0.15);
      color: var(--success);
      border: 1px solid rgba(34,197,94,0.3);
    }
    .sync-indicator.sync-loading {
      background: rgba(245,158,11,0.15);
      color: #fcd34d;
      border: 1px solid rgba(245,158,11,0.3);
    }
    .sync-indicator.sync-error {
      background: rgba(239,68,68,0.15);
      color: var(--danger);
      border: 1px solid rgba(239,68,68,0.3);
    }
    .sync-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: currentColor;
    }
    .sync-dot.pulse {
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    /* ===== FASE 4: Tarjeta de migración ===== */
    .migration-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      margin-top: 1.5rem;
    }
    .migration-card h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .migration-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    .migration-stat {
      background: var(--bg-hover);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.75rem;
      text-align: center;
    }
    .migration-stat .value {
      font-size: 1.5rem;
      font-weight: 700;
      display: block;
    }
    .migration-stat .label {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .migration-preview {
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      font-size: 0.85rem;
    }
    .migration-preview .item {
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
    }
    .migration-preview .item:last-child { border-bottom: none; }
    .migration-result {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 8px;
      display: none;
    }
    .migration-result.visible { display: block; }
    .migration-result.success { background: rgba(34,197,94,0.1); border-left: 4px solid var(--success); color: var(--text); }
    .migration-result.error { background: rgba(239,68,68,0.1); border-left: 4px solid var(--danger); color: var(--text); }
  </style>
</head>
<body>
  <!-- Skip to content for accessibility -->
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

<!-- ==================== LANDING PAGE ==================== -->
<div id="landing" class="landing" role="region" aria-label="Página de inicio">
  <nav class="nav-landing" aria-label="Navegación principal">
    <div class="logo" aria-label="LOWFY Tools">LOWFY <span>Tools</span></div>
    <button class="btn btn-primary" onclick="enterApp()">Comenzar gratis</button>
  </nav>

  <section class="hero hero-appear">
    <h1>Administra tu negocio sin complicarte</h1>
    <p>Clientes, cotizaciones, ingresos, gastos y pagos pendientes en un solo lugar. Ideal para freelancers, técnicos y pequeños negocios en Colombia.</p>
    <div class="hero-actions">
      <button class="btn btn-primary" onclick="enterApp()">Comenzar gratis</button>
      <button class="btn btn-outline" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">Ver funcionalidades</button>
    </div>
  </section>

  <section class="section" id="features">
    <h2>Todo lo que necesitas</h2>
    <p class="subtitle">Sin hojas de cálculo complicadas ni cuadernos perdidos.</p>
    <div class="features reveal-stagger">
      <div class="feature-card reveal">
        <h3>Clientes</h3>
        <p>Guarda datos de contacto, notas y consulta el historial de cotizaciones y pagos de cada cliente.</p>
      </div>
      <div class="feature-card reveal">
        <h3>Cotizaciones</h3>
        <p>Crea cotizaciones profesionales, calcula totales automáticamente y compártelas por WhatsApp.</p>
      </div>
      <div class="feature-card reveal">
        <h3>Ingresos y gastos</h3>
        <p>Registra movimientos, categorías, estados de pago y controla saldos pendientes.</p>
      </div>
      <div class="feature-card reveal">
        <h3>Dashboard</h3>
        <p>Ve de un vistazo cuánto has ganado, cuánto has gastado y qué tienes por cobrar.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <h2>Así se ve el panel</h2>
    <p class="subtitle">Interfaz limpia y fácil de usar desde el celular o el computador.</p>
    <div class="demo-preview reveal">
      <div class="demo-mock">
        <div style="text-align:center;padding:2rem;">
          <div style="font-size:2.5rem;margin-bottom:0.5rem;">📊</div>
          <p>Dashboard con ingresos, gastos, ganancia y pagos pendientes</p>
          <p style="font-size:0.85rem;margin-top:0.5rem;">+ tablas de clientes y cotizaciones</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="pricing">
    <h2>Planes simples</h2>
    <p class="subtitle">Empieza gratis. Escala cuando lo necesites.</p>
    <div class="pricing reveal-stagger">
      <div class="price-card reveal">
        <h3>Gratis</h3>
        <div class="price">$0 <span>/ mes</span></div>
        <ul>
          <li>Hasta 5 clientes</li>
          <li>Hasta 10 cotizaciones</li>
          <li>Hasta 30 movimientos</li>
          <li>Dashboard básico</li>
          <li>Exportar CSV</li>
        </ul>
        <button class="btn btn-outline" style="width:100%" onclick="enterApp()">Empezar</button>
      </div>
      <div class="price-card reveal popular">
        <h3>Pro</h3>
        <div class="price">$12.900 <span>/ mes</span></div>
        <ul>
          <li>Clientes ilimitados</li>
          <li>Cotizaciones ilimitadas</li>
          <li>Movimientos ilimitados</li>
          <li>Historial completo</li>
          <li>Soporte prioritario</li>
        </ul>
        <button class="btn btn-primary" style="width:100%" onclick="enterApp(); setPlan('pro')">Probar Pro</button>
      </div>
      <div class="price-card reveal">
        <h3>Negocio</h3>
        <div class="price">$24.900 <span>/ mes</span></div>
        <ul>
          <li>Todo de Pro</li>
          <li>Múltiples usuarios (próximamente)</li>
          <li>Reportes avanzados</li>
          <li>Integraciones</li>
          <li>Soporte dedicado</li>
        </ul>
        <button class="btn btn-outline" style="width:100%" onclick="enterApp(); setPlan('negocio')">Probar Negocio</button>
      </div>
    </div>
  </section>

  <section class="section faq reveal">
    <h2>Preguntas frecuentes</h2>
    <p class="subtitle" style="margin-bottom:1.5rem;">Respuestas claras.</p>
    <details class="reveal">
      <summary>¿Es una factura electrónica oficial?</summary>
      <p>No. LOWFY Tools genera cotizaciones y registros de ingresos/gastos para control interno. No emite facturas electrónicas DIAN.</p>
    </details>
    <details class="reveal">
      <summary>¿Mis datos están seguros?</summary>
      <p>En esta versión demo los datos se guardan solo en tu navegador (localStorage). No se envían a ningún servidor. Para uso profesional real se recomienda una versión con base de datos y autenticación.</p>
    </details>
    <details class="reveal">
      <summary>¿Puedo usarlo desde el celular?</summary>
      <p>Sí. La interfaz es completamente adaptable a celulares, tablets y computadores.</p>
    </details>
    <details class="reveal">
      <summary>¿Cómo funcionan los límites del plan gratis?</summary>
      <p>Puedes crear hasta 5 clientes, 10 cotizaciones y 30 movimientos. Al llegar al límite se te invita a pasar a Pro.</p>
    </details>
  </section>

  <footer class="reveal">
    <div class="logo" style="margin-bottom:1rem;">LOWFY <span>Tools</span></div>
    <div>
      <a href="#" onclick="alert('Contacto: hola@lowfy.tools (demo)')">Contacto</a>
      <a href="#" onclick="alert('Política de privacidad: en esta versión demo los datos solo viven en tu navegador.')">Privacidad</a>
      <a href="#" onclick="alert('Términos de uso: herramienta de demostración. No constituye asesoría contable ni legal.')">Términos</a>
    </div>
    <p style="margin-top:1.25rem;">© 2026 LOWFY Tools · Hecho para freelancers y pequeños negocios de Colombia</p>
  </footer>
</div>

<!-- ==================== PANTALLA DE AUTENTICACIÓN ==================== -->
<div id="auth-screen" class="auth-screen">
  <div class="auth-card">
    <h2 id="auth-title">Iniciar sesión</h2>
    <div id="auth-error" class="auth-error"></div>

    <form id="login-form">
      <div class="form-group">
        <label>Correo electrónico</label>
        <input type="email" name="email" required placeholder="correo@ejemplo.com" />
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" name="password" required placeholder="••••••••" />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary" style="width:100%">Iniciar sesión</button>
      </div>
    </form>

    <div class="auth-switch">
      <p>¿No tienes cuenta? <button type="button" onclick="switchAuthMode('register')">Crear cuenta</button></p>
      <p><button type="button" onclick="showForgotPassword()">Olvidé mi contraseña</button></p>
    </div>

    <form id="register-form" style="display:none;">
      <div class="form-group">
        <label>Correo electrónico</label>
        <input type="email" name="email" required placeholder="correo@ejemplo.com" />
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" name="password" required placeholder="••••••••" />
      </div>
      <div class="form-group">
        <label>Confirmar contraseña</label>
        <input type="password" name="confirmPassword" required placeholder="••••••••" />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary" style="width:100%">Crear cuenta</button>
        <button type="button" class="btn btn-outline" style="width:100%;margin-top:0.5rem;" onclick="switchAuthMode('login')">Volver al inicio de sesión</button>
      </div>
    </form>

    <form id="forgot-form" style="display:none;">
      <div class="form-group">
        <label>Correo electrónico</label>
        <input type="email" name="email" required placeholder="correo@ejemplo.com" />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary" style="width:100%">Enviar enlace de recuperación</button>
        <button type="button" class="btn btn-outline" style="width:100%;margin-top:0.5rem;" onclick="switchAuthMode('login')">Volver al inicio de sesión</button>
      </div>
    </form>
  </div>
</div>

<!-- ==================== APP ==================== -->
<div id="app" class="app" role="application" aria-label="Aplicación LOWFY Tools">
  <div class="overlay" id="overlay" onclick="closeSidebar()"></div>

  <aside class="sidebar" id="sidebar" aria-label="Menú de navegación">
    <div class="sidebar-header">
      <div class="logo" aria-label="LOWFY Tools">LOWFY <span>Tools</span></div>
    </div>
    <nav>
      <div class="nav-item active" data-section="dashboard" role="button" tabindex="0" aria-pressed="true" aria-current="page" onclick="showSection('dashboard')" onkeydown="handleNavKeydown(event, 'dashboard')">
        <span aria-hidden="true">📊</span> <span>Dashboard</span>
      </div>
      <div class="nav-item" data-section="clientes" role="button" tabindex="0" aria-pressed="false" onclick="showSection('clientes')" onkeydown="handleNavKeydown(event, 'clientes')">
        <span aria-hidden="true">👥</span> <span>Clientes</span>
      </div>
      <div class="nav-item" data-section="cotizaciones" role="button" tabindex="0" aria-pressed="false" onclick="showSection('cotizaciones')" onkeydown="handleNavKeydown(event, 'cotizaciones')">
        <span aria-hidden="true">📄</span> <span>Cotizaciones</span>
      </div>
      <div class="nav-item" data-section="finanzas" role="button" tabindex="0" aria-pressed="false" onclick="showSection('finanzas')" onkeydown="handleNavKeydown(event, 'finanzas')">
        <span aria-hidden="true">💰</span> <span>Ingresos y gastos</span>
      </div>
      <div class="nav-item" data-section="planes" role="button" tabindex="0" aria-pressed="false" onclick="showSection('planes')" onkeydown="handleNavKeydown(event, 'planes')">
        <span aria-hidden="true">⭐</span> <span>Planes</span>
      </div>
      <div class="nav-item" data-section="config" role="button" tabindex="0" aria-pressed="false" onclick="showSection('config')" onkeydown="handleNavKeydown(event, 'config')">
        <span aria-hidden="true">⚙️</span> <span>Configuración</span>
      </div>
    </nav>
    <div class="sidebar-footer">
      Plan: <strong id="current-plan-label">Gratis</strong>
    </div>
    <div id="sync-status" class="sync-indicator sync-idle" style="margin-top:0.5rem;display:none;">
      <span class="sync-dot pulse"></span>
      <span id="sync-text">Sincronizado con la nube</span>
    </div>
    <div id="auth-user-bar" class="sidebar-footer" style="margin-top:1rem;display:none;">
      <div id="auth-user-email" style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem;word-break:break-all;"></div>
      <button class="btn btn-sm btn-outline" style="width:100%" onclick="logoutFirebase()">Cerrar sesión</button>
    </div>
  </aside>

  <div class="main" id="main-content" tabindex="-1">
    <header class="topbar">
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <button class="menu-toggle" onclick="toggleSidebar()" aria-label="Abrir menú de navegación">☰</button>
        <h1 id="page-title">Dashboard</h1>
      </div>
      <div style="display:flex;gap:0.5rem;align-items:center;">
        <button class="btn btn-sm btn-outline" onclick="exportAllCSV()">Exportar CSV</button>
        <button class="btn btn-sm btn-ghost" onclick="exitApp()">Salir</button>
      </div>
    </header>

    <div class="content" id="content" aria-live="polite">
      <!-- Dynamic content -->
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal-overlay" id="modal">
  <div class="modal" id="modal-content"></div>
</div>

<!-- Toast container -->
<div class="toast-container" id="toasts"></div>

<!-- Print area (hidden) -->
<div class="print-area" id="print-area"></div>

<!-- ==================== FIREBASE SDK ====================
     Carga los SDK oficiales (modulares) de Firebase: app, auth y firestore.
     La versión exacta se puede ajustar; se usa 10.7.1 como referencia estable. -->
<script type="module" src="firebase-config.js"></script>
<script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
  import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
  import { firebaseConfig } from './firebase-config.js';

  const app = initializeApp(firebaseConfig);
  window.firebaseAuth = getAuth(app);
  window.firebaseDb = getFirestore(app);
  window.firebaseApp = app;

  console.log('[Firebase] App inicializada:', app.name);
</script>

<script>
// ==================== DATA & STATE ====================
const STORAGE_KEY = 'lowfy_tools_v1';
const LIMITS = {
  free: { clients: 5, quotes: 10, transactions: 30 },
  pro: { clients: Infinity, quotes: Infinity, transactions: Infinity },
  negocio: { clients: Infinity, quotes: Infinity, transactions: Infinity }
};

let state = {
  plan: 'free',
  clients: [],
  quotes: [],
  transactions: [],
  categories: ['Servicios', 'Productos', 'Materiales', 'Transporte', 'Otros'],
  showWelcome: true,
  demoLoaded: false
};
window.appState = state; // Expuesto para el servicio de Firestore

const uiState = {
  clientSearch: '',
  txFilterType: 'all',
  txFilterCat: 'all'
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.warn('Error loading state', e);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatCOP(n) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n || 0);
}

function formatDate(d) {
  if (!d) return '—';
  const date = new Date(d);
  return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
}

function toast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function confirmDelete(msg) {
  return window.confirm(msg || '¿Estás seguro de eliminar este registro? Esta acción no se puede deshacer.');
}

function setFieldError(input, message) {
  if (!input) return;
  const formGroup = input.closest('.form-group');
  // Remover error previo
  const existing = formGroup ? formGroup.querySelector('.field-error') : null;
  if (existing) existing.remove();
  if (message) {
    input.setAttribute('aria-invalid', 'true');
    if (formGroup) {
      const err = document.createElement('span');
      err.className = 'error-msg field-error';
      err.textContent = message;
      err.setAttribute('aria-live', 'polite');
      formGroup.appendChild(err);
    }
    input.focus();
  } else {
    input.removeAttribute('aria-invalid');
  }
}

function clearFieldErrors(form) {
  if (!form) return;
  form.querySelectorAll('.field-error').forEach(el => el.remove());
  form.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));
}

let lastFocusedElement = null;

function openModal() {
  const modal = document.getElementById('modal');
  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  // Enfocar el primer elemento enfocable dentro del modal
  const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) focusable.focus();
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.querySelector('#modal-content').className = 'modal';
  // Devolver foco al elemento que abrió el modal
  if (lastFocusedElement) lastFocusedElement.focus();
  lastFocusedElement = null;
}

// ==================== LIMITS ====================
function checkLimit(type) {
  const plan = state.plan || 'free';
  const limits = LIMITS[plan] || LIMITS.free;
  if (type === 'clients' && state.clients.length >= limits.clients) {
    toast(`Límite del plan Gratis alcanzado (${limits.clients} clientes). Pasa a Pro para continuar.`, 'error');
    return false;
  }
  if (type === 'quotes' && state.quotes.length >= limits.quotes) {
    toast(`Límite del plan Gratis alcanzado (${limits.quotes} cotizaciones). Pasa a Pro.`, 'error');
    return false;
  }
  if (type === 'transactions' && state.transactions.length >= limits.transactions) {
    toast(`Límite del plan Gratis alcanzado (${limits.transactions} movimientos). Pasa a Pro.`, 'error');
    return false;
  }
  return true;
}

function setPlan(plan) {
  state.plan = plan;
  saveState();
  document.getElementById('current-plan-label').textContent = plan === 'free' ? 'Gratis' : plan === 'pro' ? 'Pro' : 'Negocio';
  toast(`Plan cambiado a ${plan === 'free' ? 'Gratis' : plan.charAt(0).toUpperCase() + plan.slice(1)} (demo)`);
  if (document.getElementById('app').classList.contains('visible')) {
    showSection(currentSection);
  }
}

// ==================== DEMO DATA ====================
function loadDemoData() {
  if (state.demoLoaded && state.clients.length > 0) return;
  state.clients = [
    { id: 'c1', name: 'María Gómez', phone: '3001234567', email: 'maria@email.com', notes: 'Cliente frecuente – instalaciones eléctricas', createdAt: '2026-09-10' },
    { id: 'c2', name: 'Carlos Ruiz', phone: '3109876543', email: 'carlos@empresa.co', notes: 'Empresa de mantenimiento', createdAt: '2026-09-15' },
    { id: 'c3', name: 'Ana López', phone: '3155551234', email: '', notes: '', createdAt: '2026-10-01' }
  ];
  state.quotes = [
    {
      id: 'q1', number: 'COT-2026-001', clientId: 'c1', date: '2026-10-05', validUntil: '2026-10-20',
      status: 'aceptada', description: 'Instalación de tomas e iluminación',
      items: [
        { desc: 'Instalación de 8 tomas dobles', qty: 8, price: 35000 },
        { desc: 'Cableado y materiales', qty: 1, price: 180000 }
      ],
      createdAt: '2026-10-05'
    },
    {
      id: 'q2', number: 'COT-2026-002', clientId: 'c2', date: '2026-10-12', validUntil: '2026-10-27',
      status: 'enviada', description: 'Mantenimiento preventivo',
      items: [
        { desc: 'Revisión general de tablero', qty: 1, price: 120000 },
        { desc: 'Cambio de breakers', qty: 3, price: 45000 }
      ],
      createdAt: '2026-10-12'
    }
  ];
  state.transactions = [
    { id: 't1', type: 'income', category: 'Servicios', description: 'Pago cotización COT-2026-001', amount: 460000, date: '2026-10-08', status: 'paid', clientId: 'c1', paidAmount: 460000 },
    { id: 't2', type: 'expense', category: 'Materiales', description: 'Compra de cable y tomas', amount: 95000, date: '2026-10-06', status: 'paid', paidAmount: 95000 },
    { id: 't3', type: 'income', category: 'Servicios', description: 'Abono mantenimiento Carlos', amount: 150000, date: '2026-10-14', status: 'pending', clientId: 'c2', paidAmount: 80000 },
    { id: 't4', type: 'expense', category: 'Transporte', description: 'Gasolina y parqueadero', amount: 45000, date: '2026-10-10', status: 'paid', paidAmount: 45000 }
  ];
  state.demoLoaded = true;
  state.showWelcome = true;
  saveState();
  toast('Datos de demostración cargados');
}

function clearDemoData() {
  if (!confirmDelete('¿Eliminar todos los datos (incluyendo demo)? Esta acción no se puede deshacer.')) return;
  state.clients = [];
  state.quotes = [];
  state.transactions = [];
  state.demoLoaded = false;
  state.showWelcome = true;
  saveState();
  toast('Datos eliminados');
  showSection(currentSection);
}

// ==================== NAVIGATION ====================
let currentSection = 'dashboard';
let debounceTimer = null;
window.saveLock = false;

function debounce(fn, delay) {
  return function(...args) {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn(...args), delay);
  };
}

function enterApp() {
  document.getElementById('landing').classList.add('hidden');
  if (window.currentFirebaseUser) {
    document.getElementById('app').classList.add('visible');
    loadState();
    if (!state.demoLoaded && state.clients.length === 0) {
      loadDemoData();
    }
    document.getElementById('current-plan-label').textContent =
      state.plan === 'free' ? 'Gratis' : state.plan === 'pro' ? 'Pro' : 'Negocio';
    showSection('dashboard');
  } else {
    document.getElementById('auth-screen').classList.add('visible');
  }
}

async function exitApp() {
  await logoutFirebase();
  document.getElementById('app').classList.remove('visible');
  document.getElementById('landing').classList.remove('hidden');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

function handleNavKeydown(event, section) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showSection(section);
  }
}

function showSection(section) {
  currentSection = section;
  closeSidebar();
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === section);
  });
  const titles = {
    dashboard: 'Dashboard',
    clientes: 'Clientes',
    cotizaciones: 'Cotizaciones',
    finanzas: 'Ingresos y gastos',
    planes: 'Planes',
    config: 'Configuración'
  };
  document.getElementById('page-title').textContent = titles[section] || section;
  const content = document.getElementById('content');
  if (section === 'dashboard') content.innerHTML = renderDashboard();
  else if (section === 'clientes') content.innerHTML = renderClientes();
  else if (section === 'cotizaciones') content.innerHTML = renderCotizaciones();
  else if (section === 'finanzas') content.innerHTML = renderFinanzas();
  else if (section === 'planes') content.innerHTML = renderPlanes();
  else if (section === 'config') {
    content.innerHTML = renderConfig();
    previewMigration();
  }
}

// ==================== CALCULATIONS ====================
function getStats() {
  const income = state.transactions
    .filter(t => t.type === 'income')
    .reduce((s, t) => s + (t.paidAmount || 0), 0);
  const expense = state.transactions
    .filter(t => t.type === 'expense')
    .reduce((s, t) => s + (t.paidAmount || 0), 0);
  const pending = state.transactions
    .filter(t => t.type === 'income' && t.status === 'pending')
    .reduce((s, t) => s + ((t.amount || 0) - (t.paidAmount || 0)), 0);
  return {
    income,
    expense,
    profit: income - expense,
    pending,
    quotesCount: state.quotes.length,
    clientsCount: state.clients.length
  };
}

function getQuoteTotal(quote) {
  return (quote.items || []).reduce((s, i) => s + (i.qty || 0) * (i.price || 0), 0);
}

// ==================== DASHBOARD ====================
function renderDashboard() {
  const stats = getStats();
  const recent = [
    ...state.quotes.slice(-3).map(q => ({ type: 'quote', data: q, date: q.createdAt || q.date })),
    ...state.transactions.slice(-4).map(t => ({ type: 'tx', data: t, date: t.date }))
  ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  // Simple chart data (last 6 months)
  const months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
      label: d.toLocaleDateString('es-CO', { month: 'short' })
    });
  }
  const chartData = months.map(m => {
    const inc = state.transactions
      .filter(t => t.type === 'income' && (t.date || '').startsWith(m.key))
      .reduce((s, t) => s + (t.paidAmount || 0), 0);
    const exp = state.transactions
      .filter(t => t.type === 'expense' && (t.date || '').startsWith(m.key))
      .reduce((s, t) => s + (t.paidAmount || 0), 0);
    return { ...m, inc, exp };
  });
  const maxVal = Math.max(...chartData.flatMap(d => [d.inc, d.exp]), 1);

  let html = '';
  if (state.showWelcome) {
    html += `
      <div class="welcome-banner">
        <div>
          <strong>¡Bienvenido a LOWFY Tools!</strong>
          <p>Esta es una versión de demostración. Los datos se guardan solo en este navegador. Empieza creando un cliente o una cotización.</p>
        </div>
        <button class="btn btn-sm btn-ghost" onclick="state.showWelcome=false;saveState();showSection('dashboard')">Cerrar</button>
      </div>`;
  }

  html += `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="label">Ingresos registrados</div>
        <div class="value positive">${formatCOP(stats.income)}</div>
      </div>
      <div class="stat-card">
        <div class="label">Gastos registrados</div>
        <div class="value negative">${formatCOP(stats.expense)}</div>
      </div>
      <div class="stat-card">
        <div class="label">Ganancia estimada</div>
        <div class="value ${stats.profit >= 0 ? 'positive' : 'negative'}">${formatCOP(stats.profit)}</div>
      </div>
      <div class="stat-card">
        <div class="label">Pagos pendientes</div>
        <div class="value warning">${formatCOP(stats.pending)}</div>
      </div>
      <div class="stat-card">
        <div class="label">Cotizaciones</div>
        <div class="value">${stats.quotesCount}</div>
      </div>
      <div class="stat-card">
        <div class="label">Clientes</div>
        <div class="value">${stats.clientsCount}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h2>Ingresos vs Gastos (últimos 6 meses)</h2></div>
      <div class="chart-container">
        <div class="chart-bars">
          ${chartData.map(d => `
            <div class="chart-bar-group">
              <div style="display:flex;gap:3px;align-items:flex-end;height:160px;">
                <div class="chart-bar income" style="height:${(d.inc / maxVal) * 150}px" title="Ingresos: ${formatCOP(d.inc)}"></div>
                <div class="chart-bar expense" style="height:${(d.exp / maxVal) * 150}px" title="Gastos: ${formatCOP(d.exp)}"></div>
              </div>
              <div class="chart-label">${d.label}</div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex;gap:1.5rem;justify-content:center;margin-top:0.75rem;font-size:0.85rem;color:var(--text-muted);">
          <span><span style="display:inline-block;width:12px;height:12px;background:var(--success);border-radius:2px;margin-right:4px;"></span>Ingresos</span>
          <span><span style="display:inline-block;width:12px;height:12px;background:var(--danger);border-radius:2px;margin-right:4px;"></span>Gastos</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h2>Actividad reciente</h2></div>
      ${recent.length === 0 ? '<div class="empty"><p>Aún no hay actividad. Crea tu primera cotización o registra un ingreso.</p></div>' : `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Fecha</th><th>Tipo</th><th>Detalle</th><th>Valor</th></tr></thead>
            <tbody>
              ${recent.map(r => {
                if (r.type === 'quote') {
                  const q = r.data;
                  const client = state.clients.find(c => c.id === q.clientId);
                  return `<tr>
                    <td>${formatDate(q.date)}</td>
                    <td>Cotización</td>
                    <td>${q.number} – ${client ? client.name : 'Cliente'}</td>
                    <td>${formatCOP(getQuoteTotal(q))}</td>
                  </tr>`;
                } else {
                  const t = r.data;
                  return `<tr>
                    <td>${formatDate(t.date)}</td>
                    <td>${t.type === 'income' ? 'Ingreso' : 'Gasto'}</td>
                    <td>${t.description}</td>
                    <td class="${t.type === 'income' ? 'positive' : 'negative'}">${formatCOP(t.amount)}</td>
                  </tr>`;
                }
              }).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
  return html;
}

// ==================== CLIENTES ====================
function renderClientes() {
  const search = (uiState.clientSearch || '').toLowerCase();
  let list = state.clients;
  if (search) list = list.filter(c => c.name.toLowerCase().includes(search) || (c.phone || '').includes(search));

  const limitInfo = state.plan === 'free' ? `<div class="plan-limit">Plan Gratis: ${state.clients.length}/5 clientes usados</div>` : '';

  return `
    ${limitInfo}
    <div class="card">
      <div class="card-header">
        <h2>Clientes (${state.clients.length})</h2>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <input type="search" placeholder="Buscar por nombre o teléfono..." value="${uiState.clientSearch || ''}"
            oninput="uiState.clientSearch=this.value; debounce(() => showSection('clientes'), 300)()" aria-label="Buscar clientes" style="max-width:220px;" />
          <button class="btn btn-primary btn-sm" onclick="openClientModal()">+ Nuevo cliente</button>
        </div>
      </div>
      ${list.length === 0 ? `
        <div class="empty">
          <p>${search ? 'No se encontraron clientes con ese criterio.' : 'Aún no tienes clientes. Agrega el primero para empezar a cotizar.'}</p>
          ${!search ? '<button class="btn btn-primary" onclick="openClientModal()">Crear cliente</button>' : ''}
        </div>
      ` : `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Nombre</th><th>Teléfono</th><th>Correo</th><th>Notas</th><th></th></tr></thead>
            <tbody>
              ${list.map(c => `
                <tr>
                  <td><strong>${escapeHtml(c.name)}</strong></td>
                  <td>${escapeHtml(c.phone || '—')}</td>
                  <td>${escapeHtml(c.email || '—')}</td>
                  <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(c.notes || '—')}</td>
                  <td style="white-space:nowrap;">
                    <button class="btn btn-sm btn-ghost" onclick="viewClient('${c.id}')">Ver</button>
                    <button class="btn btn-sm btn-ghost" onclick="openClientModal('${c.id}')">Editar</button>
                    <button class="btn btn-sm btn-ghost" style="color:var(--danger)" onclick="deleteClient('${c.id}')">Eliminar</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function openClientModal(id = null) {
  const client = id ? state.clients.find(c => c.id === id) : null;
  const isEdit = !!client;
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <h3>${isEdit ? 'Editar cliente' : 'Nuevo cliente'}</h3>
      <button class="close-btn" onclick="closeModal()">×</button>
    </div>
    <form onsubmit="saveClient(event, '${id || ''}')">
      <div class="form-group">
        <label>Nombre *</label>
        <input name="name" required value="${client ? escapeHtml(client.name) : ''}" placeholder="Ej: María Gómez" />
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Teléfono</label>
          <input name="phone" value="${client ? escapeHtml(client.phone || '') : ''}" placeholder="3001234567" />
        </div>
        <div class="form-group">
          <label>Correo</label>
          <input name="email" type="email" value="${client ? escapeHtml(client.email || '') : ''}" placeholder="correo@ejemplo.com" />
        </div>
      </div>
      <div class="form-group">
        <label>Notas</label>
        <textarea name="notes" placeholder="Información adicional...">${client ? escapeHtml(client.notes || '') : ''}</textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar cambios' : 'Crear cliente'}</button>
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancelar</button>
      </div>
    </form>
  `;
  openModal();
}

async function saveClient(e, id) {
  e.preventDefault();
  if (window.saveLock) return;
  window.saveLock = true;
  setTimeout(() => { window.saveLock = false; }, 2000);
  const form = e.target;
  clearFieldErrors(form);
  const fd = new FormData(form);
  const nameInput = form.elements['name'];
  const name = (fd.get('name') || '').trim();
  if (!name) { setFieldError(nameInput, 'El nombre es obligatorio'); return; }

  const clientData = {
    name,
    phone: fd.get('phone') || '',
    email: fd.get('email') || '',
    notes: fd.get('notes') || ''
  };

  if (window.dbAdapter && window.dbAdapter.useFirestore) {
    try {
      window.dbAdapter.loading = true;
      if (id) {
        await window.dbAdapter.updateClient(id, clientData);
        const idx = state.clients.findIndex(c => c.id === id);
        if (idx >= 0) {
          state.clients[idx] = { ...state.clients[idx], ...clientData };
        }
        toast('Cliente actualizado en la nube');
      } else {
        if (!checkLimit('clients')) return;
        const created = await window.dbAdapter.createClient(clientData);
        state.clients.push({ ...clientData, id: created.id, createdAt: created.createdAt || new Date().toISOString().slice(0, 10) });
        toast('Cliente creado en la nube');
      }
      saveState(); // respaldo local
      window.dbAdapter.loading = false;
      closeModal();
      showSection('clientes');
    } catch (err) {
      window.dbAdapter.loading = false;
      window.dbAdapter.lastError = err;
      toast('Error al guardar en la nube: ' + err.message, 'error');
    }
    return;
  }

  // localStorage (MVP original)
  if (!id && !checkLimit('clients')) return;

  if (id) {
    const idx = state.clients.findIndex(c => c.id === id);
    if (idx >= 0) {
      state.clients[idx] = { ...state.clients[idx], ...clientData };
    }
    toast('Cliente actualizado');
  } else {
    state.clients.push({
      id: generateId(), ...clientData, createdAt: new Date().toISOString().slice(0, 10)
    });
    toast('Cliente creado');
  }
  saveState();
  closeModal();
  showSection('clientes');
}

async function deleteClient(id) {
  if (!confirmDelete('¿Eliminar este cliente? Las cotizaciones y movimientos asociados se mantendrán pero sin el nombre del cliente.')) return;
  if (window.saveLock) return;
  window.saveLock = true;
  setTimeout(() => { window.saveLock = false; }, 2000);

  if (window.dbAdapter && window.dbAdapter.useFirestore) {
    try {
      window.dbAdapter.loading = true;
      await window.dbAdapter.deleteClient(id);
      state.clients = state.clients.filter(c => c.id !== id);
      saveState();
      window.dbAdapter.loading = false;
      toast('Cliente eliminado en la nube');
      showSection('clientes');
    } catch (err) {
      window.dbAdapter.loading = false;
      window.dbAdapter.lastError = err;
      toast('Error al eliminar en la nube: ' + err.message, 'error');
    }
    return;
  }

  state.clients = state.clients.filter(c => c.id !== id);
  saveState();
  toast('Cliente eliminado');
  showSection('clientes');
}

function viewClient(id) {
  const c = state.clients.find(x => x.id === id);
  if (!c) return;
  const quotes = state.quotes.filter(q => q.clientId === id);
  const txs = state.transactions.filter(t => t.clientId === id);
  document.getElementById('modal-content').className = 'modal modal-lg';
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <h3>${escapeHtml(c.name)}</h3>
      <button class="close-btn" onclick="closeModal()">×</button>
    </div>
    <p style="color:var(--text-muted);margin-bottom:1rem;">
      ${c.phone ? '📞 ' + escapeHtml(c.phone) : ''} ${c.email ? ' · ✉️ ' + escapeHtml(c.email) : ''}
    </p>
    ${c.notes ? `<p style="margin-bottom:1.25rem;"><em>${escapeHtml(c.notes)}</em></p>` : ''}
    <h4 style="margin-bottom:0.5rem;">Cotizaciones (${quotes.length})</h4>
    ${quotes.length === 0 ? '<p style="color:var(--text-muted);font-size:0.9rem;">Sin cotizaciones</p>' : `
      <ul style="margin-bottom:1.25rem;padding-left:1.25rem;">
        ${quotes.map(q => `<li>${q.number} – ${formatCOP(getQuoteTotal(q))} · <span class="badge badge-${q.status}">${statusLabel(q.status)}</span></li>`).join('')}
      </ul>
    `}
    <h4 style="margin-bottom:0.5rem;">Pagos / movimientos (${txs.length})</h4>
    ${txs.length === 0 ? '<p style="color:var(--text-muted);font-size:0.9rem;">Sin movimientos</p>' : `
      <ul style="padding-left:1.25rem;">
        ${txs.map(t => `<li>${formatDate(t.date)} – ${t.description} · ${formatCOP(t.amount)}</li>`).join('')}
      </ul>
    `}
    <div class="form-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cerrar</button>
      <button class="btn btn-primary" onclick="closeModal();openClientModal('${id}')">Editar</button>
    </div>
  `;
  openModal();
}

// ==================== COTIZACIONES ====================
function renderCotizaciones() {
  const limitInfo = state.plan === 'free' ? `<div class="plan-limit">Plan Gratis: ${state.quotes.length}/10 cotizaciones usadas</div>` : '';

  return `
    ${limitInfo}
    <div class="card">
      <div class="card-header">
        <h2>Cotizaciones (${state.quotes.length})</h2>
        <button class="btn btn-primary btn-sm" onclick="openQuoteModal()">+ Nueva cotización</button>
      </div>
      ${state.quotes.length === 0 ? `
        <div class="empty">
          <p>No tienes cotizaciones todavía. Crea la primera para enviarla a un cliente.</p>
          <button class="btn btn-primary" onclick="openQuoteModal()">Crear cotización</button>
        </div>
      ` : `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Número</th><th>Cliente</th><th>Fecha</th><th>Total</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              ${state.quotes.slice().reverse().map(q => {
                const client = state.clients.find(c => c.id === q.clientId);
                return `
                  <tr>
                    <td><strong>${q.number}</strong></td>
                    <td>${client ? escapeHtml(client.name) : '—'}</td>
                    <td>${formatDate(q.date)}</td>
                    <td>${formatCOP(getQuoteTotal(q))}</td>
                    <td><span class="badge badge-${q.status}">${statusLabel(q.status)}</span></td>
                    <td style="white-space:nowrap;">
                      <button class="btn btn-sm btn-ghost" onclick="viewQuote('${q.id}')">Ver</button>
                      <button class="btn btn-sm btn-ghost" onclick="openQuoteModal('${q.id}')">Editar</button>
                      <button class="btn btn-sm btn-ghost" onclick="shareWhatsApp('${q.id}')">WhatsApp</button>
                      <button class="btn btn-sm btn-ghost" style="color:var(--danger)" onclick="deleteQuote('${q.id}')">Eliminar</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function statusLabel(s) {
  return { borrador: 'Borrador', enviada: 'Enviada', aceptada: 'Aceptada', rechazada: 'Rechazada' }[s] || s;
}

function openQuoteModal(id = null) {
  const quote = id ? state.quotes.find(q => q.id === id) : null;
  const isEdit = !!quote;
  const nextNumber = 'COT-' + new Date().getFullYear() + '-' + String(state.quotes.length + 1).padStart(3, '0');

  let itemsHtml = '';
  const items = quote ? quote.items : [{ desc: '', qty: 1, price: 0 }];
  items.forEach((it, i) => {
    itemsHtml += `
      <div class="item-row" data-idx="${i}">
        <input name="item_desc" value="${escapeHtml(it.desc || '')}" placeholder="Descripción del servicio/producto" required />
        <input name="item_qty" type="number" min="1" value="${it.qty || 1}" placeholder="Cant." required />
        <input name="item_price" type="number" min="0" step="1000" value="${it.price || 0}" placeholder="Precio" required />
        <button type="button" class="btn btn-sm btn-ghost" style="color:var(--danger)" onclick="this.closest('.item-row').remove();updateQuoteTotal()">×</button>
      </div>`;
  });

  document.getElementById('modal-content').className = 'modal modal-lg';
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <h3>${isEdit ? 'Editar cotización' : 'Nueva cotización'}</h3>
      <button class="close-btn" onclick="closeModal()">×</button>
    </div>
    <form onsubmit="saveQuote(event, '${id || ''}')">
      <div class="form-grid">
        <div class="form-group">
          <label>Número</label>
          <input name="number" value="${quote ? quote.number : nextNumber}" required />
        </div>
        <div class="form-group">
          <label>Cliente *</label>
          <select name="clientId" required>
            <option value="">Seleccionar cliente</option>
            ${state.clients.map(c => `<option value="${c.id}" ${quote && quote.clientId === c.id ? 'selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Fecha</label>
          <input name="date" type="date" value="${quote ? quote.date : new Date().toISOString().slice(0,10)}" required />
        </div>
        <div class="form-group">
          <label>Vigencia hasta</label>
          <input name="validUntil" type="date" value="${quote ? quote.validUntil || '' : ''}" />
        </div>
        <div class="form-group">
          <label>Estado</label>
          <select name="status">
            ${['borrador','enviada','aceptada','rechazada'].map(s => `<option value="${s}" ${quote && quote.status === s ? 'selected' : ''}>${statusLabel(s)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Descripción / notas</label>
        <textarea name="description" placeholder="Detalle del trabajo...">${quote ? escapeHtml(quote.description || '') : ''}</textarea>
      </div>
      <div style="margin:1rem 0 0.5rem;display:flex;justify-content:space-between;align-items:center;">
        <strong>Ítems</strong>
        <button type="button" class="btn btn-sm btn-outline" onclick="addQuoteItem()">+ Agregar ítem</button>
      </div>
      <div class="items-list" id="quote-items">${itemsHtml}</div>
      <div style="text-align:right;font-size:1.15rem;font-weight:700;margin:1rem 0;">
        Total: <span id="quote-total-preview">${formatCOP(quote ? getQuoteTotal(quote) : 0)}</span>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Crear cotización'}</button>
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancelar</button>
      </div>
    </form>
  `;
  openModal();
  // Bind total update
  document.querySelectorAll('#quote-items input').forEach(inp => {
    inp.addEventListener('input', updateQuoteTotal);
  });
}

function addQuoteItem() {
  const container = document.getElementById('quote-items');
  const div = document.createElement('div');
  div.className = 'item-row';
  div.innerHTML = `
    <input name="item_desc" placeholder="Descripción" required />
    <input name="item_qty" type="number" min="1" value="1" required />
    <input name="item_price" type="number" min="0" step="1000" value="0" required />
    <button type="button" class="btn btn-sm btn-ghost" style="color:var(--danger)" onclick="this.closest('.item-row').remove();updateQuoteTotal()">×</button>
  `;
  container.appendChild(div);
  div.querySelectorAll('input').forEach(inp => inp.addEventListener('input', updateQuoteTotal));
}

function updateQuoteTotal() {
  let total = 0;
  document.querySelectorAll('#quote-items .item-row').forEach(row => {
    const qty = parseFloat(row.querySelector('[name=item_qty]').value) || 0;
    const price = parseFloat(row.querySelector('[name=item_price]').value) || 0;
    total += qty * price;
  });
  const el = document.getElementById('quote-total-preview');
  if (el) el.textContent = formatCOP(total);
}

async function saveQuote(e, id) {
  e.preventDefault();
  if (window.saveLock) return;
  window.saveLock = true;
  setTimeout(() => { window.saveLock = false; }, 2000);
  const fd = new FormData(e.target);
  const clientId = fd.get('clientId');
  if (!clientId) { toast('Selecciona un cliente', 'error'); return; }

  const items = [];
  document.querySelectorAll('#quote-items .item-row').forEach(row => {
    items.push({
      desc: row.querySelector('[name=item_desc]').value.trim(),
      qty: parseFloat(row.querySelector('[name=item_qty]').value) || 1,
      price: parseFloat(row.querySelector('[name=item_price]').value) || 0
    });
  });
  if (items.length === 0 || items.some(i => !i.desc)) {
    toast('Agrega al menos un ítem con descripción', 'error');
    return;
  }

  const data = {
    number: fd.get('number'),
    clientId,
    date: fd.get('date'),
    validUntil: fd.get('validUntil') || '',
    status: fd.get('status') || 'borrador',
    description: fd.get('description') || '',
    items,
    createdAt: id ? (state.quotes.find(q => q.id === id) || {}).createdAt : new Date().toISOString().slice(0, 10)
  };

  if (window.dbAdapter && window.dbAdapter.useFirestore) {
    if (!id && !checkLimit('quotes')) return;
    try {
      window.dbAdapter.loading = true;
      if (id) {
        await window.dbAdapter.updateQuote(id, data);
        const idx = state.quotes.findIndex(q => q.id === id);
        if (idx >= 0) state.quotes[idx] = { ...state.quotes[idx], ...data };
        toast('Cotización actualizada en la nube');
      } else {
        const created = await window.dbAdapter.createQuote(data);
        state.quotes.push({ ...data, id: created.id, createdAt: created.createdAt || new Date().toISOString().slice(0, 10) });
        toast('Cotización creada en la nube');
      }
      saveState();
      window.dbAdapter.loading = false;
      closeModal();
      showSection('cotizaciones');
    } catch (err) {
      window.dbAdapter.loading = false;
      window.dbAdapter.lastError = err;
      toast('Error al guardar en la nube: ' + err.message, 'error');
    }
    return;
  }

  if (!id && !checkLimit('quotes')) return;

  if (id) {
    const idx = state.quotes.findIndex(q => q.id === id);
    if (idx >= 0) state.quotes[idx] = { ...state.quotes[idx], ...data };
    toast('Cotización actualizada');
  } else {
    state.quotes.push({ id: generateId(), ...data });
    toast('Cotización creada');
  }
  saveState();
  closeModal();
  showSection('cotizaciones');
}

async function deleteQuote(id) {
  if (!confirmDelete('¿Eliminar esta cotización?')) return;
  if (window.saveLock) return;
  window.saveLock = true;
  setTimeout(() => { window.saveLock = false; }, 2000);

  if (window.dbAdapter && window.dbAdapter.useFirestore) {
    try {
      window.dbAdapter.loading = true;
      await window.dbAdapter.deleteQuote(id);
      state.quotes = state.quotes.filter(q => q.id !== id);
      saveState();
      window.dbAdapter.loading = false;
      toast('Cotización eliminada en la nube');
      showSection('cotizaciones');
    } catch (err) {
      window.dbAdapter.loading = false;
      window.dbAdapter.lastError = err;
      toast('Error al eliminar en la nube: ' + err.message, 'error');
    }
    return;
  }

  state.quotes = state.quotes.filter(q => q.id !== id);
  saveState();
  toast('Cotización eliminada');
  showSection('cotizaciones');
}

function viewQuote(id) {
  const q = state.quotes.find(x => x.id === id);
  if (!q) return;
  const client = state.clients.find(c => c.id === q.clientId);
  const total = getQuoteTotal(q);
  document.getElementById('modal-content').className = 'modal modal-lg';
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <h3>${q.number}</h3>
      <button class="close-btn" onclick="closeModal()">×</button>
    </div>
    <p><strong>Cliente:</strong> ${client ? escapeHtml(client.name) : '—'}</p>
    <p><strong>Fecha:</strong> ${formatDate(q.date)} · <strong>Vigencia:</strong> ${formatDate(q.validUntil) || '—'}</p>
    <p><strong>Estado:</strong> <span class="badge badge-${q.status}">${statusLabel(q.status)}</span></p>
    ${q.description ? `<p style="margin:0.75rem 0;"><em>${escapeHtml(q.description)}</em></p>` : ''}
    <table style="margin:1rem 0;">
      <thead><tr><th>Descripción</th><th>Cant.</th><th>Precio</th><th>Subtotal</th></tr></thead>
      <tbody>
        ${q.items.map(i => `
          <tr>
            <td>${escapeHtml(i.desc)}</td>
            <td>${i.qty}</td>
            <td>${formatCOP(i.price)}</td>
            <td>${formatCOP(i.qty * i.price)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <p style="text-align:right;font-size:1.25rem;font-weight:700;">Total: ${formatCOP(total)}</p>
    <p style="font-size:0.8rem;color:var(--text-muted);margin-top:1rem;">
      Nota: Esta es una cotización de control interno. No constituye factura electrónica oficial.
    </p>
    <div class="form-actions">
      <button class="btn btn-primary" onclick="printQuote('${id}')">Imprimir / PDF</button>
      <button class="btn btn-outline" onclick="shareWhatsApp('${id}')">Compartir WhatsApp</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cerrar</button>
    </div>
  `;
  openModal();
}

function printQuote(id) {
  const q = state.quotes.find(x => x.id === id);
  if (!q) return;
  const client = state.clients.find(c => c.id === q.clientId);
  const total = getQuoteTotal(q);
  const area = document.getElementById('print-area');
  area.innerHTML = `
    <div style="font-family:sans-serif;max-width:700px;margin:0 auto;">
      <h1 style="margin-bottom:0.25rem;">LOWFY Tools</h1>
      <p style="color:#666;margin-bottom:1.5rem;">Cotización (no es factura electrónica)</p>
      <h2>${q.number}</h2>
      <p><strong>Cliente:</strong> ${client ? client.name : '—'} ${client && client.phone ? ' · ' + client.phone : ''}</p>
      <p><strong>Fecha:</strong> ${formatDate(q.date)} · <strong>Válida hasta:</strong> ${formatDate(q.validUntil) || '—'}</p>
      ${q.description ? `<p>${q.description}</p>` : ''}
      <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;">
        <thead>
          <tr style="border-bottom:2px solid #333;">
            <th style="text-align:left;padding:8px;">Descripción</th>
            <th style="text-align:right;padding:8px;">Cant.</th>
            <th style="text-align:right;padding:8px;">Precio</th>
            <th style="text-align:right;padding:8px;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${q.items.map(i => `
            <tr style="border-bottom:1px solid #ddd;">
              <td style="padding:8px;">${i.desc}</td>
              <td style="text-align:right;padding:8px;">${i.qty}</td>
              <td style="text-align:right;padding:8px;">${formatCOP(i.price)}</td>
              <td style="text-align:right;padding:8px;">${formatCOP(i.qty * i.price)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <p style="text-align:right;font-size:1.3rem;font-weight:bold;">Total: ${formatCOP(total)}</p>
      <p style="margin-top:2rem;font-size:0.85rem;color:#666;">Generado con LOWFY Tools · Documento de cotización</p>
    </div>
  `;
  window.print();
}

function shareWhatsApp(id) {
  const q = state.quotes.find(x => x.id === id);
  if (!q) return;
  const client = state.clients.find(c => c.id === q.clientId);
  const total = getQuoteTotal(q);
  const text = encodeURIComponent(
    `Hola${client ? ' ' + client.name : ''}! 👋\n\nTe comparto la cotización *${q.number}*:\n` +
    q.items.map(i => `• ${i.desc}: ${i.qty} x ${formatCOP(i.price)}`).join('\n') +
    `\n\n*Total: ${formatCOP(total)}*\n` +
    (q.validUntil ? `Válida hasta: ${formatDate(q.validUntil)}\n` : '') +
    `\n(Generada con LOWFY Tools)`
  );
  window.open(`https://wa.me/${(client && client.phone) ? client.phone.replace(/\D/g, '') : ''}?text=${text}`, '_blank');
}

// ==================== FINANZAS ====================
function renderFinanzas() {
  const filterType = uiState.txFilterType || 'all';
  const filterCat = uiState.txFilterCat || 'all';
  let list = state.transactions.slice().reverse();
  if (filterType !== 'all') list = list.filter(t => t.type === filterType);
  if (filterCat !== 'all') list = list.filter(t => t.category === filterCat);

  const limitInfo = state.plan === 'free' ? `<div class="plan-limit">Plan Gratis: ${state.transactions.length}/30 movimientos usados</div>` : '';

  return `
    ${limitInfo}
    <div class="card">
      <div class="card-header">
        <h2>Ingresos y gastos (${state.transactions.length})</h2>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <select onchange="uiState.txFilterType=this.value;showSection('finanzas')" aria-label="Filtrar por tipo" style="width:auto;">
            <option value="all" ${filterType==='all'?'selected':''}>Todos</option>
            <option value="income" ${filterType==='income'?'selected':''}>Ingresos</option>
            <option value="expense" ${filterType==='expense'?'selected':''}>Gastos</option>
          </select>
          <select onchange="uiState.txFilterCat=this.value;showSection('finanzas')" aria-label="Filtrar por categoría" style="width:auto;">
            <option value="all">Todas las categorías</option>
            ${state.categories.map(c => `<option value="${c}" ${filterCat===c?'selected':''}>${c}</option>`).join('')}
          </select>
          <button class="btn btn-primary btn-sm" onclick="openTxModal()">+ Nuevo movimiento</button>
        </div>
      </div>
      ${list.length === 0 ? `
        <div class="empty">
          <p>No hay movimientos${filterType !== 'all' || filterCat !== 'all' ? ' con estos filtros' : ''}. Registra tu primer ingreso o gasto.</p>
          <button class="btn btn-primary" onclick="openTxModal()">Registrar movimiento</button>
        </div>
      ` : `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Fecha</th><th>Tipo</th><th>Descripción</th><th>Categoría</th><th>Valor</th><th>Estado</th><th>Saldo</th><th></th></tr></thead>
            <tbody>
              ${list.map(t => {
                const pending = (t.amount || 0) - (t.paidAmount || 0);
                return `
                  <tr>
                    <td>${formatDate(t.date)}</td>
                    <td>${t.type === 'income' ? 'Ingreso' : 'Gasto'}</td>
                    <td>${escapeHtml(t.description)}</td>
                    <td>${escapeHtml(t.category || '—')}</td>
                    <td class="${t.type==='income'?'positive':'negative'}">${formatCOP(t.amount)}</td>
                    <td><span class="badge badge-${t.status}">${t.status === 'paid' ? 'Pagado' : 'Pendiente'}</span></td>
                    <td>${t.status === 'pending' ? formatCOP(pending) : '—'}</td>
                    <td style="white-space:nowrap;">
                      <button class="btn btn-sm btn-ghost" onclick="openTxModal('${t.id}')">Editar</button>
                      <button class="btn btn-sm btn-ghost" style="color:var(--danger)" onclick="deleteTx('${t.id}')">Eliminar</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function openTxModal(id = null) {
  const tx = id ? state.transactions.find(t => t.id === id) : null;
  const isEdit = !!tx;
  document.getElementById('modal-content').className = 'modal';
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <h3>${isEdit ? 'Editar movimiento' : 'Nuevo movimiento'}</h3>
      <button class="close-btn" onclick="closeModal()">×</button>
    </div>
    <form onsubmit="saveTx(event, '${id || ''}')">
      <div class="form-grid">
        <div class="form-group">
          <label>Tipo *</label>
          <select name="type" required>
            <option value="income" ${tx && tx.type==='income'?'selected':''}>Ingreso</option>
            <option value="expense" ${tx && tx.type==='expense'?'selected':''}>Gasto</option>
          </select>
        </div>
        <div class="form-group">
          <label>Categoría</label>
          <select name="category">
            ${state.categories.map(c => `<option value="${c}" ${tx && tx.category===c?'selected':''}>${c}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Fecha *</label>
          <input name="date" type="date" required value="${tx ? tx.date : new Date().toISOString().slice(0,10)}" />
        </div>
        <div class="form-group">
          <label>Valor (COP) *</label>
          <input name="amount" type="number" min="0" step="1000" required value="${tx ? tx.amount : ''}" placeholder="0" />
        </div>
      </div>
      <div class="form-group">
        <label>Descripción *</label>
        <input name="description" required value="${tx ? escapeHtml(tx.description) : ''}" placeholder="Ej: Pago de instalación" />
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Estado</label>
          <select name="status">
            <option value="paid" ${!tx || tx.status==='paid'?'selected':''}>Pagado</option>
            <option value="pending" ${tx && tx.status==='pending'?'selected':''}>Pendiente</option>
          </select>
        </div>
        <div class="form-group">
          <label>Monto abonado (si es pendiente)</label>
          <input name="paidAmount" type="number" min="0" step="1000" value="${tx ? (tx.paidAmount || 0) : 0}" />
        </div>
        <div class="form-group">
          <label>Cliente (opcional)</label>
          <select name="clientId">
            <option value="">Ninguno</option>
            ${state.clients.map(c => `<option value="${c.id}" ${tx && tx.clientId===c.id?'selected':''}>${escapeHtml(c.name)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Registrar'}</button>
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancelar</button>
      </div>
    </form>
  `;
  openModal();
}

async function saveTx(e, id) {
  e.preventDefault();
  if (window.saveLock) return;
  window.saveLock = true;
  setTimeout(() => { window.saveLock = false; }, 2000);
  const form = e.target;
  clearFieldErrors(form);
  const fd = new FormData(form);
  const amountInput = form.elements['amount'];
  const amount = parseFloat(fd.get('amount')) || 0;
  const paidAmount = parseFloat(fd.get('paidAmount')) || 0;
  if (amount <= 0) { setFieldError(amountInput, 'El valor debe ser mayor a 0'); return; }

  const data = {
    type: fd.get('type'),
    category: fd.get('category') || 'Otros',
    description: (fd.get('description') || '').trim(),
    amount,
    date: fd.get('date'),
    status: fd.get('status') || 'paid',
    paidAmount: fd.get('status') === 'paid' ? amount : Math.min(paidAmount, amount),
    clientId: fd.get('clientId') || null
  };

  if (window.dbAdapter && window.dbAdapter.useFirestore) {
    if (!id && !checkLimit('transactions')) return;
    try {
      window.dbAdapter.loading = true;
      if (id) {
        await window.dbAdapter.updateTransaction(id, data);
        const idx = state.transactions.findIndex(t => t.id === id);
        if (idx >= 0) state.transactions[idx] = { ...state.transactions[idx], ...data };
        toast('Movimiento actualizado en la nube');
      } else {
        const created = await window.dbAdapter.createTransaction(data);
        state.transactions.push({ ...data, id: created.id, createdAt: created.createdAt || new Date().toISOString().slice(0, 10) });
        toast('Movimiento registrado en la nube');
      }
      saveState();
      window.dbAdapter.loading = false;
      closeModal();
      showSection('finanzas');
    } catch (err) {
      window.dbAdapter.loading = false;
      window.dbAdapter.lastError = err;
      toast('Error al guardar en la nube: ' + err.message, 'error');
    }
    return;
  }

  if (!id && !checkLimit('transactions')) return;

  if (id) {
    const idx = state.transactions.findIndex(t => t.id === id);
    if (idx >= 0) state.transactions[idx] = { ...state.transactions[idx], ...data };
    toast('Movimiento actualizado');
  } else {
    state.transactions.push({ id: generateId(), ...data });
    toast('Movimiento registrado');
  }
  saveState();
  closeModal();
  showSection('finanzas');
}

async function deleteTx(id) {
  if (!confirmDelete('¿Eliminar este movimiento?')) return;
  if (window.saveLock) return;
  window.saveLock = true;
  setTimeout(() => { window.saveLock = false; }, 2000);

  if (window.dbAdapter && window.dbAdapter.useFirestore) {
    try {
      window.dbAdapter.loading = true;
      await window.dbAdapter.deleteTransaction(id);
      state.transactions = state.transactions.filter(t => t.id !== id);
      saveState();
      window.dbAdapter.loading = false;
      toast('Movimiento eliminado en la nube');
      showSection('finanzas');
    } catch (err) {
      window.dbAdapter.loading = false;
      window.dbAdapter.lastError = err;
      toast('Error al eliminar en la nube: ' + err.message, 'error');
    }
    return;
  }

  state.transactions = state.transactions.filter(t => t.id !== id);
  saveState();
  toast('Movimiento eliminado');
  showSection('finanzas');
}

// ==================== PLANES ====================
function renderPlanes() {
  return `
    <div class="card">
      <div class="card-header"><h2>Tu plan actual: <span style="color:var(--accent)">${state.plan === 'free' ? 'Gratis' : state.plan === 'pro' ? 'Pro' : 'Negocio'}</span></h2></div>
      <p style="color:var(--text-muted);margin-bottom:1.5rem;">
        Esta es una demostración. Los cambios de plan solo afectan los límites dentro de esta versión local. No se procesan pagos reales.
      </p>
      <div class="pricing">
        <div class="price-card ${state.plan==='free'?'popular':''}">
          <h3>Gratis</h3>
          <div class="price">$0 <span>/ mes</span></div>
          <ul>
            <li>5 clientes</li>
            <li>10 cotizaciones</li>
            <li>30 movimientos</li>
            <li>Dashboard + CSV</li>
          </ul>
          <button class="btn ${state.plan==='free'?'btn-outline':'btn-primary'}" style="width:100%" onclick="setPlan('free')">
            ${state.plan==='free' ? 'Plan actual' : 'Cambiar a Gratis'}
          </button>
        </div>
        <div class="price-card ${state.plan==='pro'?'popular':''}">
          <h3>Pro</h3>
          <div class="price">$12.900 <span>/ mes</span></div>
          <ul>
            <li>Todo ilimitado</li>
            <li>Historial completo</li>
            <li>Soporte prioritario</li>
          </ul>
          <button class="btn ${state.plan==='pro'?'btn-outline':'btn-primary'}" style="width:100%" onclick="setPlan('pro')">
            ${state.plan==='pro' ? 'Plan actual' : 'Activar Pro (demo)'}
          </button>
        </div>
        <div class="price-card ${state.plan==='negocio'?'popular':''}">
          <h3>Negocio</h3>
          <div class="price">$24.900 <span>/ mes</span></div>
          <ul>
            <li>Todo de Pro</li>
            <li>Multi-usuario (próx.)</li>
            <li>Reportes avanzados</li>
          </ul>
          <button class="btn ${state.plan==='negocio'?'btn-outline':'btn-primary'}" style="width:100%" onclick="setPlan('negocio')">
            ${state.plan==='negocio' ? 'Plan actual' : 'Activar Negocio (demo)'}
          </button>
        </div>
      </div>
      <p style="margin-top:1.5rem;font-size:0.9rem;color:var(--text-muted);">
        Estructura lista para integrar pasarela de pagos compatible con Colombia (Wompi, PayU, Mercado Pago, etc.). No se almacenan datos de tarjetas.
      </p>
    </div>
  `;
}

// ==================== CONFIG ====================
function renderConfig() {
  return `
    <div class="card">
      <div class="card-header"><h2>Configuración</h2></div>
      <div class="form-group">
        <label>Categorías de ingresos/gastos</label>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
          ${state.categories.map(c => `
            <span style="background:var(--bg-hover);padding:0.3rem 0.7rem;border-radius:20px;font-size:0.85rem;">
              ${escapeHtml(c)}
              <button onclick="removeCategory('${escapeHtml(c)}')" style="background:none;border:none;color:var(--danger);cursor:pointer;margin-left:4px;">×</button>
            </span>
          `).join('')}
        </div>
        <div style="display:flex;gap:0.5rem;">
          <input id="new-cat" placeholder="Nueva categoría" style="max-width:200px;" />
          <button class="btn btn-sm btn-outline" onclick="addCategory()">Agregar</button>
        </div>
      </div>
      <hr style="border:none;border-top:1px solid var(--border);margin:1.5rem 0;" />
      <div class="form-group">
        <label>Datos de demostración</label>
        <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:0.75rem;">
          Puedes cargar ejemplos o borrar todo para empezar de cero.
        </p>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
          <button class="btn btn-outline" onclick="loadDemoData();showSection('config')">Cargar datos demo</button>
          <button class="btn btn-danger" onclick="clearDemoData()">Borrar todos los datos</button>
        </div>
      </div>
      <hr style="border:none;border-top:1px solid var(--border);margin:1.5rem 0;" />
      <p style="font-size:0.85rem;color:var(--text-muted);">
        <strong>Importante:</strong> Esta versión guarda la información únicamente en el almacenamiento local de tu navegador (localStorage). 
        No es un sistema seguro para datos empresariales sensibles. Si borras los datos del navegador o cambias de dispositivo, la información se pierde.
      </p>

      <!-- ===== FASE 4: Migración localStorage → Firestore ===== -->
      <div class="migration-card">
        <h3>📦 Migrar mis datos a la nube</h3>
        <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:1rem;">
          Importa voluntariamente tus datos locales (clientes, cotizaciones y movimientos) a tu cuenta de Firebase. 
          Los datos locales no se borran hasta que tú verifiques la importación.
        </p>
        <div id="migration-preview-container" style="display:none;">
          <div class="migration-summary">
            <div class="migration-stat">
              <span class="value" id="mig-count-clients">0</span>
              <span class="label">Clientes locales</span>
            </div>
            <div class="migration-stat">
              <span class="value" id="mig-count-quotes">0</span>
              <span class="label">Cotizaciones locales</span>
            </div>
            <div class="migration-stat">
              <span class="value" id="mig-count-tx">0</span>
              <span class="label">Movimientos locales</span>
            </div>
          </div>
          <div style="margin-bottom:0.75rem;"><strong>Vista previa (primeros registros):</strong></div>
          <div class="migration-preview" id="migration-preview-list"></div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="executeMigration()">Importar a la nube</button>
            <button class="btn btn-outline" onclick="hideMigrationPreview()">Cancelar</button>
          </div>
        </div>
        <div id="migration-empty" style="display:none;">
          <p style="color:var(--text-muted);font-size:0.9rem;">No hay datos locales para importar.</p>
        </div>
        <div id="migration-no-session" style="display:none;">
          <p style="color:var(--text-muted);font-size:0.9rem;">
            Inicia sesión para habilitar la migración a la nube.
          </p>
        </div>
        <div id="migration-result" class="migration-result"></div>
      </div>
    </div>
  `;
}

function addCategory() {
  const input = document.getElementById('new-cat');
  const val = (input.value || '').trim();
  if (!val) return;
  if (state.categories.includes(val)) { toast('Esa categoría ya existe', 'error'); return; }
  state.categories.push(val);
  saveState();
  toast('Categoría agregada');
  showSection('config');
}

function removeCategory(name) {
  if (state.categories.length <= 1) { toast('Debes tener al menos una categoría', 'error'); return; }
  state.categories = state.categories.filter(c => c !== name);
  saveState();
  toast('Categoría eliminada');
  showSection('config');
}

// ==================== EXPORT CSV ====================
function exportAllCSV() {
  let csv = 'Tipo,Fecha,Descripción,Categoría,Valor,Estado,Cliente\n';
  state.transactions.forEach(t => {
    const client = state.clients.find(c => c.id === t.clientId);
    csv += `${t.type},${t.date},"${(t.description||'').replace(/"/g,'""')}",${t.category||''},${t.amount},${t.status},${client ? client.name : ''}\n`;
  });
  csv += '\n\nCotizaciones\nNúmero,Cliente,Fecha,Total,Estado\n';
  state.quotes.forEach(q => {
    const client = state.clients.find(c => c.id === q.clientId);
    csv += `${q.number},${client ? client.name : ''},${q.date},${getQuoteTotal(q)},${q.status}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `lowfy-tools-export-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  toast('CSV descargado');
}

// ==================== MODAL HELPERS ====================
// (openModal y closeModal con gestión de foco definidos más arriba)

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==================== AUTH UI ====================
function switchAuthMode(mode) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const forgotForm = document.getElementById('forgot-form');
  const title = document.getElementById('auth-title');
  const error = document.getElementById('auth-error');
  error.classList.remove('visible');

  loginForm.style.display = mode === 'login' ? 'block' : 'none';
  registerForm.style.display = mode === 'register' ? 'block' : 'none';
  forgotForm.style.display = mode === 'forgot' ? 'block' : 'none';
  if (title) {
    title.textContent = mode === 'register' ? 'Crear cuenta' : mode === 'forgot' ? 'Recuperar contraseña' : 'Iniciar sesión';
  }
}

function showForgotPassword() {
  switchAuthMode('forgot');
}

function ensureFirebaseReady() {
  if (!window.firebaseAuth) {
    throw new Error('Firebase Auth no está inicializado. Revisa la consola del navegador.');
  }
  if (!window.firebaseDb) {
    throw new Error('Firebase Firestore no está inicializado. Revisa la consola del navegador.');
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const error = document.getElementById('auth-error');
  error.classList.remove('visible');
  try {
    ensureFirebaseReady();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Conectando...';
    btn.disabled = true;
    await loginFirebase(email, password);
    btn.textContent = originalText;
    btn.disabled = false;
  } catch (err) {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Iniciar sesión'; btn.disabled = false; }
    error.textContent = err.message || 'Error al iniciar sesión';
    error.classList.add('visible');
    console.error('[Auth] Error login:', err);
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirmPassword'].value;
  const error = document.getElementById('auth-error');
  error.classList.remove('visible');
  if (password !== confirmPassword) {
    error.textContent = 'Las contraseñas no coinciden';
    error.classList.add('visible');
    return;
  }
  try {
    ensureFirebaseReady();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Creando cuenta...';
    btn.disabled = true;
    await registerFirebase(email, password);
    btn.textContent = originalText;
    btn.disabled = false;
  } catch (err) {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Crear cuenta'; btn.disabled = false; }
    error.textContent = err.message || 'Error al crear cuenta';
    error.classList.add('visible');
    console.error('[Auth] Error registro:', err);
  }
}

async function handleForgotPassword(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements['email'].value;
  const error = document.getElementById('auth-error');
  error.classList.remove('visible');
  try {
    ensureFirebaseReady();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    await forgotPasswordFirebase(email);
    btn.textContent = originalText;
    btn.disabled = false;
    error.textContent = 'Se envió un enlace de recuperación a tu correo.';
    error.classList.add('visible');
    error.style.background = 'rgba(34,197,94,0.1)';
    error.style.borderColor = 'var(--success)';
    error.style.color = 'var(--success)';
    setTimeout(() => switchAuthMode('login'), 2500);
  } catch (err) {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Enviar enlace de recuperación'; btn.disabled = false; }
    error.textContent = err.message || 'Error al enviar recuperación';
    error.classList.add('visible');
    console.error('[Auth] Error recuperación:', err);
  }
}

// Inicializar manejadores de formularios de auth
document.getElementById('login-form')?.addEventListener('submit', handleLogin);
document.getElementById('register-form')?.addEventListener('submit', handleRegister);
document.getElementById('forgot-form')?.addEventListener('submit', handleForgotPassword);

// ==================== FASE 4: MIGRACIÓN LOCALSTORAGE → FIRESTORE ====================
window.migrationState = {
  imported: { clients: 0, quotes: 0, transactions: 0, failed: 0 }
};

function checkLocalData() {
  return state.clients.length > 0 || state.quotes.length > 0 || state.transactions.length > 0;
}

function previewMigration() {
  const container = document.getElementById('migration-preview-container');
  const empty = document.getElementById('migration-empty');
  const noSession = document.getElementById('migration-no-session');
  const result = document.getElementById('migration-result');
  result.classList.remove('visible');

  if (!window.currentFirebaseUser) {
    container.style.display = 'none';
    empty.style.display = 'none';
    noSession.style.display = 'block';
    return;
  }

  if (!checkLocalData()) {
    container.style.display = 'none';
    empty.style.display = 'block';
    noSession.style.display = 'none';
    return;
  }

  document.getElementById('mig-count-clients').textContent = state.clients.length;
  document.getElementById('mig-count-quotes').textContent = state.quotes.length;
  document.getElementById('mig-count-tx').textContent = state.transactions.length;

  const list = document.getElementById('migration-preview-list');
  let html = '';
  state.clients.slice(0, 3).forEach(c => {
    html += `<div class="item"><span>${escapeHtml(c.name)}</span><span style="color:var(--text-muted);">cliente</span></div>`;
  });
  state.quotes.slice(0, 3).forEach(q => {
    html += `<div class="item"><span>${escapeHtml(q.number || '—')}</span><span style="color:var(--text-muted);">cotización</span></div>`;
  });
  state.transactions.slice(0, 3).forEach(t => {
    html += `<div class="item"><span>${escapeHtml(t.description || '—')}</span><span style="color:var(--text-muted);">movimiento</span></div>`;
  });
  list.innerHTML = html;

  container.style.display = 'block';
  empty.style.display = 'none';
  noSession.style.display = 'none';
}

function hideMigrationPreview() {
  document.getElementById('migration-preview-container').style.display = 'none';
  document.getElementById('migration-empty').style.display = 'none';
  document.getElementById('migration-no-session').style.display = 'none';
  document.getElementById('migration-result').classList.remove('visible');
}

async function executeMigration() {
  if (!window.currentFirebaseUser) {
    toast('Inicia sesión primero', 'error');
    return;
  }
  if (!checkLocalData()) {
    toast('No hay datos locales para importar', 'error');
    return;
  }

  const result = document.getElementById('migration-result');
  result.classList.remove('visible');
  result.textContent = '';

  let imported = { clients: 0, quotes: 0, transactions: 0, failed: 0 };
  const clientIdMap = {};

  try {
    // 1. Clientes
    for (const c of state.clients) {
      try {
        const created = await window.dbAdapter.createClient({
          name: c.name,
          phone: c.phone || '',
          email: c.email || '',
          notes: c.notes || ''
        });
        clientIdMap[c.id] = created.id;
        imported.clients++;
      } catch (e) {
        imported.failed++;
        console.error('[Migration] Error cliente:', c.name, e);
      }
    }

    // 2. Cotizaciones
    for (const q of state.quotes) {
      try {
        const newClientId = clientIdMap[q.clientId] || null;
        const created = await window.dbAdapter.createQuote({
          number: q.number,
          clientId: newClientId,
          date: q.date,
          validUntil: q.validUntil || '',
          status: q.status || 'borrador',
          description: q.description || '',
          items: q.items || [],
          migratedFromLocal: true,
          migratedAt: new Date().toISOString()
        });
        imported.quotes++;
      } catch (e) {
        imported.failed++;
        console.error('[Migration] Error cotización:', q.number, e);
      }
    }

    // 3. Transacciones
    for (const t of state.transactions) {
      try {
        const newClientId = t.clientId ? (clientIdMap[t.clientId] || null) : null;
        await window.dbAdapter.createTransaction({
          type: t.type,
          category: t.category || 'Otros',
          description: t.description,
          amount: t.amount,
          date: t.date,
          status: t.status || 'paid',
          paidAmount: t.paidAmount || 0,
          clientId: newClientId,
          migratedFromLocal: true,
          migratedAt: new Date().toISOString()
        });
        imported.transactions++;
      } catch (e) {
        imported.failed++;
        console.error('[Migration] Error transacción:', t.description, e);
      }
    }

    window.migrationState.imported = imported;

    result.className = 'migration-result visible success';
    result.innerHTML = `
      <strong>Importación completada</strong><br>
      Clientes: ${imported.clients} importados<br>
      Cotizaciones: ${imported.quotes} importados<br>
      Movimientos: ${imported.transactions} importados<br>
      ${imported.failed > 0 ? `<span style="color:var(--danger);">${imported.failed} fallaron</span>` : ''}
      <br><br>
      <strong>Tus datos locales no se borraron.</strong> Puedes seguir usándolos o exportar un respaldo.
    `;

    await window.dbAdapter.loadFromFirestore();
    showSection('config');

  } catch (err) {
    result.className = 'migration-result visible error';
    result.textContent = 'Error durante la migración: ' + err.message;
    console.error('[Migration] Error general:', err);
  }
}

// ==================== Indicador de sincronización ====================
function updateSyncStatus() {
  const el = document.getElementById('sync-status');
  const text = document.getElementById('sync-text');
  if (!el || !window.currentFirebaseUser) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'inline-flex';
  if (window.dbAdapter && window.dbAdapter.loading) {
    el.className = 'sync-indicator sync-loading';
    text.textContent = 'Sincronizando con la nube...';
  } else if (window.dbAdapter && window.dbAdapter.lastError) {
    el.className = 'sync-indicator sync-error';
    text.textContent = 'Error de sincronización';
  } else {
    el.className = 'sync-indicator sync-idle';
    text.textContent = 'Sincronizado con la nube';
  }
}

setInterval(updateSyncStatus, 1000);

// Init
loadState();
</script>

<script type="module">
  // ==================== FIREBASE AUTH ====================
  import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
  } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

  window.currentFirebaseUser = null;

  // Funciones globales de autenticación
  window.loginFirebase = async (email, password) => {
    return await signInWithEmailAndPassword(window.firebaseAuth, email, password);
  };

  window.registerFirebase = async (email, password) => {
    return await createUserWithEmailAndPassword(window.firebaseAuth, email, password);
  };

  window.logoutFirebase = async () => {
    await signOut(window.firebaseAuth);
  };

  window.forgotPasswordFirebase = async (email) => {
    return await sendPasswordResetEmail(window.firebaseAuth, email);
  };

  // Listener de estado de autenticación
  onAuthStateChanged(window.firebaseAuth, async (user) => {
    window.currentFirebaseUser = user;
    const appEl = document.getElementById('app');
    const authScreen = document.getElementById('auth-screen');
    const userBar = document.getElementById('auth-user-bar');
    const userEmailEl = document.getElementById('auth-user-email');

    if (user) {
      console.log('[Auth] Usuario autenticado:', user.uid, user.email);
      // Ocultar pantalla de auth, mostrar app
      if (authScreen) authScreen.classList.remove('visible');
      if (appEl) appEl.classList.add('visible');
      if (userBar) userBar.style.display = 'block';
      if (userEmailEl) userEmailEl.textContent = user.email || '';

      // Cargar estado local y activar Firestore
      loadState();
      document.getElementById('current-plan-label').textContent =
        state.plan === 'free' ? 'Gratis' : state.plan === 'pro' ? 'Pro' : 'Negocio';
      showSection('dashboard');

      if (window.dbAdapter) {
        await window.dbAdapter.setAuthMode(true);
        await window.dbAdapter.loadFromFirestore();
      }
    } else {
      console.log('[Auth] No hay usuario autenticado');
      // Mostrar pantalla de auth, ocultar app
      if (authScreen) authScreen.classList.add('visible');
      if (appEl) appEl.classList.remove('visible');
      if (userBar) userBar.style.display = 'none';
      if (userEmailEl) userEmailEl.textContent = '';

      if (window.dbAdapter) {
        window.dbAdapter.setAuthMode(false);
      }
    }
  });
</script>

<script type="module">
  // ===== FASE 2.5: Animaciones sutiles al desplazarse (solo página pública) =====
  (function () {
    const landing = document.getElementById('landing');
    if (!landing) return; // No ejecutar en el panel privado (.app)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -70px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Animar una sola vez
        }
      });
    }, observerOptions);

    // Observar elementos con clase .reveal dentro de la landing
    document.querySelectorAll('#landing .reveal').forEach((el) => {
      if (reduceMotion.matches) {
        el.classList.add('active'); // Mostrar inmediatamente si se prefiere reducir movimiento
      } else {
        observer.observe(el);
      }
    });
  })();
</script>

<!-- ==================== FIRESTORE SERVICE MODULE ==================== -->
<script type="module" src="firestore-service.js"></script>

<script type="module">
  import { FirestoreService } from './firestore-service.js';

  const db = window.firebaseDb;
  const auth = window.firebaseAuth;

  if (db && auth) {
    window.fsService = new FirestoreService(db, auth);
    console.log('[Firestore] Servicio listo');
  } else {
    console.warn('[Firestore] Firebase no está inicializado');
  }
</script>

<script>
  // ==================== DB ADAPTER ====================
  // Decide si usar Firestore (usuario autenticado) o localStorage (sin auth).
  // Mantiene la compatibilidad total con el MVP local.
  window.dbAdapter = {
    useFirestore: false,
    fs: null,
    loading: false,
    lastError: null,

    init() {
      this.fs = window.fsService || null;
    },

    async setAuthMode(enabled) {
      this.useFirestore = enabled && !!this.fs && this.fs.isEnabled;
      this.lastError = null;

      if (this.useFirestore) {
        try {
          this.loading = true;
          await this.fs.ensureUserProfile(window.currentFirebaseUser);
          this.fs.startListening({
            onDataLoaded: (collectionName, items) => {
              console.log(`[Firestore] ${collectionName} sincronizado:`, items.length, 'registros');
            },
            onError: (collectionName, err) => {
              console.error(`[Firestore] Error en ${collectionName}:`, err);
              this.lastError = err;
              toast(`Error sincronizando ${collectionName}`, 'error');
            }
          });
          this.loading = false;
          toast('Datos sincronizados con la nube');
        } catch (err) {
          this.loading = false;
          this.lastError = err;
          console.error('[Firestore] Error activando modo nube:', err);
          toast('Error al conectar con la nube. Se usará almacenamiento local.', 'error');
          this.useFirestore = false;
        }
      } else {
        this.fs?.stopListening();
      }
    },

    // ---- Clientes ----
    async createClient(data) {
      if (this.useFirestore) {
        await this.fs.createClient(data);
        return;
      }
      // localStorage fallback (ya manejado por saveClient original)
    },
    async updateClient(id, data) {
      if (this.useFirestore) {
        await this.fs.updateClient(id, data);
        return;
      }
    },
    async deleteClient(id) {
      if (this.useFirestore) {
        await this.fs.deleteClient(id);
        return;
      }
    },

    // ---- Cotizaciones ----
    async createQuote(data) {
      if (this.useFirestore) {
        await this.fs.createQuote(data);
        return;
      }
    },
    async updateQuote(id, data) {
      if (this.useFirestore) {
        await this.fs.updateQuote(id, data);
        return;
      }
    },
    async deleteQuote(id) {
      if (this.useFirestore) {
        await this.fs.deleteQuote(id);
        return;
      }
    },

    // ---- Transacciones ----
    async createTransaction(data) {
      if (this.useFirestore) {
        await this.fs.createTransaction(data);
        return;
      }
    },
    async updateTransaction(id, data) {
      if (this.useFirestore) {
        await this.fs.updateTransaction(id, data);
        return;
      }
    },
    async deleteTransaction(id) {
      if (this.useFirestore) {
        await this.fs.deleteTransaction(id);
        return;
      }
    },

    // ---- Configuración ----
    async saveSettings(data) {
      if (this.useFirestore) {
        await this.fs.saveSettings(data);
        return;
      }
    },

    // ---- Carga inicial desde Firestore (cuando se inicia sesión) ----
    async loadFromFirestore() {
      if (!this.useFirestore || !this.fs) return;
      try {
        this.loading = true;
        const settings = await this.fs.getSettings();
        if (settings && window.appState) {
          window.appState.settings = settings;
          if (settings.categories && Array.isArray(settings.categories)) {
            window.appState.categories = settings.categories;
          }
        }
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.lastError = err;
        console.error('[Firestore] Error cargando configuración:', err);
      }
    }
  };

  window.dbAdapter.init();
</script>
</body>
</html>
