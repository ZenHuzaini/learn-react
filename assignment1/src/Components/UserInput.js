import React from "react";

const UserInput = ({ changeText, state }) => {
  return (
    <div className="UserInput">
      <input onChange={changeText} value={state} type="text" />
    </div>
  );
};

export default UserInput;
