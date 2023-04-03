import { EffectComposer, DotScreen } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
function CustomCanvas(props) {
  return (
    <div className="relative left-4 h-full w-full lg:h-[10vw] lg:w-[60%]">
      <Canvas>
        <ambientLight intensity={0.5} />
        {props.children}
        <EffectComposer>
          <DotScreen scale={0.075} angle={0.5} opacity={0.025} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default CustomCanvas;
