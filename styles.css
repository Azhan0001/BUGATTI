// ============================================
// BUGATTI WEBSITE - INTERACTIVE JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initParticles();
    initWebGL();
    initNavigation();
    initScrollAnimations();
    initSpeedometer();
    initModelCards();
    initTimeline();
    initConfigurator();
    initDashboard();
});

// ============================================
// LOADING SCREEN
// ============================================
function initLoader() {
    const loader = document.getElementById('loader');
    const speedoText = document.querySelector('.speedo-text');
    let speed = 0;
    const targetSpeed = 440;
    const duration = 2500;
    const startTime = Date.now();

    function updateSpeed() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth acceleration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        speed = Math.round(targetSpeed * easeOutQuart);
        
        if (speedoText) {
            speedoText.textContent = speed;
        }

        if (progress < 1) {
            requestAnimationFrame(updateSpeed);
        } else {
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
                triggerEntryAnimations();
            }, 500);
        }
    }

    document.body.style.overflow = 'hidden';
    requestAnimationFrame(updateSpeed);
}

function triggerEntryAnimations() {
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-text > *, .hero-stats .stat-item');
    heroElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 100);
    });

    // Animate stat gauges
    setTimeout(() => {
        document.querySelectorAll('.stat-item').forEach(item => {
            item.classList.add('animated');
        });
    }, 800);
}

// ============================================
// PARTICLE SYSTEM
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    container.appendChild(particle);
}

// ============================================
// WEBGL 3D BACKGROUND
// ============================================
function initWebGL() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
        console.log('WebGL not supported, falling back to CSS effects');
        return;
    }

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vertex shader
    const vertexShaderSource = `
        attribute vec2 a_position;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    // Fragment shader - creates dynamic gradient effect
    const fragmentShaderSource = `
        precision mediump float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec2 u_mouse;
        
        void main() {
            vec2 st = gl_FragCoord.xy / u_resolution;
            
            // Create dynamic gradient
            float gradient = st.y * 0.3;
            
            // Add subtle wave effect
            float wave = sin(st.x * 10.0 + u_time * 0.5) * 0.02;
            wave += sin(st.y * 8.0 + u_time * 0.3) * 0.02;
            
            // Mouse interaction
            float dist = distance(st, u_mouse);
            float glow = smoothstep(0.5, 0.0, dist) * 0.1;
            
            // Gold accent color
            vec3 gold = vec3(0.788, 0.635, 0.153);
            vec3 black = vec3(0.039, 0.039, 0.039);
            
            vec3 color = mix(black, gold * 0.3, gradient + wave + glow);
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    // Compile shaders
    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    // Create geometry (full-screen quad)
    const positions = new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    // Mouse tracking
    let mouseX = 0.5, mouseY = 0.5;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = 1 - (e.clientY / window.innerHeight);
    });

    // Animation loop
    function render(time) {
        time *= 0.001; // Convert to seconds

        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(timeLocation, time);
        gl.uniform2f(mouseLocation, mouseX, mouseY);

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const speedValue = document.querySelector('.speed-value');
    let lastScrollY = 0;

    // Scroll effects
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Add scrolled class
        if (scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Update scroll speed indicator
        const scrollSpeed = Math.abs(scrollY - lastScrollY);
        const displaySpeed = Math.min(Math.round(scrollSpeed * 2), 440);
        if (speedValue) {
            speedValue.textContent = displaySpeed;
        }
        lastScrollY = scrollY;

        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger specific animations
                if (entry.target.classList.contains('model-card')) {
                    animateModelCard(entry.target);
                }
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
                if (entry.target.classList.contains('spec-panel')) {
                    animateSpecPanel(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.model-card, .timeline-item, .spec-panel, .section-header').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Parallax effect for hero car
    const heroCar = document.querySelector('.hero-car');
    if (heroCar) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const parallaxSpeed = 0.3;
            heroCar.style.transform = `translateY(calc(-50% + ${scrollY * parallaxSpeed}px))`;
        });
    }
}

function animateModelCard(card) {
    const gauge = card.querySelector('.gauge-fill');
    if (gauge) {
        setTimeout(() => {
            gauge.style.strokeDashoffset = '0';
        }, 300);
    }
}

