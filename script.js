import * as THREE from 'https://unpkg.com/three@0.128.0/build/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Set background color to black
document.body.appendChild(renderer.domElement);

// Create the rose geometry
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const rose = new THREE.Mesh(geometry, material);
scene.add(rose);

// Add lighting
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    rose.rotation.x += 0.01;
    rose.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();