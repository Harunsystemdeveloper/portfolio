"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  /** Förenklad scen: färre objekt, ingen kantutjämning, lägre upplösning */
  lowPower: boolean;
  /** "pointer" = följer musen, "scroll" = reagerar på scroll (mobil) */
  interaction: "pointer" | "scroll";
  /** false pausar renderingen helt (t.ex. när scenen inte syns) */
  active: boolean;
  light: boolean;
};

const GOLD = new THREE.Color("#f5b942");
const CYAN = new THREE.Color("#38d6f5");
const BASE_Y = -2;
const STEP = 0.78;
const BUILD_DELAY = 0.22; // sekunder mellan varje trappsteg
const BUILD_TIME = 0.9;
const FLIGHT_TIME = 5.5;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

/* ---------- Trappsteg som bygger sig själva till en stigande graf ---------- */
function useSteps(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const x = (i - (count - 1) / 2) * STEP;
        // Stigande höjd med en liten "graf-svängning" för en levande kurva
        const h = 0.45 + i * 0.42 + Math.sin(i * 1.7) * 0.12;
        const color = GOLD.clone().lerp(CYAN, i / (count - 1));
        return { x, h, color };
      }),
    [count],
  );
}

function GrowthSteps({ steps }: { steps: ReturnType<typeof useSteps> }) {
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const materials = useMemo(
    () =>
      steps.map(
        (s) =>
          new THREE.MeshStandardMaterial({
            color: s.color,
            emissive: s.color,
            emissiveIntensity: 0.35,
            metalness: 0.4,
            roughness: 0.35,
          }),
      ),
    [steps],
  );

  useEffect(() => () => materials.forEach((m) => m.dispose()), [materials]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const pulse = (t * 2.2) % (steps.length + 4); // en ljusvåg som vandrar uppför trappan
    steps.forEach((s, i) => {
      const mesh = meshes.current[i];
      if (!mesh) return;
      const grow = easeOut(clamp01((t - i * BUILD_DELAY) / BUILD_TIME));
      const height = Math.max(0.001, s.h * grow);
      mesh.scale.y = height;
      mesh.position.y = BASE_Y + height / 2;
      materials[i].emissiveIntensity = 0.3 + Math.max(0, 1 - Math.abs(pulse - i)) * 0.9;
    });
  });

  return (
    <group>
      {steps.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshes.current[i] = el;
          }}
          position={[s.x, BASE_Y, 0]}
          material={materials[i]}
          scale={[1, 0.001, 1]}
        >
          <boxGeometry args={[STEP * 0.72, 1, STEP * 0.72]} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- Raket/ljuspunkt som färdas mot toppen ---------- */
