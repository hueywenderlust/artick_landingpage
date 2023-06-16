

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Jacket(props) {
  const { nodes, materials } = useGLTF("/jacket.glb");
  return (
    
    <group {...props} dispose={null}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>

         
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.imagetostl_mesh0.geometry}
                material={materials.mat0}
            
                />
            
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.imagetostl_mesh1.geometry}
                material={materials.mat1}
            />
        </group>
    </group>
  );
}

useGLTF.preload("/jacket.glb");