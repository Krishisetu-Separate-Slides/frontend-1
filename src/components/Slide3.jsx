import React from "react";
import "./Slide3.css";

function Slide3() {
  return (
    <div className="Slide3">
      <header className="Slide3-header">
        <div className="krishisetu-container">
          <div className="main-circle"></div>
          <h1 className="krishisetu">Krishisetu</h1>
        </div>

        <h1 className="heading">Sign up (Buyers)</h1>
        <div className="rectangle1" placeholder="Full Name">
          <input
            type="text"
            className="input-placeholder"
            placeholder="Full Name"
          />
        </div>
        <div className="small-rectangle-container">
          <div className="rectangle2">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Mobile No."
            />
          </div>
          <div className="rectangle2">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="small-rectangle-container">
          <div className="rectangle2">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Location"
            />
          </div>
          <div className="rectangle2">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Buyer Type"
            />
          </div>
        </div>
        <div className="small-rectangle-container">
          <div className="rectangle2">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Business Name"
            />
          </div>
          <div className="rectangle2">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Preffered Crops"
            />
          </div>
        </div>
        <div className="rectangle1">
          <input
            type="text"
            className="input-placeholder"
            placeholder="Password"
          />
        </div>
        <div className="rectangle3">
          <input
            type="text"
            className="rectangle3-input"
            placeholder="Register"
          />
        </div>
        <h2 className="account">Have an account? Login</h2>
      </header>
    </div>
  );
}

export default Slide3;