function Rocket({ steps, trailLength }: { steps: ReturnType<typeof useSteps>; trailLength: number }) {
  const head = useRef<THREE.Group>(null);
  const trail = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const point = useMemo(() => new THREE.Vector3(), []);

  const curve = useMemo(() => {
    const pts = steps.map((s) => new THREE.Vector3(s.x, BASE_Y + s.h + 0.35, 0.2));
    const last = steps[steps.length - 1];
    pts.unshift(new THREE.Vector3(steps[0].x - 0.8, BASE_Y + 0.2, 0.2));
    pts.push(new THREE.Vector3(last.x + 0.7, BASE_Y + last.h + 1.6, 0.2));
    pts.push(new THREE.Vector3(last.x + 1.1, BASE_Y + last.h + 3.4, 0));
    return new THREE.CatmullRomCurve3(pts);
  }, [steps]);

  const startAt = steps.length * BUILD_DELAY + BUILD_TIME;

  useFrame(({ clock }) => {
    const t = clock.elapsedTime - startAt;
    const u = t < 0 ? -1 : (t / FLIGHT_TIME) % 1;
    const visible = u >= 0;

    if (head.current) {
      head.current.visible = visible;
      if (visible) {
        curve.getPointAt(u, point);
        head.current.position.copy(point);
        // Tonar in i början och ut i slutet av varje varv
        const fade = Math.min(1, u * 8, (1 - u) * 6);
        head.current.scale.setScalar(Math.max(0.001, fade));
      }
    }

    if (trail.current) {
      for (let k = 0; k < trailLength; k++) {
        const uk = u - (k + 1) * 0.012;
        if (!visible || uk < 0) {
          dummy.scale.setScalar(0);
        } else {
          curve.getPointAt(uk, dummy.position);
          const fade = Math.min(1, u * 8, (1 - u) * 6);
          dummy.scale.setScalar(Math.max(0.001, (1 - k / trailLength) * fade));
        }
        dummy.updateMatrix();
        trail.current.setMatrixAt(k, dummy.matrix);
      }
      trail.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={head} visible={false}>
        <mesh>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshBasicMaterial color="#fff4d6" toneMapped={false} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshBasicMaterial color="#f5b942" transparent opacity={0.25} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
        <pointLight color="#ffcf6b" intensity={6} distance={4} />
      </group>
      <instancedMesh ref={trail} args={[undefined, undefined, trailLength]} frustumCulled={false}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color="#ffcf6b" transparent opacity={0.55} depthWrite={false} blending={THREE.AdditiveBlending} />
      </instancedMesh>
    </>
  );
}

/* ---------- Svävande geometriska former ---------- */
const SHAPES = [
  { kind: "torus", pos: [-4.2, 2.2, -2], color: "#38d6f5" },
  { kind: "ico", pos: [3.8, 2.6, -3], color: "#f5b942" },
  { kind: "box", pos: [-3.2, -1.4, -1.5], color: "#f5b942" },
  { kind: "sphere", pos: [4.6, -0.6, -2.5], color: "#38d6f5" },
  { kind: "torus", pos: [1.2, 3.6, -4], color: "#f5b942" },
  { kind: "ico", pos: [-5.6, 0.4, -4], color: "#38d6f5" },
] as const;

function FloatingShapes({ count }: { count: number }) {
  return (
    <>
      {SHAPES.slice(0, count).map((s, i) => (
        <Float key={i} speed={1 + (i % 3) * 0.3} rotationIntensity={0.8} floatIntensity={0.9}>
          <mesh position={s.pos as unknown as [number, number, number]} scale={0.5}>
            {s.kind === "torus" && <torusGeometry args={[0.6, 0.12, 12, 40]} />}
            {s.kind === "ico" && <icosahedronGeometry args={[0.6, 0]} />}
            {s.kind === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
            {s.kind === "sphere" && <sphereGeometry args={[0.5, 20, 20]} />}
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.25}
              metalness={0.6}
              roughness={0.3}
              wireframe={s.kind === "ico" || s.kind === "box"}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/* ---------- Partiklar/stjärnor för djup ---------- */
function Particles({ count, light }: { count: number; light: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    // Deterministisk pseudo-slump så att scenen ser likadan ut varje gång
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 28;
      arr[i * 3 + 1] = (rand() - 0.5) * 16;
      arr[i * 3 + 2] = -rand() * 14 + 2;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        color={light ? "#33415f" : "#cfe8ff"}
        transparent
        opacity={light ? 0.45 : 0.75}
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- Kamera som följer mus eller scroll ---------- */
function CameraRig({ interaction }: { interaction: Props["interaction"] }) {
  const input = useRef({ x: 0, y: 0 });
  const target = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    if (interaction === "pointer") {
      const onMove = (e: PointerEvent) => {
        input.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        input.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      return () => window.removeEventListener("pointermove", onMove);
    }
    const onScroll = () => {
      const p = Math.min(1, window.scrollY / window.innerHeight);
      input.current.x = p * 0.8;
      input.current.y = p;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [interaction]);

  useFrame(({ camera }, delta) => {
    target.set(input.current.x * 0.9, 0.6 + input.current.y * 0.7, 9);
    camera.position.lerp(target, 1 - Math.exp(-delta * 2.5));
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ---------- Placerar trappan efter skärmens bredd ---------- */
function Composition({ lowPower, interaction, light }: Omit<Props, "active">) {
  const viewport = useThree((s) => s.viewport);
  const steps = useSteps(lowPower ? 6 : 9);
  const wide = viewport.aspect > 1.1;

  // Desktop: trappan till höger om texten. Mobil: mindre och längre ned.
  const groupPos: [number, number, number] = wide ? [viewport.width * 0.2, 0, 0] : [0, -1.6, 0];
  const groupScale = wide ? Math.min(1, viewport.width / 16) : Math.min(0.6, viewport.width / 9);

  return (
    <>
      <CameraRig interaction={interaction} />
      <Particles count={lowPower ? 220 : 650} light={light} />
      <FloatingShapes count={lowPower ? 3 : 6} />
      <group position={groupPos} scale={groupScale} rotation={[0, -0.35, 0]}>
        <GrowthSteps steps={steps} />
        <Rocket steps={steps} trailLength={lowPower ? 8 : 16} />
      </group>
    </>
  );
}

export default function HeroScene({ lowPower, interaction, active, light }: Props) {
  return (
    <Canvas
      dpr={[1, lowPower ? 1.25 : 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0.6, 9], fov: 45 }}
      gl={{ antialias: !lowPower, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={light ? 0.9 : 0.45} />
      <directionalLight position={[5, 8, 6]} intensity={1.2} />
      <pointLight position={[-6, 3, 4]} color="#38d6f5" intensity={25} />
      <Composition lowPower={lowPower} interaction={interaction} light={light} />
    </Canvas>
  );
}
