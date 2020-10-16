import React from "react";
import Section from "./Section";
import Cities from "../Cities";
import Promo from './Promo'
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";

export const Main = () => {
  const { restaurants } = React.useContext(GlobalContext);

  return (
    <div className="px-20 subpixel-antialiased">
      <div className="mb-10">
        <Section
          title="Food Delivery in San Francisco Bay Area"
          data={restaurants}
          className="mb-20"
        />

        <div className="bg-gray-300 h-0.25"></div>
       
      </div>

      <div className="mb-10">
        <Section title="New on Uber Eats" 
        className="mb-20"
        />
        
        <div className="bg-gray-300 h-0.25"></div>
        
      </div>

      <Promo />

      {/* <div>
    <Section title="Pizza Delivery in San Francisco Bay Area" data={data}/>
        <div className="h-10"></div>
       
        <div className="h-10"></div>
        <div className="bg-gray-300 h-0.25"></div>
      
    </div> */}
      <div className="h-px my-10 bg-gray-300"> </div>
      <Cities />
    </div>
  );
};
