import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';
import { Container, CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <Container>
      <AnimatePresence>
        {snap.intro && (
          <motion.section
            className="w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 max-xl:gap-7 absolute z-10"
            {...slideAnimation('left')}
          >
            <motion.div
              className="flex-1 xl:justify-center justify-start flex flex-col gap-10 mt-24 xl:mt-0"
              {...headContainerAnimation}
            >
              <motion.div {...headTextAnimation}>
                <h1 className="xl:text-[10rem] text-[6rem] xl:leading-[11rem] leading-[7rem] font-black">
                  MIX & <br className="xl:block hidden" /> MATCH.
                </h1>
              </motion.div>
              <motion.div
                className="flex flex-col gap-5"
                {...headContainerAnimation}
              >
                <p className="max-w-md font-normal opacity-70 text-base">
                  Create your unique and exclusive shirt with a 3D customization
                  tool. <strong>Unleash your imagination</strong> and define
                  your own style.
                </p>
              </motion.div>
              <div>
                <CustomButton
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  type="filled"
                  title="Customise It"
                  handleClick={() => (state.intro = false)}
                />
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Home;
