"use client"

import React, { useEffect, useRef, useState } from "react"
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei"

// === SHADERS ===
const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uStrength;
 
varying vec2 vUv;
varying float vElevation;
 
float circle(vec2 uv, vec2 circlePosition, float radius) {
  float dist = distance(circlePosition, uv);
  return 1.0 - smoothstep(0.0, radius, dist);
}
 
float elevation(float radius, float intensity) {
  float circleShape = circle(vUv, uMouse, radius);
  circleShape = pow(circleShape, 1.0);
  return circleShape * intensity;
}
 
void main() {
  vUv = uv;
  vec3 pos = position;
 
  float e = elevation(0.33, 2.2);
 
  // fade based on strength uniform
  pos.z += e * uStrength;
 
  vElevation = e * uStrength;
vUv = uv;
 
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`
 
const fragmentShader = `
uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElevation;
 
void main() {
    vec4 color = texture2D(uTexture, vUv);
 
    // base shadow: darker at bottom
    float thinShadowBand = smoothstep(1.0, 0.90, vUv.y);
 
    // bulge shadow: stronger where bulge exists, stronger toward bottom
    float bulgeShadow = vElevation * 0.35 * thinShadowBand;
 
    // combine shadows
   float totalShadow = clamp(bulgeShadow, 0.0, 1.0);
 
    // final color: mix text color with black shadow
     vec3 finalColor = mix(color.rgb, vec3(0.0), totalShadow);
 
    // optional: add highlight on bulge
    float highlight = vElevation * 0.02;
    finalColor += highlight;

    gl_FragColor = vec4(finalColor, color.a);
}
`

const uniforms: Record<string, unknown> = {
  uTime: 0,
  uMouse: new THREE.Vector2(),
  uTexture: null as unknown as THREE.Texture | null,
  uStrength: 0,
};

const BulgeShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(),
    uTexture: null as unknown as THREE.Texture | null,
    uStrength: 0,
  } as any, 
  vertexShader,
  fragmentShader
) as any;

extend({ BulgeShaderMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      bulgeShaderMaterial: any
    }
  }
}

function BulgeTextPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)
  const [texture, setTexture] = useState<THREE.Texture>()
  const [planeSize, setPlaneSize] = useState({ width: 1, height: 1 })

  const [hovering, setHovering] = useState(false) // NEW

useEffect(() => {
  let raf = 0;
  const DPR = Math.max(1, window.devicePixelRatio || 1);

  const build = () => {
    // responsive canvas width/height
    const vw = Math.max(900, Math.min(window.innerWidth * 0.8, 1600));

    // keep fonts strictly between 130 and 160 (responsive but clamped)
    const baseFont = Math.round(Math.min(160, Math.max(130, vw / 8)));

    // per-line font sizes (you can still tweak individual multipliers if needed)
    const fontSizes = [baseFont, baseFont, baseFont, baseFont];

    // vertical spacing: ensure canvas height can contain all lines (add extra padding)
    const lineHeight = Math.ceil(baseFont * 1.06);
    const neededHeight = Math.ceil(lineHeight * fontSizes.length + 80); // extra 80px padding

    // create HiDPI canvas
    const canvasW = Math.floor(vw * DPR);
    const canvasH = Math.floor(neededHeight * DPR);

    const canvas = document.createElement("canvas");
    canvas.width = canvasW;
    canvas.height = canvasH;
    canvas.style.width = `${Math.floor(vw)}px`;
    canvas.style.height = `${Math.floor(neededHeight)}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); // scale context for DPR
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // text color and baseline
    ctx.fillStyle = "#d3d3d3"; // your gray hex
    ctx.textBaseline = "top";
    ctx.textAlign = "left";

    const startX = 30;
    let y = baseFont * 0.35;

    const lines = ["WE ARE", "LIFERAY", "BOUTIQUE", "COMPANY"];
    const styles = ["normal", "italic", "italic", "italic"];
    const weights = ["700", "700", "700", "700"];

    const count = Math.min(lines.length, styles.length, weights.length, fontSizes.length);

    for (let i = 0; i < count; i++) {
      const style = styles[i] ?? "normal";
      const weight = weights[i] ?? "700";
      const fontSize = fontSizes[i] ?? baseFont;
      ctx.font = `${style} ${weight} ${fontSize}px "Roboto", Arial, sans-serif`;
      ctx.fillText(lines[i] ?? "", startX, y);
      y += fontSize * 1.06;
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;

    // dispose previous texture if any
    setTexture((prev) => {
      if (prev) prev.dispose();
      return tex;
    });

    setPlaneSize({ width: canvasW / DPR, height: canvasH / DPR });
  };

  // initial build
  build();

  const onResize = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(build);
  };

  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);

  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("orientationchange", onResize);
    if (raf) cancelAnimationFrame(raf);
    // dispose current texture
    setTexture((prev) => {
      if (prev) prev.dispose();
      return undefined;
    });
  };
}, []);



  useFrame((state) => {
    if (!materialRef.current) return

    const mat = materialRef.current

    if (hovering) {
      mat.uMouse.set(state.mouse.x * 0.5 + 0.5, state.mouse.y * 0.5 + 0.5)
    }

    // fade bulge strength smoothly
    mat.uStrength = THREE.MathUtils.lerp(mat.uStrength, hovering ? 1 : 0, 0.12)
  })

  const planeWidth = 18
  const planeHeight = (planeSize.height / planeSize.width) * planeWidth
  const planeLeftOffset = -9 + planeWidth / 2 - 3

  return (
    <mesh
      ref={meshRef}
      position={[planeLeftOffset, 0, 0]}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
    >
      <planeGeometry args={[planeWidth, planeHeight, 128, 700]} />
      {texture && <bulgeShaderMaterial ref={materialRef} uTexture={texture} />}
    </mesh>
  )
}

function getCameraZ() {
  if (typeof window === "undefined") return 19;

  const w = window.innerWidth;

  if (w >= 1440 && w < 1536) {
    const t = (w - 1440) / (1536 - 1440);    
    return 19 - t * (19 - 18);               
  }

  if (w >= 1536 && w < 1920) {
    const t = (w - 1536) / (1920 - 1536);    
    return 18 - t * (18 - 14);               
  }

  if (w >= 1920) return 14;

  return 19;
}


function CameraSync({ camZ }: { camZ: number }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, camZ);
    camera.updateProjectionMatrix();
  }, [camZ, camera]);
  return null;
}
export default function Scene() {

    const [camZ, setCamZ] = useState(() => getCameraZ());

  useEffect(() => {
    let raf = 0;
    const handle = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setCamZ(getCameraZ());
      });
    };
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        background: "black",
        width: "100%",
        maxHeight: "800px",
      }}
    >
        <Canvas style={{ width: "100%", height: "500px" }} camera={{ position: [0, 0, camZ], fov:30 }}>
        <CameraSync camZ={camZ} />
        <ambientLight />
        <BulgeTextPlane />
      </Canvas>
    </div>
  )
}
