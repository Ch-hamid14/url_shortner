import React from "react";
// import IconsArray from "./constants/IconsArray";
import FooterLabelArray from "./constants/LabelArrayFooter";
import Logo from "images/svg/Logo";
import Facebook from "images/svg/Facebook";
import Instagram from "images/svg/Instagram";
import Twitter from "images/svg/Twitter";
import LinkedIn from "images/svg/LinkedIn";
const Footer = ({ darkMode }) => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo darkMode={darkMode} />
            <span
              className={`ml-3 text-xl ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Url shortner
            </span>
          </div>
          <p
            className={`mt-2 text-sm  ${
              darkMode ? "hover:text-blue-900 text-white" : "text-gray-500"
            }`}
          >
            Generate short link and use the link to redirect the webpage using
            the short link
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 mb-8 md:text-left text-center order-first">
          {FooterLabelArray.map((el, index) => (
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={index}>
              <h2
                className={`title-font font-medium tracking-widest text-sm mb-3 ${
                  darkMode ? "text-white hover:text-blue-900" : " text-gray-900"
                }`}
              >
                {el.title}
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <div
                    className={`${
                      darkMode
                        ? "text-white hover:text-blue-900"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {el.label}
                  </div>
                </li>
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className={`${darkMode ? "bg-black" : "bg-gray-100"}`}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p
            className={` text-sm text-center sm:text-left ${
              darkMode ? "text-white" : "text-gray-500"
            }`}
          >
            © 2023 Url Shortner —
            <div
              rel="noopener noreferrer"
              className={`ml-1 ${darkMode ? "text-white" : "text-gray-600"}`}
              target="_blank"
            >
              @hamid
            </div>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <div
              className={`mr-2 ml-1 ${
                darkMode ? "text-white hover:text-blue-900" : "text-gray-500"
              }`}
            >
              <Facebook />
            </div>
            <div
              className={`mr-2 ml-1 ${
                darkMode ? "text-white hover:text-blue-900" : "text-gray-500"
              }`}
            >
              <Instagram />
            </div>
            <div
              className={`mr-2 ml-1 ${
                darkMode ? "text-white hover:text-blue-900" : "text-gray-500"
              }`}
            >
              <Twitter />
            </div>
            <div
              className={`mr-2 ml-1 ${
                darkMode ? "text-white hover:text-blue-900" : "text-gray-500"
              }`}
            >
              <LinkedIn />
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
