import { useGLTF, Html } from "@react-three/drei";

const Computer = () => {
  /* Macbook model downloaded from https://market.pmnd.rs/model/macbook */
  const computer = useGLTF("./macbook.gltf");

  return (
    <primitive object={computer.scene} position={[0, -1.2, 0]}>
      <Html
        transform
        distanceFactor={1}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <iframe
          className="portfolio"
          src="https://tung-portfolio-challenge.netlify.app/"
        />
      </Html>
    </primitive>
  );
};

export default Computer;
