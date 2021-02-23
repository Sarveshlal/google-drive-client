import React from "react";

function Reset() {
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Enter New Password</h5>
      </div>
      <div className="input-field col s12">
        <input type="password" id="password" className="validate" />
        <label htmlFor="password">Password</label>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col s6 right-align">
          <a className="waves-effect waves-light btn">Reset Password</a>
        </div>
      </div>
    </div>
  );
}

export default Reset;
