import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { useControls } from "leva";
import Computer from "./Computer";
import Mobile from "./Mobile";

const ThreeScene = () => {
  /*
  const { bgColor } = useControls({
    bgColor: "#f5e9e9",
  });
  */

  return (
    <>
      <color args={["#f5e9e9"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float floatIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ffffe5"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Computer />
          <Mobile />
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
