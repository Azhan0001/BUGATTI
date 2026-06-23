/* ============================================
   BUGATTI WEBSITE - PREMIUM AUTOMOTIVE DESIGN
   ============================================ */

/* CSS Variables */
:root {
    --gold: #c9a227;
    --gold-light: #e8c547;
    --gold-dark: #9a7b1a;
    --black: #0a0a0a;
    --black-light: #1a1a1a;
    --black-medium: #2a2a2a;
    --white: #ffffff;
    --gray: #888888;
    --gray-dark: #444444;
    --red: #ff0000;
    --orange: #ff6b35;
    --blue: #1a3a5c;
    --green: #00ff88;
    
    --font-display: 'Orbitron', sans-serif;
    --font-body: 'Rajdhani', sans-serif;
    
    --transition-fast: 0.2s ease;
    --transition-medium: 0.4s ease;
    --transition-slow: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Reset & Base */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    background: var(--black);
    color: var(--white);
    overflow-x: hidden;
    line-height: 1.6;
}

/* WebGL Canvas */
#webgl-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;
}

/* Particle System */
#particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
}

.particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--gold);
    border-radius: 50%;
    opacity: 0.3;
    animation: float 15s infinite ease-in-out;
}

@keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
    25% { transform: translateY(-100px) translateX(50px); opacity: 0.6; }
    50% { transform: translateY(-200px) translateX(-30px); opacity: 0.3; }
    75% { transform: translateY(-100px) translateX(-50px); opacity: 0.6; }
}

/* ============================================
   LOADING SCREEN
   ============================================ */
#loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 0.8s ease, visibility 0.8s ease;
}

#loader.hidden {
    opacity: 0;
    visibility: hidden;
}

.speedometer-loader {
    text-align: center;
}

.speedo-svg {
    width: 200px;
    height: 200px;
}

.speedo-bg {
    fill: none;
    stroke: var(--black-light);
    stroke-width: 10;
}

.speedo-progress {
    fill: none;
    stroke: url(#speedGradient);
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: 565;
    stroke-dashoffset: 565;
    transform: rotate(-90deg);
    transform-origin: center;
    animation: loadProgress 2.5s ease-out forwards;
}

@keyframes loadProgress {
    to { stroke-dashoffset: 0; }
}

.speedo-text {
    fill: var(--gold);
    font-family: var(--font-display);
    font-size: 36px;
    text-anchor: middle;
    animation: countUp 2.5s ease-out forwards;
}

.speedo-unit {
    fill: var(--gray);
    font-family: var(--font-body);
    font-size: 12px;
    text-anchor: middle;
}

.loader-text {
    margin-top: 30px;
    font-family: var(--font-display);
    font-size: 14px;
    letter-spacing: 8px;
    color: var(--gold);
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* ============================================
   NAVIGATION
   ============================================ */
#main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 50px;
    z-index: 1000;
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent);
    transition: all var(--transition-medium);
}

#main-nav.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    padding: 15px 50px;
    box-shadow: 0 5px 30px rgba(0,0,0,0.5);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
}

.logo {
    width: 120px;
}

.bugatti-logo {
    width: 100%;
    transition: transform var(--transition-medium);
}

.logo:hover .bugatti-logo {
    transform: scale(1.05);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-link {
    font-family: var(--font-display);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    color: var(--white);
    text-decoration: none;
    position: relative;
    padding: 10px 0;
    transition: color var(--transition-fast);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: width var(--transition-medium);
}

.nav-link:hover,
.nav-link.active {
    color: var(--gold);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-speedo {
    display: flex;
    align-items: center;
}

.mini-speedo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    background: var(--black-light);
    border: 1px solid var(--gold);
    border-radius: 5px;
}

.speed-value {
    font-family: var(--font-display);
    font-size: 18px;
    color: var(--gold);
}

.speed-unit {
    font-size: 10px;
    color: var(--gray);
    letter-spacing: 2px;
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 100px 50px;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 600px;
}

.hero-text h1 {
    font-family: var(--font-display);
    font-size: clamp(48px, 8vw, 100px);
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
}

.hero-subtitle {
    display: block;
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 400;
    letter-spacing: 10px;
    color: var(--gold);
    margin-bottom: 10px;
}

.hero-edition {
    display: block;
    font-size: clamp(24px, 4vw, 48px);
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Glitch Effect */
.glitch {
    position: relative;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.glitch:hover::before {
    animation: glitch-1 0.3s infinite;
    color: var(--gold);
    opacity: 0.8;
}

.glitch:hover::after {
    animation: glitch-2 0.3s infinite;
    color: var(--orange);
    opacity: 0.8;
}

@keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(3px, -3px); }
}

@keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(3px, -3px); }
    40% { transform: translate(3px, 3px); }
    60% { transform: translate(-3px, -3px); }
    80% { transform: translate(-3px, 3px); }
}

