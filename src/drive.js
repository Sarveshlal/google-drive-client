import React, { useState } from "react";
import "./drive.css";
function Drive() {
  const [add, setAdd] = useState(false);
  const click = () => {
    setAdd(true);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img src="https://img.icons8.com/android/48/000000/file.png" />
          <br />
          <a href="https://gdriveapp.s3.ap-south-1.amazonaws.com/bajaj-pulsar-150.jpg">
            Image
          </a>
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={click}
          style={{
            border: "1px ",
            borderRadius: "50%",
            fontSize: "30px",
            height: "60px",
            width: "60px",
          }}
        >
          +
        </button>
        {add ? (
          <div className="input-group">
            <label
              htmlFor="name"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              File name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter filename"
              id="name"
              style={{ width: "400px" }}
            />
            <label htmlFor="link">File Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter the File Link"
              id="link"
            />
          </div>
        ) : (
          console.log(add)
        )}
      </div>
    </div>
  );
}
export default Drive;