function animateTimelineItem(item) {
    item.style.opacity = '1';
}

function animateSpecPanel(panel) {
    panel.style.opacity = '1';
    panel.style.transform = 'translateX(0)';
}

// ============================================
// SPEEDOMETER INTERACTIONS
// ============================================
function initSpeedometer() {
    // Hero stats animation on scroll
    const statItems = document.querySelectorAll('.stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animateStatValue(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(item => observer.observe(item));
}

function animateStatValue(statItem) {
    const valueEl = statItem.querySelector('.stat-value');
    if (!valueEl) return;

    const targetValue = parseFloat(valueEl.textContent.replace(',', ''));
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (targetValue - startValue) * easeOut;

        if (targetValue >= 100) {
            valueEl.textContent = Math.round(currentValue).toLocaleString();
        } else {
            valueEl.textContent = currentValue.toFixed(1);
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ============================================
// MODEL CARDS 3D EFFECT
// ============================================
function initModelCards() {
    const cards = document.querySelectorAll('.model-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            const wrapper = card.querySelector('.card-3d-wrapper');
            if (wrapper) {
                wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            const wrapper = card.querySelector('.card-3d-wrapper');
            if (wrapper) {
                wrapper.style.transform = 'rotateX(0) rotateY(0)';
            }
        });
    });
}

// ============================================
// TIMELINE INTERACTIONS
// ============================================
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            timelineItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// ============================================
// CONFIGURATOR
// ============================================
function initConfigurator() {
    const colorBtns = document.querySelectorAll('.color-btn');
    const interiorBtns = document.querySelectorAll('.interior-btn');
    const wheelBtns = document.querySelectorAll('.wheel-btn');
    const colorOverlay = document.querySelector('.color-overlay');
    const selectedColor = document.getElementById('selected-color');
    const selectedInterior = document.getElementById('selected-interior');
    const totalPrice = document.getElementById('total-price');

    const colorMap = {
        'atlantic-blue': { name: 'Atlantic Blue', color: 'rgba(26, 58, 92, 0.5)', price: 0 },
        'french-racing': { name: 'French Racing Blue', color: 'rgba(30, 58, 138, 0.5)', price: 50000 },
        'jet-black': { name: 'Jet Black', color: 'rgba(10, 10, 10, 0.5)', price: 0 },
        'quartz-white': { name: 'Quartz White', color: 'rgba(245, 245, 245, 0.3)', price: 75000 },
        'italian-red': { name: 'Italian Red', color: 'rgba(139, 0, 0, 0.5)', price: 100000 },
        'nocturne': { name: 'Nocturne', color: 'rgba(45, 27, 78, 0.5)', price: 150000 }
    };

    const interiorMap = {
        'beluga-black': { name: 'Beluga Black', price: 0 },
        'cognac': { name: 'Cognac', price: 25000 },
        'gaucho': { name: 'Gaucho', price: 35000 }
    };

    let basePrice = 3500000;
    let colorPrice = 0;
    let interiorPrice = 0;

    function updatePrice() {
        const total = basePrice + colorPrice + interiorPrice;
        if (totalPrice) {
            totalPrice.textContent = '€' + total.toLocaleString();
        }
    }

    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const colorKey = btn.dataset.color;
            const colorData = colorMap[colorKey];

            if (colorOverlay && colorData) {
                colorOverlay.style.background = colorData.color;
            }
            if (selectedColor && colorData) {
                selectedColor.textContent = colorData.name;
            }
            colorPrice = colorData ? colorData.price : 0;
            updatePrice();
        });
    });

    interiorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            interiorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const interiorKey = btn.dataset.interior;
            const interiorData = interiorMap[interiorKey];

            if (selectedInterior && interiorData) {
                selectedInterior.textContent = interiorData.name;
            }
            interiorPrice = interiorData ? interiorData.price : 0;
            updatePrice();
        });
    });

    wheelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            wheelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ============================================
