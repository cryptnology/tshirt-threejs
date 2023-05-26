import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10"
          {...slideAnimation('left')}
        >
          <motion.header className="header" {...slideAnimation('down')}>
            <img
              className="w-8 h-8 object-contain"
              src="./threejs.png"
              alt="logo"
            />
          </motion.header>
          <motion.div
            className="flex-1 xl:justify-center justify-start flex flex-col gap-10"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="xl:text-[10rem] text-[6rem] xl:leading-[11rem] leading-[7rem] font-black text-black">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContainerAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                officia vitae recusandae mollitia tenetur animi saepe
                voluptatibus sapiente velit, ut placeat iste ratione quaerat
                nostrum quas ipsa nihil rem nulla.
              </p>
            </motion.div>
            <CustomButton
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              type="filled"
              title="Customise It"
              handleClick={() => (state.intro = false)}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