.hero-description {
    font-size: 18px;
    color: var(--gray);
    margin-bottom: 40px;
    max-width: 450px;
}

/* Hero Stats */
.hero-stats {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

.stat-item {
    text-align: center;
}

.stat-gauge {
    width: 80px;
    margin-bottom: 10px;
}

.stat-gauge svg {
    width: 100%;
}

.stat-fill {
    stroke-dasharray: 126;
    stroke-dashoffset: 126;
    transition: stroke-dashoffset 1.5s ease-out;
}

.stat-item.animated .stat-fill {
    stroke-dashoffset: 0;
}

.stat-value {
    display: block;
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    color: var(--gold);
}

.stat-label {
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--gray);
}

/* Hero CTA */
.hero-cta {
    display: flex;
    gap: 20px;
}

.btn-primary {
    position: relative;
    padding: 18px 50px;
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--black);
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: all var(--transition-medium);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(201, 162, 39, 0.4);
}

.btn-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover .btn-glow {
    left: 100%;
}

.btn-secondary {
    padding: 18px 50px;
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--gold);
    background: transparent;
    border: 2px solid var(--gold);
    cursor: pointer;
    transition: all var(--transition-medium);
}

.btn-secondary:hover {
    background: var(--gold);
    color: var(--black);
    transform: translateY(-3px);
}

/* Hero Car */
.hero-car {
    position: absolute;
    right: -10%;
    top: 50%;
    transform: translateY(-50%);
    width: 70%;
    z-index: 1;
}

.car-main {
    width: 100%;
    height: auto;
    object-fit: cover;
    animation: carFloat 6s ease-in-out infinite;
    filter: drop-shadow(0 50px 100px rgba(0,0,0,0.8));
}

@keyframes carFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(0.5deg); }
}

.car-reflection {
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(201, 162, 39, 0.1), transparent);
    transform: scaleY(-1);
    opacity: 0.3;
    filter: blur(10px);
}

.car-shadow {
    position: absolute;
    bottom: -20px;
    left: 20%;
    width: 60%;
    height: 40px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.6), transparent);
    filter: blur(20px);
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    animation: bounce 2s infinite;
}

.scroll-wheel {
    width: 30px;
    height: 50px;
    border: 2px solid var(--gold);
    border-radius: 15px;
    position: relative;
}

.scroll-wheel::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 10px;
    background: var(--gold);
    border-radius: 2px;
    animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
    0%, 100% { opacity: 1; top: 8px; }
    50% { opacity: 0; top: 25px; }
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
}

.scroll-indicator span {
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--gray);
}

/* ============================================
   SECTION HEADERS
   ============================================ */
.section-header {
    text-align: center;
    margin-bottom: 80px;
}

.section-title {
    font-family: var(--font-display);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: 10px;
    margin-bottom: 20px;
}

.title-line {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 0 auto;
}

.section-subtitle {
    margin-top: 20px;
    font-size: 18px;
    color: var(--gray);
    letter-spacing: 3px;
}

/* ============================================
   MODELS SECTION
   ============================================ */
.models-section {
    padding: 150px 50px;
    background: linear-gradient(180deg, var(--black) 0%, var(--black-light) 50%, var(--black) 100%);
}

.models-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    max-width: 1600px;
    margin: 0 auto;
}

.model-card {
    perspective: 1000px;
}

.card-3d-wrapper {
    transition: transform var(--transition-slow);
    transform-style: preserve-3d;
}

.model-card:hover .card-3d-wrapper {
    transform: rotateY(5deg) rotateX(5deg);
}

