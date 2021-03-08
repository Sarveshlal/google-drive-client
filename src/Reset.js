import React, { useState } from "react";

function Reset() {
  let [passw, setpassw] = useState("");
  let [npassw, setnpassw] = useState("");
  async function onclickhandle() {
    let pass = { password: passw };
    let resp = await fetch("https://google-drive-server.herokuapp.com/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pass),
    });
    let data = await resp.json();
    console.log(data);
    setpassw("");
    setnpassw("");
  }
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Enter New Password</h5>
      </div>
      <div className="input-field col s12">
        <input
          type="password"
          id="password"
          className="validate"
          value={passw}
          onChange={(event) => setpassw(event.target.value)}
        />
        <label htmlFor="password">New Password</label>
      </div>
      <div className="input-field col s12">
        <input
          type="password"
          id="password"
          className="validate"
          value={npassw}
          onChange={(event) => setnpassw(event.target.value)}
        />
        <label htmlFor="password">Re-Enter New Password</label>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col s6 right-align">
          <a
            className="waves-effect waves-light btn"
            onClick={() => {
              if (passw == npassw) onclickhandle;
            }}
          >
            Reset Password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reset;
