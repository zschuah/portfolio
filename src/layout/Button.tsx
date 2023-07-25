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
      className="px-2 py-2 bg-slate-500 rounded-lg hover:bg-slate-400"
    >
      {children}
    </button>
  );
};

export default Button;
