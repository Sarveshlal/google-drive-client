import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function Registration() {
  const history = useHistory();
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function onclickhandle() {
    let form = {
      email: email,
      firstname: fname,
      lastname: lname,
      password: password,
      status: "inactive",
    };
    fetch("https://google-drive-server.herokuapp.com/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        if (resp.message == "record Inserted") {
          setFname("");
          setLname("");
          setEmail("");
          setPassword("");
          history.push("/login");
          alert("please check your email to activate your account");
        }
      });
  }
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Sign in</h5>
      </div>
      <div className="input-field col s12">
        <input
          type="text"
          id="first_name"
          value={fname}
          className="validate"
          onChange={(event) => setFname(event.target.value)}
          required
        />
        <label htmlFor="first_name">First name</label>
      </div>
      <div className="input-field col s12">
        <input
          type="text"
          id="last_name"
          value={lname}
          className="validate"
          onChange={(event) => setLname(event.target.value)}
          required
        />
        <label htmlFor="last_name">Last name</label>
      </div>
      <div className="input-field col s12">
        <input
          type="email"
          id="email"
          value={email}
          className="validate"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field col s12">
        <input
          type="password"
          id="password"
          value={password}
          className="validate"
          onChange={(event) => setPassword(event.target.value)}
        />
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
          <a href="https://gdrive-client.netlify.app/login">Login</a>
        </div>
        <div className="col s6 right-align">
          <a className="waves-effect waves-light btn" onClick={onclickhandle}>
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
export default Registration;