.card-inner {
    position: relative;
    background: linear-gradient(145deg, var(--black-medium), var(--black-light));
    border: 1px solid var(--gray-dark);
    border-radius: 10px;
    overflow: hidden;
    transition: all var(--transition-medium);
}

.model-card:hover .card-inner {
    border-color: var(--gold);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(201, 162, 39, 0.2);
}

.model-card.featured .card-inner {
    border-color: var(--gold);
    background: linear-gradient(145deg, var(--black-medium), rgba(201, 162, 39, 0.1));
}

.card-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 8px 16px;
    font-family: var(--font-display);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--black);
    background: var(--gold);
    border-radius: 3px;
    z-index: 10;
}

.card-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.model-card:hover .card-image img {
    transform: scale(1.1);
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--black-light), transparent);
}

.card-content {
    padding: 30px;
}

.card-content h3 {
    font-family: var(--font-display);
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 5px;
}

.card-tagline {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 20px;
}

.card-specs {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.spec {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
}

.spec-icon {
    font-size: 16px;
}

.spec-value {
    color: var(--gold);
    font-weight: 600;
}

.card-price {
    font-family: var(--font-display);
    font-size: 18px;
    color: var(--gold);
    letter-spacing: 2px;
}

.card-speedometer {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 60px;
    opacity: 0.5;
    transition: opacity var(--transition-fast);
}

.model-card:hover .card-speedometer {
    opacity: 1;
}

.gauge-fill {
    stroke-dasharray: 157;
    stroke-dashoffset: 157;
    transition: stroke-dashoffset 1s ease-out;
}

.model-card:hover .gauge-fill {
    stroke-dashoffset: 0;
}

/* ============================================
   HERITAGE SECTION
   ============================================ */
.heritage-section {
    position: relative;
    padding: 150px 50px;
    min-height: 100vh;
}

.heritage-bg {
    position: absolute;
    inset: 0;
    background: url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80') center/cover;
    opacity: 0.2;
}

.heritage-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--black) 30%, transparent 70%);
}

.heritage-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
}

.timeline {
    position: relative;
    padding-left: 50px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--gold), var(--gold-dark), transparent);
}

.timeline-item {
    position: relative;
    padding: 30px 0 30px 50px;
    opacity: 0.5;
    transition: all var(--transition-medium);
}

.timeline-item:hover,
.timeline-item.active {
    opacity: 1;
}

.timeline-marker {
    position: absolute;
    left: -50px;
    top: 35px;
    width: 20px;
    height: 20px;
    background: var(--black);
    border: 2px solid var(--gold);
    border-radius: 50%;
    transition: all var(--transition-fast);
}

.timeline-item:hover .timeline-marker,
.timeline-item.active .timeline-marker {
    background: var(--gold);
    box-shadow: 0 0 20px var(--gold);
}

.marker-pulse {
    position: absolute;
    inset: -5px;
    border: 2px solid var(--gold);
    border-radius: 50%;
    opacity: 0;
    animation: markerPulse 2s infinite;
}

@keyframes markerPulse {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(2); opacity: 0; }
}

.timeline-content .year {
    display: inline-block;
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--gold);
    margin-bottom: 10px;
}

.timeline-content h3 {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
}

.timeline-content p {
    font-size: 16px;
    color: var(--gray);
    max-width: 500px;
}

/* ============================================
   TECHNOLOGY SECTION
   ============================================ */
.technology-section {
    padding: 150px 50px;
    background: var(--black);
}

.tech-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1400px;
    margin: 0 auto 100px;
}

.tech-visual {
    position: relative;
}

