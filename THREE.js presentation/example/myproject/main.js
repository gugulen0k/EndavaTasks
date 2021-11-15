import "./style.css";

import * as THREE from "three";

// importing custom shapes
import { cube } from "./cube";

// Creating a new scene
const scene = new THREE.Scene();

// Camera parameters
const fieldOfView = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("background"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(15);

// Creating a light
const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4); // changing position of the light in the scene

// Adding everything to the scene
scene.add(cube); // adding shape
scene.add(light); // adding shape

const animate = () => {
  requestAnimationFrame(animate);

  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
};

animate();
