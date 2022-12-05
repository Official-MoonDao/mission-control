import {
  Bloom,
  EffectComposer,
  Pixelation,
  Grid,
  Scanline,
  DotScreen,
  Glitch,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
function PixelCanvas(props) {
  return (
    <div className="relative bottom-12 m-3 w-[40%]">
      <Canvas>
        <ambientLight intensity={0.5} />
        {props.children}
        <EffectComposer>
          <Pixelation granularity={0} />
          <DotScreen scale={0.075} angle={0.5} opacity={0.025} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default PixelCanvas;
