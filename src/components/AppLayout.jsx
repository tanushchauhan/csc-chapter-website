import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PreLoader from "./PreLoader";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContextProvider";

function AppLayout() {
  const [screenLoading, setScreenLoading] = useState(false);
  const data = useContext(MainContext);
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
    position: "absolute",
  };
  useEffect(() => {
    if (data.showPreloader) {
      setScreenLoading(true);
      setTimeout(() => {
        setScreenLoading(false);
        setTimeout(() => {
          data.setShowPreloader(false);
        }, 270);
      }, 2000);
    }
  }, [data]);
  return (
    <div className="relative transition-all duration-300">
      <PreLoader style={!screenLoading ? unmountedStyle : null} />
      {!screenLoading ? (
        <div className="relative h-screen flex flex-col">
          <NavBar />
          <main className="text-gray-800 dark:text-gray-200 mb-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : null}
    </div>
  );
}

export default AppLayout;
