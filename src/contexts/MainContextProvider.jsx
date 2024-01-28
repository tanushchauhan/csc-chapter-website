/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MainContext = createContext();
function MainContextProvider({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  return (
    <MainContext.Provider value={{ showPreloader, setShowPreloader }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainContextProvider };
