import React from "react";

export const Card = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxWJ2PCjRg0LMXUhgkMyNctTITPmEXu9Y3GODx1sl&s"
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div className="text-gray-400 font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
