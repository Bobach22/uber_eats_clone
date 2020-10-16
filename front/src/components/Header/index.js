import React, { useState, useEffect } from "react";
import AddressForm from "../Input/AddressForm";
import FoodSearchForm from "../Input/FoodSearchForm";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [isRegister, setIsRegister] = useState(false);
  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  const [fixed, setFixed] = useState("");
  const [style, setStyle] = useState({});
  const [scrollPosition, SetScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    SetScrollPosition(position);
  };
  const [formData, setFormData] = useState({
    address:''
  });

  const handleInput = (e) => {
    e.persist();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  const refAddress = React.createRef();
  // const refFoodSearch = React.createRef();

  const clearInput = (ref) => {
    console.log(ref.current.name);

    setFormData((prevState) => ({ ...prevState, [ref.current.name]: "" }));
    ref.current.focus();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition) {
      setFixed("fixed z-10 left-0 right-0 w-full");
      setStyle({ boxShadow: "rgb(226, 226, 226) 0px -2px 0px inset" });
    }
    return () => {
      setFixed("");
      setStyle({});
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`${fixed ? "h-20 " : ""}`}>
      <div className={`${fixed} w-full`}>
        <div
          className="bg-white w-full px-4 lg:px-20 header-width"
          style={style}
        >
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-none">
              <img src="/images/uber.svg" className="h-6" alt="Uber logo" />
            </Link>
            <div className="flex md:flex-none w-16"></div>
            <div className="relative flex-grow" style={{ maxWidth: "540px" }}>
              {scrollPosition > 300 && (
                <AddressForm
                  handleChange={handleInput}
                  handleSubmit={handleSubmit}
                  value={formData["address"]}
                  ref={refAddress}
                  clearInput={(e) => {
                    e.preventDefault();
                    clearInput(refAddress);
                  }}
                />
              )}

              <div
                className="flex-grow bg-white absolute inset-0"
                style={{
                  transition: "transform 500ms",
                  transformOrigin: "right",
                  transform: `${
                    scrollPosition > 300 ? "scaleX(0)" : "scaleX(1)"
                  }`,
                  zIndex: 3,
                }}
              ></div>
            </div>
            <div className="flex-grow w-8"></div>
            {/* <div className="search ml-auto mr-16">
              
                <FoodSearchForm handleChange={handleInput} handleSubmit={handleSubmit} value={formData['food']} ref={refFoodSearch} clearInput={e=>{e.preventDefault();clearInput(refFoodSearch)}}/>
             
            </div> */}

            <div className="text-center">
              <a
                className="font-semibold whitespace-no-wrap"
                href="#reg"
                onClick={handleRegister}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
      {isRegister && <Register />}
    </div>
  );
};

export default Header;
