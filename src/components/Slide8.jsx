import React from "react";
import { useState } from "react";
import "./slide8.css";

function Slide8() {
  const [buttonText, setButtonText] = useState("Subscribe");

  const handleClick = () => {
    setButtonText("Subscribe"); // Change button text on click
  };

  return (
    <div className="Slide8">
      <header className="Slide8-header">
        <div className="krishisetu-container8">
          <div className="main-circle8"></div>
          <h1 className="krishisetu8">Krishisetu</h1>
        </div>

        <h1 className="heading8">Choose your Subscription Plan</h1>
        <div className="rectangle-container8">
          <div className="rectangle">
            <div className="circle"></div>
            <h2 className="detail1">Basic</h2>
            <h2 className="detail2">10$/month</h2>
            <div className="line"></div>
            <button className="subscribe" onClick={handleClick}>
              {buttonText}
            </button>
          </div>
          <div className="rectangle">
            <div className="circle"></div>
            <h2 className="detail1">Advance</h2>
            <h2 className="detail2">90$/month</h2>
            <div className="line"></div>
            <button className="subscribe" onClick={handleClick}>
              {buttonText}
            </button>
          </div>
          <div className="rectangle">
            <div className="circle"></div>
            <h2 className="detail1">Wholesale</h2>
            <h2 className="detail2">30$/month</h2>
            <div className="line"></div>
            <button className="subscribe" onClick={handleClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Slide8;
