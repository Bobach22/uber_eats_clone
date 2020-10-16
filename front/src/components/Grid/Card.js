import React from "react";
import { Link } from "react-router-dom";
// import {LazyLoadImage} from 'react-lazy-load-image-component'
export const Card = ({ data }) => {
  return (
    <div className="mr-6">
      <div className="flex flex-col">
        <div className="block relative">
          <div className="relative xs:pb-48  md:pb-64">
            <img
              className="absolute object-cover w-full  h-full"
              src={`/images/${data.image}`}
              alt={data.name}
            />
          </div>
          {data.promotion && (
            <div className="absolute top-4 -right-2 px-3 py-1 text-white text-center subpixel-antialiased bg-purple-700 font-light leading-5">
              {data.promotion}
            </div>
          )}
        </div>

        <div className="flex w-full items-center py-2 sm:py-3 border-b border-gray-300 ">
          <div className="w-full">
            <div className="grid">
              <h3 className="font-medium text-lg text-gray-900  leading-6 truncate ...">
                <Link to={`/restaurant/${data.id}`}> {data.name} </Link>
              </h3>
            </div>
            <div className="font-normal text-sm text-gray-800 whitespace-no-wrap tracking-tight leading-6">
              ${data.delivery_fee} Delivery Fee • {data.delivery_time} Min
              • $
            </div>
          </div>
          <div className="w-6"></div>
          <span
            style={{ width: "2.25rem", height: "2.25rem" }}
            className={`flex-none rounded-full font-semibold flex items-center justify-center  text-center text-sm  ${
              data.rating > 4.5 ? "bg-bg-rating text-green-600" : "bg-gray-400"
            }`}
          >
            {data.rating ?? "New"}
          </span>
        </div>

        <div className="font-light text-gray-800 sm:tracking-wider tracking-normal sm:text-sm text-xsm pt-2 md:leading-5 truncate ...">
          {data.category}
        </div>
      </div>
    </div>
  );
};

export default Card;
