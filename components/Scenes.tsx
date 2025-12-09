"use client"

import React, { useEffect, useRef, useState } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
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
  circleShape = pow(circleShape, 1.3);
  return circleShape * intensity;
}

void main() {
  vUv = uv;
  vec3 pos = position;

  float e = elevation(0.33, 2.2);

  // fade based on strength uniform
  pos.z += e * uStrength;

  vElevation = e * uStrength;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

const fragmentShader = `
uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 color = texture2D(uTexture, vUv);

  float highlight = vElevation * 0.15;

  gl_FragColor = vec4(color.rgb + highlight, color.a);
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
    const canvasWidth = 1500
    const canvasHeight = 400

    const canvas = document.createElement("canvas")
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    const ctx = canvas.getContext("2d")!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "white"
    ctx.textBaseline = "top"
    ctx.textAlign = "left"

    const startX = 0
    let y = 0

    const lines = ["We are the", "Liferay Boutique", "Company"]
    const styles = ["normal", "italic", "normal"]
    const weights = ["700", "700", "700"]
    const fontSizes = [132, 132, 132]

    // defensive: iterate only up to the shortest array length
    const count = Math.min(lines.length, styles.length, weights.length, fontSizes.length)

    for (let i = 0; i < count; i++) {
      const style = styles[i] ?? "normal"
      const weight = weights[i] ?? "700"
      const fontSize = fontSizes[i] ?? 132
      const text = lines[i] ?? ""

      ctx.font = `${style} ${weight} ${fontSize}px "Poppins", Arial, sans-serif`
      ctx.fillText(text, startX, y)
      y += fontSize * 1.05
    }

    const tex = new THREE.CanvasTexture(canvas)
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter

    setTexture(tex)
    setPlaneSize({ width: canvasWidth, height: canvasHeight })
  }, [])

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
      <planeGeometry args={[planeWidth, planeHeight, 128, 128]} />
      {texture && <bulgeShaderMaterial ref={materialRef} uTexture={texture} />}
    </mesh>
  )
}

export default function Scene() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        background: "black",
        width: "100%",
        maxHeight: "500px",
      }}
    >
      <Canvas style={{ width: "100%", height: "500px" }} camera={{ position: [0, 0, 11], fov: 40 }}>
        <ambientLight />
        <BulgeTextPlane />
      </Canvas>
    </div>
  )
}
