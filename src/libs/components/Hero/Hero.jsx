import logo from "../../../assets/logo.svg";
export const Hero = () => {
  return (
    <>
      <section className="flex w-screen justify-center">
        <div className="flex w-screen justify-center overflow-hidden bg-white rounded-lg dark:bg-transparent h-full py-16 ">
          <span>{/* <img src={logo} className="w-5/6" /> */}</span>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className=" font-bold text-gray-800 dark:text-white text-6xl">
              Biee-Ui
            </h1>

            <p className="mt-2 text-md text-gray-600 dark:text-gray-400 w-3/6">
              React components for faster and easier web development. Build your
              own design system, or start with Biee-Ui Design.
            </p>

            <div className="flex justify-between mt-3 item-center">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#EA58A1] to-blue-500 group-hover:from-[#6F2DBD] group-hover:to-blue-500bg-[#242424]bg-[#242424]bg-[#242424]bg-[#242424]focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white">
                  Get started
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
