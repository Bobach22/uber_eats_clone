import React from "react";
// import Appreducer from "./Appreducer";
import { UseApi } from "../api/UseApi";

const API_URL = "http://localhost:8000/api/restaurants/";

export const RestaurantContext = React.createContext(null);

export const RestaurantContextProvider = ({ restaurantId, children }) => {
  // const [state,dispatch]=React.useReducer(Appreducer.initialState);
  const [state, setState] = React.useState({
      meta:'',
      menu:[]
  });

  React.useEffect( () => {
    const get=async ()=>{
    const data =await UseApi(`${API_URL}${restaurantId}`);
    if (data) {
      const {id,name,phone,category,review_count,rating,logo,delivery_fee,delivery_time_range,promotion,address,lng,lat,city,menus}=data
      setState({meta:{id,name,phone,category,review_count,rating,
                      logo,delivery_fee,delivery_time_range,promotion,
                      address,lng,lat,city,menu:menus},
                menu:menus      
              });
            }console.log(data);
          }
    get();

    
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        meta: state.meta,
        menu:state.menu
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
