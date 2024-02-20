import React from "react";
import "../css/overlay.css";

function AgeConfirmationOverlay({ onConfirm }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h1>Before entering</h1>
        <h2 className="big">new worlds of play</h2>
        <br />
        <h3>Please Verify you age</h3>
        <br />
        <button className="ageButton" onClick={onConfirm}>
          Yes, I am over 18
        </button>
      </div>
    </div>
  );
}

export default AgeConfirmationOverlay;
