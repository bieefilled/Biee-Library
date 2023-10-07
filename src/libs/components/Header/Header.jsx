import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/logo.svg";
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <React.Fragment>
      <section>
        <div className="py-2 text-center w-screen bg-black  text-white ">
          🎉 versions are still on test Mode! Head to the{" "}
          <a href="" className="text-[#EA58A1]">
            {" "}
            documentation{" "}
          </a>
          to get started.
        </div>
        <nav className="dark:bg-[#101010]  border-gray-200 bg-white">
          <div className="flex flex-wrap items-center justify-around max-w-screen-xl mx-auto p-2">
            <a href="#" className="flex items-center">
              <img src={logo ? logo : ""} alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Biee-Ui
              </span>
            </a>
            <div className="flex items-center md:order-2">
              <button
                data-collapse-toggle="mega-menu"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              id="mega-menu"
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-[#6F2DBD] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#EA58A1] md:p-0 dark:text-[#EA58A1 ] md:dark:hover:text-[#EA58A1] dark:hover:bg-gray-700 dark:hover:text-[#EA58A1] md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    <Link to="/">Home</Link>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-[#EA58A1] dark:hover:bg-gray-700 dark:hover:text-[#EA58A1] md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <Link to="components">Components</Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-[#EA58A1] dark:hover:bg-gray-700 dark:hover:text-[#EA58A1] md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <Link to="/contact">Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </React.Fragment>
  );
};

Header.propTypes = {
  menus: PropTypes.string,
};
