/**
 * Screenshot Network Animation
 * 
 * Shows screenshots zooming out and connecting to each other,
 * then zooms back in and loops.
 * 
 * Usage:
 *   <div id="my-container" class="screenshot-animation-container"></div>
 *   <script src="screenshot-animation.js"></script>
 *   <script>
 *     initScreenshotAnimation('my-container', {
 *       images: ['screenshot1.png', 'screenshot2.png', 'screenshot3.png'],
 *       labels: ['Document Details', 'Dashboard', 'Statistics']
 *     });
 *   </script>
 */

function initScreenshotAnimation(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container #${containerId} not found`);
    return;
  }

  const images = options.images || [];
  const labels = options.labels || ['Screen 1', 'Screen 2', 'Screen 3'];
  const phaseDuration = options.phaseDuration || 2500;  // ms per phase
  const pauseDuration = options.pauseDuration || 1200;   // ms pause between phases

  // Build DOM
  const canvas = document.createElement('div');
  canvas.className = 'screenshot-animation-canvas';

  // SVG for connector lines
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.classList.add('connector-lines');
  svg.setAttribute('preserveAspectRatio', 'none');

  // Create 2 lines and 3 dots
  const line1 = document.createElementNS(svgNS, 'line');
  const line2 = document.createElementNS(svgNS, 'line');
  const dots = [];
  for (let i = 0; i < 3; i++) {
    const dot = document.createElementNS(svgNS, 'circle');
    dot.classList.add('node-dot');
    dot.setAttribute('r', '5');
    dots.push(dot);
    svg.appendChild(dot);
  }
  svg.appendChild(line1);
  svg.appendChild(line2);
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

  // Layout definitions (as % of container)
  const layouts = {
    // Phase 0: Card 1 fills the container
    solo: [
      { left: 2, top: 2, width: 96, height: 96 }
    ],
    // Phase 1: Card 1 shrinks left, card 2 appears right
    duo: [
      { left: 3, top: 12, width: 44, height: 76 },
      { left: 53, top: 12, width: 44, height: 76 }
    ],
    // Phase 2: All three shown in a triangle/network layout
    trio: [
      { left: 3, top: 5, width: 35, height: 55 },
      { left: 55, top: 5, width: 35, height: 55 },
      { left: 29, top: 50, width: 35, height: 55 }  // bottom center, overlapping slightly
    ]
  };

  function applyCardLayout(cardIndex, layout) {
    const c = cards[cardIndex];
    c.style.left = layout.left + '%';
    c.style.top = layout.top + '%';
    c.style.width = layout.width + '%';
    c.style.height = layout.height + '%';
  }

  function getCardCenter(layout) {
    return {
      x: layout.left + layout.width / 2,
      y: layout.top + layout.height / 2
    };
  }

  function updateConnectors(activeLayouts) {
    // activeLayouts is an array of the layouts currently positioned
    if (activeLayouts.length >= 2) {
      const c1 = getCardCenter(activeLayouts[0]);
      const c2 = getCardCenter(activeLayouts[1]);
      line1.setAttribute('x1', c1.x + '%');
      line1.setAttribute('y1', c1.y + '%');
      line1.setAttribute('x2', c2.x + '%');
      line1.setAttribute('y2', c2.y + '%');
      line1.classList.add('visible');
      dots[0].setAttribute('cx', c1.x + '%');
      dots[0].setAttribute('cy', c1.y + '%');
      dots[0].classList.add('visible');
      dots[1].setAttribute('cx', c2.x + '%');
      dots[1].setAttribute('cy', c2.y + '%');
      dots[1].classList.add('visible');
    }
    if (activeLayouts.length >= 3) {
      const c2 = getCardCenter(activeLayouts[1]);
      const c3 = getCardCenter(activeLayouts[2]);
      line2.setAttribute('x1', c2.x + '%');
      line2.setAttribute('y1', c2.y + '%');
      line2.setAttribute('x2', c3.x + '%');
      line2.setAttribute('y2', c3.y + '%');
      line2.classList.add('visible');
      dots[2].setAttribute('cx', c3.x + '%');
      dots[2].setAttribute('cy', c3.y + '%');
      dots[2].classList.add('visible');
    }
  }

  function hideConnectors() {
    line1.classList.remove('visible');
    line2.classList.remove('visible');
    dots.forEach(d => d.classList.remove('visible'));
  }

  function hideAllCards() {
    cards.forEach(c => {
      c.classList.remove('visible', 'connected');
    });
  }

  // Animation phases
  let phase = 0;
  let animTimer = null;

  function runPhase() {
    switch (phase) {
      case 0:
        // Show card 1 full size
        hideConnectors();
        hideAllCards();
        applyCardLayout(0, layouts.solo[0]);
        // Small delay before making visible for transition to register
        requestAnimationFrame(() => {
          cards[0].classList.add('visible');
        });
        break;

      case 1:
        // Shrink card 1, show card 2, connect them
        applyCardLayout(0, layouts.duo[0]);
        applyCardLayout(1, layouts.duo[1]);
        cards[0].classList.add('connected');
        requestAnimationFrame(() => {
          cards[1].classList.add('visible', 'connected');
        });
        setTimeout(() => {
          updateConnectors([layouts.duo[0], layouts.duo[1]]);
        }, 400);
        break;

      case 2:
        // Shrink both, show card 3, connect all
        hideConnectors();
        applyCardLayout(0, layouts.trio[0]);
        applyCardLayout(1, layouts.trio[1]);
        applyCardLayout(2, layouts.trio[2]);
        requestAnimationFrame(() => {
          cards[2].classList.add('visible', 'connected');
        });
        setTimeout(() => {
          updateConnectors([layouts.trio[0], layouts.trio[1], layouts.trio[2]]);
        }, 400);
        break;

      case 3:
        // Zoom into card 1: use CSS transform on the canvas
        // Calculate transform to zoom into the first card's position in trio layout
        const target = layouts.trio[0];
        const scaleX = 100 / target.width;
        const scaleY = 100 / target.height;
        const scale = Math.min(scaleX, scaleY) * 0.92;
        const centerX = target.left + target.width / 2;
        const centerY = target.top + target.height / 2;
        const translateX = (50 - centerX) * scale;
        const translateY = (50 - centerY) * scale;

        canvas.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%)`;
        break;

      case 4:
        // Reset: instantly hide everything, reset transform, then go to phase 0
        canvas.style.transition = 'none';
        canvas.style.transform = 'scale(1) translate(0, 0)';
        hideConnectors();
        hideAllCards();
        // Force reflow
        void canvas.offsetHeight;
        canvas.style.transition = '';
        // Jump back to phase 0
        phase = -1; // will be incremented to 0
        setTimeout(() => {
          phase = 0;
          runPhase();
          scheduleNext();
        }, 300);
        return;
    }

    scheduleNext();
  }

  function scheduleNext() {
    const delay = phase === 0 ? phaseDuration : (phaseDuration + pauseDuration);
    animTimer = setTimeout(() => {
      phase++;
      runPhase();
    }, delay);
  }

  // Start
  runPhase();

  // Return a control object
  return {
    destroy() {
      clearTimeout(animTimer);
      container.removeChild(canvas);
    }
  };
}
