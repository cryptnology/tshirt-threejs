import { useRef } from 'react';
import { useSnapshot } from 'valtio';
import { GroupProps, useFrame } from '@react-three/fiber';
import { easing } from 'maath';

import state from '../store';

interface Props {
  children: React.ReactNode;
}

const CameraRig = ({ children }: Props) => {
  const groupRef = useRef<GroupProps>(null);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isMobile = window.innerWidth <= 639;
    const isMd = window.innerWidth > 639;
    const isLg = window.innerWidth >= 1023;
    const isXl = window.innerWidth > 1279;

    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isMobile) targetPosition = [0, 0.33, 3.2];
      if (isMd) targetPosition = [-0.05, 0.2, 2.5];
      if (isLg) targetPosition = [-0.17, 0.1, 2.2];
      if (isXl) targetPosition = [-0.24, 0, 2];
    } else {
      if (isMobile) targetPosition = [0, 0.01, 2.5];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      groupRef.current?.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta,
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;
