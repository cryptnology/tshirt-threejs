import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Shirt from './Shirt';

const CanvasModel = () => {
  return (
    <Canvas
      className="w-full max-w-full h-full transition-all ease-in"
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        {/* @ts-ignore */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
