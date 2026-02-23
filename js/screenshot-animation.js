/**
 * Screenshot Network Animation
 *
 * Phase 0: One screenshot fills the container
 * Phase 1: Two screenshots side by side
 * Phase 2: Three screenshots at ~33% size with connection lines between all pairs
 * Then loops.
 */

function initScreenshotAnimation(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  const images = options.images || [];
  const labels = options.labels || ['Screen 1', 'Screen 2', 'Screen 3'];
  const phaseDuration = options.phaseDuration || 2800;
  const pauseDuration = options.pauseDuration || 1000;

  // Build canvas
  const canvas = document.createElement('div');
  canvas.className = 'screenshot-animation-canvas';

  // SVG connector overlay
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.classList.add('connector-lines');
  svg.setAttribute('preserveAspectRatio', 'none');

  // 3 lines (one per pair: 0-1, 1-2, 0-2) and 3 node dots
  const lines = [];
  for (let i = 0; i < 3; i++) {
    const line = document.createElementNS(svgNS, 'line');
    lines.push(line);
    svg.appendChild(line);
  }
  const dots = [];
  for (let i = 0; i < 3; i++) {
    const dot = document.createElementNS(svgNS, 'circle');
    dot.classList.add('node-dot');
    dot.setAttribute('r', '5');
    dots.push(dot);
    svg.appendChild(dot);
  }
  canvas.appendChild(svg);

  // Create 3 screenshot cards
  const cards = [];
  for (let i = 0; i < 3; i++) {
    const card = document.createElement('div');
    card.className = 'screenshot-card';

    const img = document.createElement('img');
    img.src = images[i] || images[0] || '';
    img.alt = labels[i];
    img.draggable = false;
    card.appendChild(img);

    const label = document.createElement('div');
    label.className = 'card-label';
    label.textContent = labels[i];
    card.appendChild(label);

    cards.push(card);
    canvas.appendChild(card);
  }

  container.appendChild(canvas);

  // ── Layout definitions (% of container) ──────────────────────────────────
  // Phase 0: card 0 fills container
  const soloLayout = { left: 2, top: 2, width: 96, height: 96 };

  // Phase 1: cards 0 & 1 side by side
  const duoLayouts = [
    { left: 3,  top: 10, width: 45, height: 80 },
    { left: 52, top: 10, width: 45, height: 80 }
  ];

  // Phase 2: all three at ~30% in a triangle, well spaced for visible lines
  const trioLayouts = [
    { left: 2,  top: 5,  width: 30, height: 50 },   // top-left
    { left: 68, top: 5,  width: 30, height: 50 },   // top-right
    { left: 35, top: 48, width: 30, height: 50 }    // bottom-center
  ];

  // ── Helpers ───────────────────────────────────────────────────────────────
  function applyLayout(cardIndex, layout) {
    const c = cards[cardIndex];
    c.style.left   = layout.left   + '%';
    c.style.top    = layout.top    + '%';
    c.style.width  = layout.width  + '%';
    c.style.height = layout.height + '%';
  }

  function center(layout) {
    return {
      x: layout.left + layout.width  / 2,
      y: layout.top  + layout.height / 2
    };
  }

  function setLine(line, a, b) {
    line.setAttribute('x1', a.x + '%');
    line.setAttribute('y1', a.y + '%');
    line.setAttribute('x2', b.x + '%');
    line.setAttribute('y2', b.y + '%');
    line.classList.add('visible');
  }

  function setDot(dot, pos) {
    dot.setAttribute('cx', pos.x + '%');
    dot.setAttribute('cy', pos.y + '%');
    dot.classList.add('visible');
  }

  function showConnectors(layouts) {
    // layouts: array of 2 or 3 layout objects corresponding to cards 0, 1, [2]
    const centers = layouts.map(center);

    if (centers.length >= 2) {
      setLine(lines[0], centers[0], centers[1]);   // 0 ↔ 1
      setDot(dots[0], centers[0]);
      setDot(dots[1], centers[1]);
    }
    if (centers.length >= 3) {
      setLine(lines[1], centers[1], centers[2]);   // 1 ↔ 2
      setLine(lines[2], centers[0], centers[2]);   // 0 ↔ 2
      setDot(dots[2], centers[2]);
    }
  }

  function hideConnectors() {
    lines.forEach(l => l.classList.remove('visible'));
    dots.forEach(d  => d.classList.remove('visible'));
  }

  function hideAllCards() {
    cards.forEach(c => c.classList.remove('visible'));
  }

  // ── Animation state machine ───────────────────────────────────────────────
  let phase = 0;
  let animTimer = null;

  function runPhase() {
    switch (phase) {

      // ── Phase 0: single card fills container ──────────────────────────────
      case 0:
        hideConnectors();
        hideAllCards();
        applyLayout(0, soloLayout);
        requestAnimationFrame(() => cards[0].classList.add('visible'));
        break;

      // ── Phase 1: two cards side by side ───────────────────────────────────
      case 1:
        applyLayout(0, duoLayouts[0]);
        applyLayout(1, duoLayouts[1]);
        requestAnimationFrame(() => cards[1].classList.add('visible'));
        setTimeout(() => showConnectors(duoLayouts), 500);
        break;

      // ── Phase 2: three cards in triangle with all connection lines ─────────
      case 2:
        hideConnectors();
        applyLayout(0, trioLayouts[0]);
        applyLayout(1, trioLayouts[1]);
        applyLayout(2, trioLayouts[2]);
        requestAnimationFrame(() => cards[2].classList.add('visible'));
        setTimeout(() => showConnectors(trioLayouts), 500);
        break;

      // ── Phase 3: reset and loop ───────────────────────────────────────────
      case 3:
        hideConnectors();
        hideAllCards();
        // Reset card 0 back to solo position so the transition isn't jarring
        applyLayout(0, soloLayout);
        // Brief pause then restart
        clearTimeout(animTimer);
        animTimer = setTimeout(() => {
          phase = 0;
          runPhase();
          scheduleNext();
        }, 600);
        return;  // skip scheduleNext below
    }

    scheduleNext();
  }

  function scheduleNext() {
    const delay = phaseDuration + (phase === 0 ? 0 : pauseDuration);
    animTimer = setTimeout(() => {
      phase++;
      runPhase();
    }, delay);
  }

  // Kick off
  runPhase();

  return {
    destroy() {
      clearTimeout(animTimer);
      if (container.contains(canvas)) container.removeChild(canvas);
    }
  };
}