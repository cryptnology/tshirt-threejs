import { useSnapshot } from 'valtio';
import { SketchPicker } from 'react-color';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <SketchPicker
      color={snap.color}
      disableAlpha
      onChange={(color) => (state.color = color.hex)}
    />
  );
};

export default ColorPicker;
