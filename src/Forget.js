import React, { useEffect, useState } from "react";

function Forget() {
  let [fEmail, setfEmail] = useState("");
  async function onclickhandle() {
    let forget = { email: fEmail };
    let resp = await fetch("https://google-drive-server.herokuapp.com/forget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forget),
    });
    let data = await resp.json();
    console.log(data);
    setfEmail("");
    alert("Email sent for Resetting Password");
  }
  // };
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Forget Password</h5>
      </div>
      <div className="input-field col s12">
        <input
          type="email"
          id="email"
          className="validate"
          value={fEmail}
          onChange={(event) => setfEmail(event.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col s6">
          <a href="https://gdrive-client.netlify.app/login">Login</a>
        </div>
        <div className="col s6 right-align">
          <a className="waves-effect waves-light btn" onClick={onclickhandle}>
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
export default Forget;
