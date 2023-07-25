import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const NavButton = ({ children, className, ...rest }: PropTypes) => {
  return (
    <button
      {...rest}
      className={twMerge("px-12 py-6 hover:bg-white/30", className)}
    >
      {children}
    </button>
  );
};

export default NavButton;