.engine-display {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.engine-img {
    width: 100%;
    height: auto;
    filter: brightness(0.8) contrast(1.1);
}

.hotspots {
    position: absolute;
    inset: 0;
}

.hotspot {
    position: absolute;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.hotspot-pulse {
    position: absolute;
    inset: 0;
    background: var(--gold);
    border-radius: 50%;
    animation: hotspotPulse 2s infinite;
}

@keyframes hotspotPulse {
    0%, 100% { transform: scale(0.8); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.3; }
}

.hotspot-tooltip {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    padding: 15px;
    background: var(--black-light);
    border: 1px solid var(--gold);
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-fast);
}

.hotspot:hover .hotspot-tooltip {
    opacity: 1;
    visibility: visible;
}

.hotspot-tooltip h4 {
    font-family: var(--font-display);
    font-size: 12px;
    color: var(--gold);
    margin-bottom: 5px;
}

.hotspot-tooltip p {
    font-size: 12px;
    color: var(--gray);
}

.tech-specs {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.spec-panel {
    background: linear-gradient(145deg, var(--black-medium), var(--black-light));
    border: 1px solid var(--gray-dark);
    border-radius: 10px;
    padding: 25px;
    transition: all var(--transition-medium);
}

.spec-panel:hover {
    border-color: var(--gold);
    transform: translateX(10px);
}

.panel-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.panel-icon {
    width: 40px;
    height: 40px;
}

.panel-header h3 {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--gold);
}

.spec-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid var(--gray-dark);
}

.spec-row:last-child {
    border-bottom: none;
}

.spec-label {
    color: var(--gray);
    font-size: 14px;
}

.spec-data {
    font-family: var(--font-display);
    font-size: 14px;
    color: var(--white);
}

/* Dashboard Section */
.dashboard-section {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.dashboard-title {
    font-family: var(--font-display);
    font-size: 24px;
    letter-spacing: 5px;
    color: var(--gold);
    margin-bottom: 50px;
}

.dashboard-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
}

.main-speedometer {
    width: 350px;
}

.speedo-main {
    width: 100%;
    filter: drop-shadow(0 0 30px rgba(201, 162, 39, 0.3));
}

.speed-arc {
    stroke-dasharray: 377;
    stroke-dashoffset: 377;
    transition: stroke-dashoffset 0.5s ease-out;
}

.needle-group {
    transition: transform 0.3s ease-out;
    transform-origin: 150px 150px;
}

.secondary-gauges {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.gauge-item {
    text-align: center;
}

.mini-gauge-svg {
    width: 100px;
    filter: drop-shadow(0 0 15px rgba(201, 162, 39, 0.2));
}

.gauge-label {
    display: block;
    margin-top: 10px;
    font-family: var(--font-display);
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--gray);
}

.rpm-arc, .boost-arc, .temp-arc {
    stroke-dasharray: 110;
    stroke-dashoffset: 110;
    transition: stroke-dashoffset 0.5s ease-out;
}

/* ============================================
   CONFIGURE SECTION
   ============================================ */
.configure-section {
    padding: 150px 50px;
    background: linear-gradient(180deg, var(--black) 0%, var(--black-light) 100%);
}

.configurator {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
    max-width: 1400px;
    margin: 0 auto;
}

.config-preview {
    position: relative;
}

.car-360 {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 30px;
}

.config-car-img {
    width: 100%;
    height: auto;
    transition: filter var(--transition-medium);
}

.color-overlay {
    position: absolute;
    inset: 0;
    mix-blend-mode: overlay;
    opacity: 0.3;
    transition: background var(--transition-medium);
}

.config-summary {
    background: var(--black-medium);
    border: 1px solid var(--gray-dark);
    border-radius: 10px;
    padding: 30px;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid var(--gray-dark);
}

.summary-label {
    color: var(--gray);
    font-size: 14px;
}

.summary-value {
    font-family: var(--font-display);
    font-size: 14px;
    color: var(--white);
}

.summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    margin-top: 10px;
}

.total-label {
    font-family: var(--font-display);
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--gray);
}

.total-value {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    color: var(--gold);
}

