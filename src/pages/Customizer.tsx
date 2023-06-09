import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants';
import {
  CheckOutsideClick,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from '../components';
import { reader } from '../config/helpers';

const Customizer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const snap = useSnapshot(state);

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return (
          <CheckOutsideClick
            className="absolute left-full ml-3"
            handleClick={() => setActiveEditorTab('')}
          >
            <ColorPicker />
          </CheckOutsideClick>
        );
      case 'filepicker':
        return (
          <CheckOutsideClick
            className="filepicker-container"
            handleClick={() => setActiveEditorTab('')}
          >
            <FilePicker file={file} setFile={setFile} readFile={readFile} />
          </CheckOutsideClick>
        );
      default:
        return null;
    }
  };

  const handleDecals = (
    type: keyof typeof DecalTypes,
    result: string | ArrayBuffer | null,
  ) => {
    const decalType = DecalTypes[type];

    // @ts-ignore
    state[decalType.stateProperty] = result;

    // @ts-ignore
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }

    setActiveFilterTab((prevState) => {
      // @ts-ignore
      return { ...prevState, [tabName]: !prevState[tabName] };
    });
  };

  const readFile = async (type: 'logo' | 'full') => {
    const result = await reader(file);

    handleDecals(type, result);
    setActiveEditorTab('');
  };

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
                  <Tab
                    key={tab.name}
                    tab={tab}
                    isActiveTab={tab.name}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
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
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                // @ts-ignore
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
