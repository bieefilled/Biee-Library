import React from "react";
import PropType from "prop-types";

export const VerticalCard = ({
  ImageURL,
  CardTitle,
  Hashtag,

  text,
}) => {
  const listItems = Hashtag.map((ll) => (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
      #{ll}
    </span>
  ));

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <img
          className="w-full"
          src={ImageURL}
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div className="text-gray-400 font-bold text-xl mb-2">
            {CardTitle}
          </div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div className="px-6 pt-4 pb-2">{listItems}</div>
      </div>
    </>
  );
};

VerticalCard.propType = {
  ImageURL: PropType.string.isRequired,
  CardTitle: PropType.string.isRequired,
  text: PropType.string,

  Hashtag: PropType.array,
};

export default VerticalCard;
