import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { UseApi } from "../../api/UseApi";
import {Link} from "react-router-dom"
const FoodSearchInput = React.forwardRef(
  ({ handleChange, clearInput, value }, ref) => {
    const [visible, setVisible] = useState(true);
    const handleDisplayInput = () => setVisible(!visible);

    const [meal, setMeal] = React.useState({
      restaurant: [],
      meal: [],
    });

    React.useEffect(() => {
      const getData = async () => {
        const data = await UseApi(
          `http://localhost:8000/restaurant/search?food=${value}`
        );
        if (data) {
          setMeal({
            restaurant: data.restaurant,
            meal: data.meal,
          });
        }
      };

     if(value) {getData();}

    }, [value]);

    return (
      <div className={`${value?'w-96':'w-72'}`}>
        {visible ? (
          <div className="flex items-center bg-bg-input shadow-input focus-within:shadow-input-focus px-3 py-3">
            <div className="pr-2 pl-1">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <SearchInput
              value={value}
              clearInput={clearInput}
              handleChange={handleChange}
              placeholder="What are you craving?"
              className="outline-none bg-transparent focus:bg-transparent w-full pl-1"
              name="food"
              ref={ref}
              
            >
              <div
                className="border-r border-gray-400 inline ml-3 flex-none"
                style={{ width: "1px" }}
              ></div>
            </SearchInput>
            <div
              className="ml-4 mr-1 cursor-pointer"
              onClick={handleDisplayInput}
            >
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        ) : (
          <SearchButton showInput={handleDisplayInput} />
        )}

        {value && (
          <div className="absolute flex flex-col bg-white text-gray-900 shadow-lg border border-gray-300 z-50 py-2" style={{width:'inherit'}}>
            {meal.restaurant.map((rest) => (
              <Link to={`/restaurant/${rest.id}`} key={rest.name}>
              <div  className="flex  px-4 py-2 hover:bg-gray-300">
                <div className="relative w-10 h-10 mr-4 flex-none">
                  <img
                    className="absolute w-full h-full rounded-full object-cover"
                    src={`/images/${rest.logo}`}
                    alt={rest.name}
                  />
                </div>
                <div className="flex flex-col truncate">
                  <div className="text-base truncate">
                    {rest.name.slice(0, rest.name.indexOf(value))}
                    <span className="font-semibold">{value}</span>
                    {rest.name.slice(rest.name.indexOf(value) + value.length)}
                  </div>
                  <div className="text-gray-700 text-sm break-words">{rest.category}</div>
                </div>
              </div>
              </Link>
            ))}{" "}
            {meal.meal.map((meal) => (
              <Link to={`/search?q=${meal.name}`} key={meal.name} >
              <div className="flex px-4 py-2 truncate hover:bg-gray-300">
                {meal.name}
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
);

const SearchButton = ({ showInput }) => {
  return (
    <button
      onClick={showInput}
      className="focus:outline-none items-center flex"
    >
      <div className="px-2">
        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="font-semibold text-center">Search</div>
    </button>
  );
};

export default FoodSearchInput;
