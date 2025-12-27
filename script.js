// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .experience-card, .project-card, .skill-card');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Profile Image Error Handling
const profileImage = document.getElementById('profile-image');
const avatarFallback = document.getElementById('avatar-fallback');

profileImage.addEventListener('error', () => {
    profileImage.classList.add('error');
    avatarFallback.classList.add('show');
});

profileImage.addEventListener('load', () => {
    profileImage.style.display = 'block';
    avatarFallback.style.display = 'none';
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
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

// Mobile Navigation - Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();

        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking a link
    navLinkItems.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        const isClickInsideMenu = navLinks.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Three.js Background Animation
const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 5;

// Code symbols
const symbols = ['{ }', '< >', '[ ]', '( )', '/>', '==', '=>', '&&', '||', '++'];
const meshes = [];

symbols.forEach((symbol) => {
    const symbolCanvas = document.createElement('canvas');
    const context = symbolCanvas.getContext('2d');
    symbolCanvas.width = 256;
    symbolCanvas.height = 256;

    context.fillStyle = '#06b6d4';
    context.font = 'bold 120px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(symbol, 128, 128);

    const texture = new THREE.CanvasTexture(symbolCanvas);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.6
    });
    const geometry = new THREE.PlaneGeometry(1, 1);
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = (Math.random() - 0.5) * 10;
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 5;

    mesh.userData = {
        speedX: (Math.random() - 0.5) * 0.01,
        speedY: (Math.random() - 0.5) * 0.01,
        rotationSpeed: (Math.random() - 0.5) * 0.02
    };

    scene.add(mesh);
    meshes.push(mesh);
});

// Binary particles
const binaryGeometry = new THREE.BufferGeometry();
const binaryPositions = [];
const binarySpeeds = [];

for (let i = 0; i < 50; i++) {
    binaryPositions.push(
        (Math.random() - 0.5) * 20,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 10
    );
    binarySpeeds.push(Math.random() * 0.05 + 0.02);
}

binaryGeometry.setAttribute('position', new THREE.Float32BufferAttribute(binaryPositions, 3));
const binaryMaterial = new THREE.PointsMaterial({
    color: 0x06b6d4,
    size: 0.1,
    transparent: true,
    opacity: 0.8
});
const binaryPoints = new THREE.Points(binaryGeometry, binaryMaterial);
scene.add(binaryPoints);

// Mouse movement tracking
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Animate code symbols
    meshes.forEach((mesh) => {
        mesh.rotation.z += mesh.userData.rotationSpeed;
        mesh.position.x += mesh.userData.speedX;
        mesh.position.y += mesh.userData.speedY;

        if (Math.abs(mesh.position.x) > 6) mesh.userData.speedX *= -1;
        if (Math.abs(mesh.position.y) > 6) mesh.userData.speedY *= -1;
    });

    // Animate binary particles
    const positions = binaryPoints.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= binarySpeeds[i / 3];
        if (positions[i + 1] < -5) {
            positions[i + 1] = 10;
        }
    }
    binaryPoints.geometry.attributes.position.needsUpdate = true;

    // Camera follows mouse
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
