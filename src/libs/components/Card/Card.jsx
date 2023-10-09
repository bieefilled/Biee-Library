import React from "react";
import PropType from "prop-types";

function VarticalCard({ imgURl, Title, Text, Hashtags }) {
  var Hash = Hashtags.map((e) => {
    return (
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{e}
      </span>
    );
  });

  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={imgURl} alt="Sunset in the mountains"></img>
        <div class="px-6 py-4">
          <div class="font-bold  text-black text-xl mb-2">{Title}</div>
          <p class="text-gray-700 text-base">{Text}</p>
        </div>
        <div class="px-6 pt-4 pb-2">{Hash}</div>
      </div>
    </>
  );
}

function HorizontalCard({ imgURl, Title, Text, Hashtags }) {
  var Hash = Hashtags.map((e) => {
    return (
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{e}
      </span>
    );
  });
  return (
    <>
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <img
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={imgURl}
          title="Woman holding a mug"
        ></img>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-4">
            <div class="text-gray-900 font-bold text-xl mb-2">{Title}</div>
            <p class="text-gray-700 text-base">{Text}</p>
            <div class="px-6 pt-6 pb-0">{Hash}</div>
          </div>
        </div>
      </div>
    </>
  );
}

VarticalCard.propType = {
  imgURL: PropType.string.isRequired,
  Title: PropType.string.isRequired,
  Text: PropType.string,
  Hashtags: PropType.array,
};

HorizontalCard.propType = {
  imgURL: PropType.string.isRequired,
  Title: PropType.string.isRequired,
  Text: PropType.string,
  Hashtags: PropType.array,
};

export { VarticalCard, HorizontalCard };
