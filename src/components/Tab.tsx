import { useSnapshot } from 'valtio';

import state from '../store';

interface Props {
  tab: {
    name: string;
    icon: string;
  };
  isFilterTab?: boolean;
  isActiveTab: string;
  handleClick: () => void;
}

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }: Props) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };

  return (
    <div
      className={`w-14 h-14 flex justify-center items-center cursor-pointer select-none ${
        isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
      }`}
      key={tab.name}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        className={
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-[91.666667%] object-contain'
        }
        src={tab.icon}
        alt={tab.name}
      />
    </div>
  );
};

export default Tab;
