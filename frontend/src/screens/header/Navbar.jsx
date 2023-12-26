import { Switch } from "components";
import Logo from "images/svg/Logo";
import React from "react";

const Navbar = ({component,darkMode}) => {
  return (
    <>
      <header className={`body-font ${darkMode?'text-white':'text-gray-600'}`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
            <Logo darkMode={darkMode} />
            <span className={`ml-3 text-xl ${darkMode?'hover:text-blue-900 text-white':''}`}>Url Shortner</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className={`mr-5  dark: ${darkMode?'hover:text-blue-900 text-white':'hover:text-gray-900'}`}>Paste Link</div>
            <div className={`mr-5  dark: ${darkMode?'hover:text-blue-900 text-white':'hover:text-gray-900'}`}>Generate Link</div>
            <div className={`mr-5  dark: ${darkMode?'hover:text-blue-900 text-white':'hover:text-gray-900'}`}>Copy Link</div>
            <div className={`mr-5  dark: ${darkMode?'hover:text-blue-900 text-white':'hover:text-gray-900'}`}>Use Link</div>
          </nav>
          {
            component
          }
        </div>
      </header>
    </>
  );
};

export default Navbar;
