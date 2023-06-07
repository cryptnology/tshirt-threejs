import { useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  handleClick: () => void;
  className: string;
}

const CheckOutsideClick = ({ children, handleClick, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event?.target))
      handleClick && handleClick();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default CheckOutsideClick;
