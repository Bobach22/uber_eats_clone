import React from "react";
import SearchInput from "./SearchInput";

const AddressForm = React.forwardRef(({ handleChange,clearInput,value},ref) => {
  return (
    <div className="flex relative items-center bg-bg-input w-full shadow-input focus-within:shadow-input-focus px-3 py-3">
      <svg
        className="flex-none location-marker w-6 h-6  m-0"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <div className="flex-shrink-0 w-2"></div>
      <SearchInput
       clearInput={clearInput}
        ref={ref}
        value={value}
        handleChange={handleChange}
        placeholder="What is your address?"
        className="outline-none bg-transparent w-full"
        name="address"
      />
    </div>
  );
});
export default AddressForm;
