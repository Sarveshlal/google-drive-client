import React, { useState } from "react";
function Login() {
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");
  async function loggin() {
    let log = { email: email, password: pass };
    let resp = await fetch(
      "https://google-drive-server.herokuapp.com/aclogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
      }
    );
    let data = await resp.json();
    console.log(data);
  }
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Log in</h5>
      </div>
      <div className="input-field col s12">
        <input
          type="email"
          id="email"
          className="validate"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field col s12">
        <input
          type="password"
          id="password"
          className="validate"
          value={pass}
          onChange={(event) => setpass(event.target.value)}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="row">
        <div className="col s12">
          Not your computer? Use a Private Window to sign in.
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
          <a className="waves-effect waves-light btn" onClick={loggin}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
