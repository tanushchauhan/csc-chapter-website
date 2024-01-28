/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [currMode, setCurrMode] = useState(false);
  function handleClick() {
    document.querySelector("html").classList.toggle("dark");
    setCurrMode((e) => !e);
  }
  function handleMenuClick() {
    const btn = document.querySelector(".menuBtn");
    const status = btn.getAttribute("data-state");
    if (!status || status == "closed") {
      btn.setAttribute("data-state", "opened");
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.setAttribute("data-state", "closed");
      btn.setAttribute("aria-expanded", "false");
    }
    if (!showMenu) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }

    setShowMenu((e) => !e);
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="text-gray-900 dark:text-gray-200 flex text-xl justify-between items-center px-4 py-5 z-20">
      <img src={Logo} alt="logo" className="h-16" />
      <div className="flex gap-5">
        <button className="modeBtn" onClick={handleClick}>
          {!currMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 dark:stroke-gray-200 stroke-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 dark:stroke-gray-200 stroke-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>
        <button
          className="menuBtn z-10 dark:stroke-gray-200 stroke-gray-800"
          aria-expanded="false"
          onClick={handleMenuClick}
        >
          <svg
            stroke="var(--button-color)"
            className="hamburger w-12"
            viewBox="0 0 100 100"
          >
            <line
              className="line top"
              x1="90"
              x2="10"
              y1="40"
              y2="40"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            ></line>
            <line
              className="line bottom"
              x1="10"
              x2="90"
              y1="60"
              y2="60"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            ></line>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed h-screen w-screen top-0 left-0 bg-gray-200 dark:bg-gray-800 backdrop-blur-sm origin-top"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 "
              >
                <MobileNavLink
                  title="Home"
                  href="/"
                  handleMenuClick={handleMenuClick}
                />
                <MobileNavLink
                  title="About"
                  href="about"
                  handleMenuClick={handleMenuClick}
                />
                <MobileNavLink
                  title="Something"
                  href="/"
                  type="btn"
                  handleMenuClick={handleMenuClick}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href, type = "link", handleMenuClick }) => {
  if (type === "link") {
    return (
      <div className="overflow-hidden">
        <motion.div
          variants={mobileLinkVars}
          className="text-2xl dark:text-gray-200 text-gray-700"
        >
          <Link to={href} onClick={handleMenuClick}>
            {title}
          </Link>
        </motion.div>
      </div>
    );
  } else if (type === "btn") {
    return (
      <div className="overflow-hidden">
        <motion.div variants={mobileLinkVars} className="text-2xl ">
          <button className="rounded-lg px-4 py-2 bg-green-600 hover:bg-green-700">
            Somethjing
          </button>
        </motion.div>
      </div>
    );
  }
};

export default NavBar;
