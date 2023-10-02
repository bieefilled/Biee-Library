import React from "react";

export const Nav = () => {
  function Expand() {
    const nav = document.getElementById("NavButton").click();
    nav.display = "flex";
  }

  return (
    <>
      <nav className=" flex  items-center flex-wrap bg-gray-800 p-2 justify-between">
        <div className="block w-auto lg:w-awto ml-3">
          <input
            type="text"
            className=" inline-block text-sm px-3 py-2 leading-none border rounded text-gray-600 border-white hover:border-transparent hover:text-teal-500 bg-white mt-4 lg:mt-0"
            placeholder="Search..."
          ></input>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={Expand}
            className="flex items-center px-5 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="NavButton"
          className="w-full block flex-grow lg:flex lg:items-center lg:w-auto p-2 "
        >
          <div className="text-sm lg:flex-grow  ">
            <a className="block lg:inline-block text-gray-400 font-semibold text-lg mt:4 w-6 hover:text-white lg:ml-14">
              Doc
            </a>
            <a className="block lg:inline-block text-gray-400 font-semibold text-lg mt:4  hover:text-white  lg:ml-14">
              Example
            </a>
            <a className="block lg:inline-block text-gray-400 font-semibold text-lg mt:4  hover:text-white  lg:ml-14">
              Blog
            </a>
          </div>
          <a
            href="#"
            class="inline-block text-sm px-3 py-2 leading-none border rounded text-gray-600 border-white hover:border-transparent hover:text-teal-500 bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </nav>
      ;
    </>
  );
};

export default Nav;
