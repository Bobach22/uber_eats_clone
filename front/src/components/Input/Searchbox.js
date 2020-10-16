import React from "react";
import SearchInput from "./SearchInput";

const Searchbox =() => {

  return (
    <div  style={{'z-index':'2'}} className="inline-block absolute justify-center left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 search-box">
      <h2 className="mb-11 leading-11 text-4xl font-bold">Your favorite food, delivered with Uber</h2>
        <div className="flex flex-row items-center space-around">
          <div className="" style={{'width':'540px'}}>
            <div className="flex items-center  min-w-full space-around w-auto px-4 py-3 bg-white focus-within:shadow-input-focus ">
              <div className="">
                {" "}
                <svg
                  className="location-marker w-6 h-6  m-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <SearchInput 
               className="flex-1 outline-none ml-2 bg-transparent leading-6 text-base"
               placeholder="What is your address?"            
              />
            </div>
          </div>

          <div style={{'min-height':'56px'}} className="text-xl py-3 ml-4 px-4 font-semibold whitespace-no-wrap bg-gray-900 text-white text-center cursor-pointer">
            Find Food
          </div>
        </div>
      
    </div>
  );
};
// const Input = React.forwardRef(({ value, handleChange},ref) => {
//   return (
//     <input
//       className="flex-1 outline-none mx-2 bg-transparent leading-6 text-base"
//       type="text"
//       value={value}
//       onChange={handleChange}
//       ref={ref}
//       placeholder="What's your address?"
//     />
//   );
// });

export default Searchbox
