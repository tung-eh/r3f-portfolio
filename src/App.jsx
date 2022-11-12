import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ fov: 45, position: [-3, 1.5, 4] }}>
      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
