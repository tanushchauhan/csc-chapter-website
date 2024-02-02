import Logo from "../img/logo.svg";

function Footer() {
  return (
    <footer className="text-gray-900 dark:text-gray-200 flex bg-gray-100 dark:bg-gray-700 mt-10 xl:min-h-36 items-center justify-center gap-4 py-8 px-4">
      <img src={Logo} alt="logo" className="h-10 lg:h-20 sm:h-16" />
      <div className="h-10 lg:h-20 sm:h-16= border-l-2 border-gray-500"></div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">LTHS CSC Chapter Website</p>
        <p className="text-center">Copyright CSC &copy; 2024</p>
      </div>
      <div className="h-10 lg:h-20 sm:h-16= border-l-2 border-gray-500"></div>
      <div className="flex gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 stroke-gray-200 fill-gray-200 hover:stroke-gray-400 hover:fill-gray-400"
        >
          <path
            d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
            stroke="#33363F"
            strokeWidth="2"
          />
          <circle cx="16.5" cy="7.5" r="1.5" fill="#33363F" />
          <circle cx="12" cy="12" r="3" stroke="#33363F" strokeWidth="2" />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
