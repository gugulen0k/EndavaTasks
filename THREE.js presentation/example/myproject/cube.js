import * as THREE from "three";

// Box parameters
const boxWidth = 5;
const boxHeight = 5;
const boxDepth = 5;

// Preparing geometry for the future shape
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

// Setting material for future shape
const material = new THREE.MeshStandardMaterial({ color: 0x252525 });

// Creating final object
export const cube = new THREE.Mesh(geometry, material);
