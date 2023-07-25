import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [x: string]: any;
};

const Button = ({ children, onClick, ...rest }: PropTypes) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={twMerge(
        "px-2 py-2 bg-slate-600 rounded-lg",
        "hover:bg-slate-500 active:bg-slate-400",
        "flex items-center gap-1 shadow shadow-white"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
