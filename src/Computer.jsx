import { useGLTF } from "@react-three/drei";

const Computer = () => {
  /* Macbook model downloaded from https://market.pmnd.rs/model/macbook */
  const computer = useGLTF("./macbook.gltf");

  return <primitive object={computer.scene} position-y={-1.2} />;
};

export default Computer;
