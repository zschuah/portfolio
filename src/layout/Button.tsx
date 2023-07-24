type PropTypes = {
  children: React.ReactNode;
};

const Button = ({ children }: PropTypes) => {
  return (
    <button className="px-2 py-2 bg-slate-500 rounded-lg hover:bg-slate-400">
      {children}
    </button>
  );
};

export default Button;
