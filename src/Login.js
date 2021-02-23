import React from "react";

async function Login() {
  // let resp = await fetch("http://localhost:8080/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(),
  // });
  // let data = await resp.json();
  // console.log(data);
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Log in</h5>
      </div>
      <div className="input-field col s12">
        <input type="email" id="email" className="validate" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field col s12">
        <input type="password" id="password" className="validate" />
        <label htmlFor="password">Password</label>
      </div>
      <div className="row">
        <div className="col s12">
          Not your computer? Use a Private Window to sign in.{" "}
          <a href="#">
            <b>Learn more</b>
          </a>
        </div>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col s6">
          <a href="#">Create Account</a>
        </div>
        <div className="col s6 right-align">
          <a className="waves-effect waves-light btn">Login</a>
        </div>
      </div>
    </div>
  );
}
export default Login;
