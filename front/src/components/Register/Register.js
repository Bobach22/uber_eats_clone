import React from "react";
import axios from "axios";
import {Modal} from 'react-modal';

const Register = () => {
  const [userData, setUserData] = React.useState({});

  const [agree, setAgree] = React.useState(false);
  const [isSent,setIsSent]=React.useState(false);
  const handleAgree = () => {
    setAgree(!agree);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setUserData({
      [e.target.name]: e.target.value,
    });
  };

  const sendUserData = (e) => {
    e.preventDefault();
    if (agree) {
      if (userData) {
        axios
          .post("http://localhost:8000/sms", userData,{action:isSent?'otp':'send_otp'})
          .then((res) => {
              console.log(res)
              setIsSent(!isSent);
            })
          .catch((err) => console.log(err));
      }
    } else {
      alert("Please read the terms and privacy of using this site");
    }
  };

  return (
    <form className="max-w-sm shadow-md p-4 flex flex-col absolute  -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20 self-center bg-white">
      <div className="text-xl font-semibold">Register</div>

   {isSent?
       <div className="flex-1 flex-col">
         <input
          className="active:bg-white my-3 w-full shadow-input focus:shadow-input-focus focus:outline-none"
          placeholder="Enter your verification code"
          name="number"
          onChange={handleInput} />
      </div>
      :(<>
      <div className="flex-1 flex-col">
        
       <input
          className="active:bg-white my-3 w-full shadow-input focus:shadow-input-focus focus:outline-none"
          placeholder="Name"
          name="name"
          onChange={handleInput}
        />
        <input
          className="active:bg-white my-3 w-full shadow-input focus:shadow-input-focus focus:outline-none"
          placeholder="Number"
          name="number"
          onChange={handleInput}
        /> 
      </div>
      <div className="flex  items-center break-words">
        <input
          className="m-1"
          type="checkbox"
          checked={`${agree ? agree : ""}`}
          onChange={handleAgree}
        />
        <p className="flex-1">
          By registering you agree to the terms and conditions of using this
          site
        </p>
      </div>
      </>)}
      <button
        type="submit"
        className={`py-2 px-20 my-3 max-w-sm focus:outline-none  ${
          agree ? "bg-gray-900 text-white" : "bg-gray-400 cursor-default"
        }`}
        onClick={sendUserData}
      >
        Register
      </button>
    </form>
  );
};

export default Register;
