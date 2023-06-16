import React, { Suspense } from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import styled from "styled-components";
import Jacket from "./Jacket";

const Desc = styled.div`
  width: 200px;
  height: 270px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const ProductDesc = () => {
   return (
    <>
      {/* <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Jacket />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas> */}

       <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#ff5400"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/jacket.png" />
      <Desc>
        <b>H1C Gallery Nylon Bandage Jacket </b>
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at neque et libero laoreet fermentum et vel lectus. Sed posuere risus ac quam dignissim laoreet. Mauris pharetra orci eu elementum malesuada. Pellentesque auctor dolor vulputate, iaculis felis a, vulputate nisi. Fusce gravida facilisis lacus id congue. Aenean euismod posuere sapien ut volutpat. 

      </Desc>
    </>
  );
}

export default ProductDesc
