import React from "react";
import Searchbox from "../../../components/Input/Searchbox";

const Banner = () => {
  return (
    <div className="max-w:md">
      <div className="relative pb-1/2 justify-center align-middle">
        <img
          className="absolute w-full object-cover"
          alt="Background"
          src="/images/food-background.jpg"
        />
        <Searchbox />
      </div>
    </div>
  );
};
export default Banner;
