import React, { useState } from "react";
import { useHistory } from "react-router";
function Reset() {
  const history = useHistory();
  let [passw, setpassw] = useState("");
  // let [npassw, setnpassw] = useState("");
  function onclickhandle() {
    let pass = { password: passw };
    fetch("https://g-drive-server.herokuapp.com/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pass),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        if (resp.message == "Password Updated") {
          setpassw("");
          history.push("/drive");
        } else alert(resp.message);
      });
    // setnpassw("");
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
      {/* <div className="input-field col s12">
        <input
          type="password"
          id="password"
          className="validate"
          value={npassw}
          onChange={(event) => setnpassw(event.target.value)}
        />
        <label htmlFor="password">Re-Enter New Password</label>
      </div> */}
      <div className="row"></div>
      <div className="row">
        <div className="col s6 right-align">
          <a className="waves-effect waves-light btn" onClick={onclickhandle}>
            Reset Password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reset;