// INTERACTIVE DASHBOARD
// ============================================
function initDashboard() {
    const speedArc = document.querySelector('.speed-arc');
    const digitalSpeed = document.querySelector('.digital-speed');
    const needleGroup = document.querySelector('.needle-group');
    const rpmArc = document.querySelector('.rpm-arc');
    const rpmValue = document.querySelector('.rpm-value');
    const boostArc = document.querySelector('.boost-arc');
    const boostValue = document.querySelector('.boost-value');
    const tempArc = document.querySelector('.temp-arc');
    const tempValue = document.querySelector('.temp-value');
    const gearValue = document.querySelector('.gear-value');

    let currentSpeed = 0;
    let targetSpeed = 0;
    let currentRPM = 0;
    let currentBoost = 0;
    let currentGear = 0;
    const gears = ['N', '1', '2', '3', '4', '5', '6', '7'];

    // Dashboard animation on scroll into view
    const dashboardSection = document.querySelector('.dashboard-section');
    if (!dashboardSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startDashboardAnimation();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(dashboardSection);

    function startDashboardAnimation() {
        // Simulate acceleration sequence
        const sequence = [
            { speed: 0, rpm: 1, boost: 0, gear: 0, duration: 500 },
            { speed: 60, rpm: 6, boost: 1.2, gear: 1, duration: 800 },
            { speed: 120, rpm: 7, boost: 1.8, gear: 2, duration: 600 },
            { speed: 180, rpm: 6.5, boost: 2.0, gear: 3, duration: 500 },
            { speed: 240, rpm: 7, boost: 2.2, gear: 4, duration: 500 },
            { speed: 300, rpm: 6.8, boost: 2.4, gear: 5, duration: 500 },
            { speed: 360, rpm: 7.1, boost: 2.6, gear: 6, duration: 600 },
            { speed: 420, rpm: 7, boost: 2.5, gear: 7, duration: 800 },
            { speed: 440, rpm: 7.1, boost: 2.7, gear: 7, duration: 1000 }
        ];

        let totalDelay = 0;
        sequence.forEach((step, index) => {
            setTimeout(() => {
                animateTo(step.speed, step.rpm, step.boost, step.gear);
            }, totalDelay);
            totalDelay += step.duration;
        });
    }

    function animateTo(speed, rpm, boost, gear) {
        // Animate speed
        const speedProgress = speed / 440;
        const arcLength = 377 * speedProgress;
        if (speedArc) {
            speedArc.style.strokeDashoffset = 377 - arcLength;
        }
        if (digitalSpeed) {
            animateValue(digitalSpeed, currentSpeed, speed, 300);
        }
        if (needleGroup) {
            const rotation = -90 + (speedProgress * 180);
            needleGroup.style.transform = `rotate(${rotation}deg)`;
        }
        currentSpeed = speed;

        // Animate RPM
        const rpmProgress = rpm / 8;
        if (rpmArc) {
            rpmArc.style.strokeDashoffset = 110 - (110 * rpmProgress);
        }
        if (rpmValue) {
            rpmValue.textContent = rpm.toFixed(1);
        }

        // Animate Boost
        const boostProgress = boost / 3;
        if (boostArc) {
            boostArc.style.strokeDashoffset = 110 - (110 * boostProgress);
        }
        if (boostValue) {
            boostValue.textContent = boost.toFixed(1);
        }

        // Update Gear
        if (gearValue) {
            gearValue.textContent = gears[gear];
        }

        // Temperature stays relatively stable
        const temp = 90 + Math.random() * 10;
        if (tempValue) {
            tempValue.textContent = Math.round(temp);
        }
        if (tempArc) {
            tempArc.style.strokeDashoffset = 110 - (110 * 0.6);
        }
    }

    function animateValue(element, start, end, duration) {
        const startTime = Date.now();
        
        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(start + (end - start) * progress);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Smooth number animation
function animateNumber(element, target, duration = 1000) {
    const start = parseInt(element.textContent) || 0;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * easeOut);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Add hover sound effect (optional - requires audio files)
function playHoverSound() {
    // const audio = new Audio('hover.mp3');
    // audio.volume = 0.1;
    // audio.play();
}

// Console branding
console.log('%c BUGATTI ', 'background: #c9a227; color: #0a0a0a; font-size: 24px; font-weight: bold; padding: 10px 20px;');
console.log('%c The Art of Automotive Excellence ', 'color: #888; font-size: 12px;');
