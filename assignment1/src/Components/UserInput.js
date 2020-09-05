import React from "react";
import UserInputCss from "./UserInput.css";

const UserInput = ({ changeText, state }) => {
  return (
    <div className="UserInput">
      <input
        style={UserInputCss}
        onChange={changeText}
        value={state}
        type="text"
      />
    </div>
  );
};

export default UserInput;
