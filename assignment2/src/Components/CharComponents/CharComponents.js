import React from "react";

const CharComponents = ({ getTheCharacter, removeChars }) => {
  return (
    <div className="charComponent">
      <h6 onClick={removeChars}>{getTheCharacter}</h6>
    </div>
  );
};

export default CharComponents;
