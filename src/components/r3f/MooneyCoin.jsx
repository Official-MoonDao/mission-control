import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import model from "../../assets/mooney.glb?url";
export function MooneyCoin(props) {
  const coinRef = useRef();
  const { nodes, materials } = useGLTF(model);
  const { viewport } = useThree();
  const [hover, setHover] = useState(false);

  const isMobile = viewport.width > 800;
  useFrame(({ clock }) => {
    const speed = hover ? 2.75 : 1;
    coinRef.current.rotation.y =
      Math.sin(clock.getElapsedTime() * 0.2) + Math.PI;
    coinRef.current.rotation.z += 0.01 * speed;
  });
  return (
    <group
      {...props}
      scale={isMobile ? 1 : 1.85}
      dispose={null}
      rotation={[Math.PI / 2, Math.PI, 0]}
      ref={coinRef}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.Material}
      >
        <meshLambertMaterial
          color={"#fcbf5b"}
          opacity={0.9}
          transparent={true}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_3.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_4.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_5.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_6.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_7.geometry}
        material={materials["Material.006"]}
      />
    </group>
  );
}
