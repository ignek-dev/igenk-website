// src/types/three-materials.d.ts
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

// Augment the react-three-fiber module to register the custom element
declare module "@react-three/fiber" {
  // If you want to be explicit about props, replace `any` with a props type
  interface ThreeElements {
    bulgeShaderMaterial: any;
  }
}

export {};
