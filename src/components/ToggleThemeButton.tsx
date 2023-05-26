import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface Props {
  className?: string;
}

const ToggleThemeButton = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`${className} cursor-default lg:cursor-pointer`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <motion.img
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="h-9 w-9"
        src={`./${theme === 'light' ? 'sun' : 'moon'}.gif`}
        alt="moon"
      />
    </button>
  );
};

export default ToggleThemeButton;
