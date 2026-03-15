import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Cube() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  )
}

export default function Background3D() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}