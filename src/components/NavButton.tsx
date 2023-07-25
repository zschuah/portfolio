import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  [x: string]: any;
};

const NavButton = ({ children, onClick, className, ...rest }: PropTypes) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={twMerge(
        "px-12 py-6 hover:bg-white/30 active:bg-white/40",
        className
      )}
    >
      {children}
    </button>
  );
};

export default NavButton;
