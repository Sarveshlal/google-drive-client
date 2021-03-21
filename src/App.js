import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Aclogin from "./Aclogin";
import Drive from "./drive";
import Forget from "./Forget";
import Login from "./Login";
import Registration from "./Registration";
import Reset from "./Reset";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/aclogin"
          render={() => {
            return <Aclogin />;
          }}
        ></Route>
        <Route
          path="/login"
          render={() => {
            return <Login />;
          }}
        ></Route>
        <Route
          path="/reset"
          render={() => {
            return <Reset />;
          }}
        ></Route>
        <Route
          path="/forget"
          render={() => {
            return <Forget />;
          }}
        ></Route>
        <Route
          path="/drive"
          render={() => {
            return <Drive />;
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
