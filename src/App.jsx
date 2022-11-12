import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
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

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float floatIntensity={0.4}>
          <Computer />
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

const App = () => (
  <Canvas camera={{ fov: 45, position: [-3, 1.5, 4] }}>
    <ThreeScene />
  </Canvas>
);

export default App;
