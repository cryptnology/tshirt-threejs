import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { EditorTabs, FilterTabs } from '../config/constants';
import { CustomButton, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            className="absolute top-0 left-0 z-10 2xl:px-64 xl:px-44 lg:px-20 md:px-16 sm:px-10"
            key="custom"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-24 right-2 pr-5 2xl:pr-64 xl:pr-44 lg:pr-20 md:pr-16 sm:pr-10"
            {...fadeAnimation}
          >
            <CustomButton
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <Tab key={tab.name} />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
