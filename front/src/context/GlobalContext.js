import React from "react";
// import Appreducer from "./Appreducer";
import { UseApi } from "../api/UseApi";

const API_URL = "http://localhost:8000/api/restaurants";

const initialState = {
  restaurants: [],
};

export const GlobalContext = React.createContext(null);

export const GlobalContextProvider = ({ children }) => {
//   const [state,dispatch]=React.useReducer(Appreducer.initialState);
    const [state, setState] = React.useState(initialState.restaurants);

    React.useEffect(() => {

    const getData = async () => {
      const data = await UseApi(API_URL);
        if(data){
            console.log(data);
        setState(data);
      }
    };

    getData();
    
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        restaurants: state,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
