import React from "react";
import "../../style/tailwind.output.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../../routes/home/Home";
import Card from "../Grid/Card";
// import Location from "../../routes/Location";
import Restaurant from "../../routes/restaurant/Restaurant";
// import Grid from "../../Grid"
import NearMe from '../../routes/near-me/NearMe'
import { GlobalContextProvider} from "../../context/GlobalContext";

export default function App() {
  return (
    <GlobalContextProvider>
      <Router>
          <Switch>
            <Route path="/card">
              <Card />
            </Route>
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </GlobalContextProvider>
  );
}


