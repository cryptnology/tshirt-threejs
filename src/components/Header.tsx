import { AnimatePresence, motion } from 'framer-motion';

import { slideAnimation } from '../config/motion';
import { ToggleThemeButton } from '.';

const Header = () => {
  return (
    <AnimatePresence>
      <motion.header
        className="w-full bg-transparent absolute z-20"
        {...slideAnimation('down')}
      >
        <div className="flex w-full justify-between items-center py-4 px-5 2xl:px-64 xl:px-44 lg:px-20 md:px-16 sm:px-10">
          <motion.div {...slideAnimation('left')}>
            <img
              className="w-8 h-8 object-contain"
              src="./threejs.png"
              alt="logo"
            />
          </motion.div>
          <motion.div {...slideAnimation('right')}>
            <ToggleThemeButton />
          </motion.div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
