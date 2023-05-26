import { AnimatePresence, motion } from 'framer-motion';

import { slideAnimation } from '../config/motion';
import { ToggleThemeButton } from '.';

const Header = () => {
  return (
    <AnimatePresence>
      <motion.header className="w-full" {...slideAnimation('down')}>
        <div className="flex justify-between items-center py-4">
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
