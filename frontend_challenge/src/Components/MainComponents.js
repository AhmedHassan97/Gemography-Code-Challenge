import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/HomeComponent";

function Main() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={() => <Home></Home>}></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}
export default Main;
