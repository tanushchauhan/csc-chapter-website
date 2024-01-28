import { useContext } from "react";
import { MainContext } from "../contexts/MainContextProvider";

/* eslint-disable react/prop-types */
function PreLoader({ style }) {
  const data = useContext(MainContext);
  if (data.showPreloader) {
    return (
      <div
        className="preloader h-screen w-screen preloader flex items-center justify-center bg-white"
        style={style}
      >
        <img src="./src/img/preloader.gif" alt="preloader" />
      </div>
    );
  } else {
    return null;
  }
}

export default PreLoader;
