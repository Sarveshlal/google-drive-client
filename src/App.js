import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forget from "./Forget";
import Login from "./Login";
import Registration from "./Registration";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          render={() => {
            return <Login />;
          }}
        ></Route>
        <Route
          path="/forget"
          render={() => {
            return <Forget />;
          }}
        ></Route>
        <Route
          path="/"
          render={() => {
            return <Registration />;
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
