import { createContext, useContext, useState } from "react";

type ContextTypes = {
  openId: string;
  handleOpenId: (id: string) => void;
};
const ProjContext = createContext<ContextTypes>(null!);

type PropTypes = {
  children: React.ReactNode;
};
export const ProjProvider = ({ children }: PropTypes) => {
  const [openId, setOpenId] = useState("");

  const handleOpenId = (id: string) => {
    if (id === openId) {
      setOpenId("");
    } else {
      setOpenId(id);
    }
  };

  return (
    <ProjContext.Provider value={{ openId, handleOpenId }}>
      {children}
    </ProjContext.Provider>
  );
};

export const useProjContext = () => {
  return useContext(ProjContext);
};

export default ProjContext;
