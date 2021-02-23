import React, { useEffect } from "react";

async function Forget() {
  // useEffect(() => {
  // let resp = await fetch("https://google-drive-server.herokuapp.com/forget", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(),
  // });
  // let data = await resp.json();
  // console.log(data);
  // }, []);
  return (
    <div className="login-div">
      <div className="row">
        <div className="logo"></div>
      </div>
      <div className="row center-align">
        <h5>Forget Password</h5>
      </div>
      <div className="input-field col s12">
        <input type="email" id="email" className="validate" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col s6">
          <a href="#">Login</a>
        </div>
        <div className="col s6 right-align">
          <a className="waves-effect waves-light btn">Send Email</a>
        </div>
      </div>
    </div>
  );
}
export default Forget;
