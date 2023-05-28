import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

interface Props {
  type: 'filled' | 'outline';
  title: string;
  customStyles: string;
  handleClick: () => void;
}

const CustomButton = ({ type, title, customStyles, handleClick }: Props) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: string) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${generateStyle(
        type,
      )} ${customStyles}`}
      onClick={handleClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