.config-options {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.option-group h4 {
    font-family: var(--font-display);
    font-size: 12px;
    letter-spacing: 3px;
    color: var(--gold);
    margin-bottom: 20px;
}

.color-options {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.color-btn {
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--transition-fast);
    position: relative;
}

.color-btn::after {
    content: '';
    position: absolute;
    inset: -5px;
    border: 2px solid var(--gold);
    border-radius: 50%;
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.color-btn:hover::after,
.color-btn.active::after {
    opacity: 1;
}

.color-btn:hover,
.color-btn.active {
    transform: scale(1.1);
}

.interior-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.interior-btn {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    background: var(--black-medium);
    border: 1px solid var(--gray-dark);
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.interior-btn:hover,
.interior-btn.active {
    border-color: var(--gold);
    background: rgba(201, 162, 39, 0.1);
}

.swatch {
    width: 30px;
    height: 30px;
    border-radius: 5px;
}

.wheel-options {
    display: flex;
    gap: 20px;
}

.wheel-btn {
    flex: 1;
    padding: 20px;
    background: var(--black-medium);
    border: 1px solid var(--gray-dark);
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    text-align: center;
    transition: all var(--transition-fast);
}

.wheel-btn:hover,
.wheel-btn.active {
    border-color: var(--gold);
    background: rgba(201, 162, 39, 0.1);
}

.wheel-preview {
    font-size: 30px;
    margin-bottom: 10px;
}

.btn-configure {
    position: relative;
    padding: 20px 40px;
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: var(--black);
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    border: none;
    cursor: pointer;
    overflow: hidden;
    margin-top: 20px;
    transition: all var(--transition-medium);
}

.btn-configure:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(201, 162, 39, 0.4);
}

.btn-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
}

/* ============================================
   FOOTER
   ============================================ */
.main-footer {
    background: var(--black-light);
    padding: 80px 50px 30px;
    border-top: 1px solid var(--gray-dark);
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 60px;
    max-width: 1400px;
    margin: 0 auto 60px;
}

.footer-logo {
    width: 150px;
    margin-bottom: 20px;
}

.footer-tagline {
    font-style: italic;
    color: var(--gray);
    margin-bottom: 5px;
}

.footer-founder {
    font-size: 14px;
    color: var(--gold);
}

.footer-links {
    display: flex;
    justify-content: space-around;
}

.link-group h5 {
    font-family: var(--font-display);
    font-size: 12px;
    letter-spacing: 3px;
    color: var(--gold);
    margin-bottom: 20px;
}

.link-group a {
    display: block;
    color: var(--gray);
    text-decoration: none;
    padding: 8px 0;
    transition: color var(--transition-fast);
}

.link-group a:hover {
    color: var(--white);
}

.footer-social {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
}

.social-link {
    font-family: var(--font-display);
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--gray);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.social-link:hover {
    color: var(--gold);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid var(--gray-dark);
    max-width: 1400px;
    margin: 0 auto;
}

.footer-bottom p {
    font-size: 12px;
    color: var(--gray);
}

.footer-legal {
    display: flex;
    gap: 30px;
}

.footer-legal a {
    font-size: 12px;
    color: var(--gray);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-legal a:hover {
    color: var(--gold);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */
@media (max-width: 1200px) {
    .hero-car {
        width: 80%;
        right: -20%;
    }
    
    .tech-showcase {
        grid-template-columns: 1fr;
    }
    
    .configurator {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 992px) {
    .nav-links {
        display: none;
    }
    
    .hero-section {
        flex-direction: column;
        text-align: center;
    }
    
    .hero-car {
        position: relative;
        width: 100%;
        right: 0;
        transform: none;
        margin-top: 50px;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .hero-cta {
        justify-content: center;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footer-links {
        flex-direction: column;
        gap: 40px;
    }
    
    .footer-social {
        align-items: center;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
}

@media (max-width: 768px) {
    #main-nav {
        padding: 15px 20px;
    }
    
    .hero-section {
        padding: 100px 20px;
    }
    
    .models-section,
    .heritage-section,
    .technology-section,
    .configure-section {
        padding: 100px 20px;
    }
    
    .models-showcase {
        grid-template-columns: 1fr;
    }
    
    .dashboard-container {
        flex-direction: column;
    }
    
    .secondary-gauges {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .main-footer {
        padding: 60px 20px 20px;
    }
}

@media (max-width: 480px) {
    .hero-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .hero-cta {
        flex-direction: column;
    }
    
    .btn-primary,
    .btn-secondary {
        width: 100%;
    }
    
    .secondary-gauges {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .wheel-options {
        flex-direction: column;
    }
}

/* ============================================
   ANIMATIONS & EFFECTS
   ============================================ */

/* Reveal animations */
.reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Parallax effect class */
.parallax {
    will-change: transform;
}

/* Smooth scroll snap for sections */
@media (min-width: 992px) {
    html {
        scroll-snap-type: y proximity;
    }
    
    section {
        scroll-snap-align: start;
    }
}
