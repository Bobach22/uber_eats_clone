import axios from "axios";
import React, { useState } from "react";

const SearchInput = React.forwardRef((props, ref) => {
  

  return (
    <div className="flex-1 flex-col">
      <form className="flex" autoComplete="off">
        <input
          className={props.className}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          type="text"
          ref={ref}
          name={props.name}
          value={props.value || ""}
        />
        <div
          className={`${props.value ? "block" : "hidden"}   ml-2 text-center `}
        >
          <button
            className="cursor-pointer focus:outline-none active:outline-none font-normal text-gray-600"
            onClick={props.clearInput}
          >
            {" "}
            Clear
          </button>
          {props.children}
        </div>
      </form>
      
    </div>
  );
});

export default SearchInput;
