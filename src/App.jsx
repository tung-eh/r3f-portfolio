import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { useControls } from "leva";
import Computer from "./Computer";

const ThreeScene = () => {
  const { bgColor } = useControls({
    bgColor: "#695b5b",
  });

  return (
    <>
      <Environment preset="city" />
      <color args={[bgColor]} attach="background" />
      <OrbitControls />

      <Float floatIntensity={0.4}>
        <Computer />
      </Float>
    </>
  );
};

const App = () => (
  <Canvas camera={{ fov: 45, position: [-3, 1.5, 4] }}>
    <ThreeScene />
  </Canvas>
);

export default App;
