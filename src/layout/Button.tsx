type PropTypes = {
  children: React.ReactNode;
  [x: string]: any;
};

const Button = ({ children, ...rest }: PropTypes) => {
  return (
    <button
      {...rest}
      className="px-2 py-2 bg-slate-500 rounded-lg hover:bg-slate-400"
    >
      {children}
    </button>
  );
};

export default Button;
