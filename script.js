// Generate floating particles
(function makeParticles() {
  const container = document.getElementById('particles');
  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 3 + 1;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.animationDuration = (Math.random() * 12 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(p);
  }
})();

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('stat')) animateStat(entry.target);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealEls.forEach((el) => revealObserver.observe(el));

// Count-up animation for stats
function animateStat(stat) {
  const numEl = stat.querySelector('.stat-num');
  const target = parseFloat(numEl.dataset.target);
  const isDecimal = target % 1 !== 0 || target < 10;
  let current = 0;
  const duration = 1600;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    current = target * eased;
    numEl.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Live speedometer loop
const gaugeFill = document.getElementById('gaugeFill');
const speedNum = document.getElementById('speedNum');
const MAX_SPEED = 490;
const CIRCUMFERENCE = 565;
let speedShown = false;

const speedObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !speedShown) {
      speedShown = true;
      runSpeedCycle();
    }
  });
}, { threshold: 0.4 });
speedObserver.observe(document.getElementById('performance'));

function setSpeed(value) {
  const ratio = value / MAX_SPEED;
  gaugeFill.style.strokeDashoffset = CIRCUMFERENCE * (1 - ratio);
  speedNum.textContent = Math.round(value);
}

function runSpeedCycle() {
  const duration = 5000;
  const start = performance.now();
  function tick(now) {
    const t = ((now - start) % duration) / duration;
    // accelerate then decelerate using a sine curve
    const speed = (Math.sin(t * Math.PI)) * MAX_SPEED;
    setSpeed(speed);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Shrink nav on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 50 ? '0.6rem 3rem' : '1.2rem 3rem';

});