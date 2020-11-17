import React from "react";

const ValidationComponent = ({ getTextLength }) => {
  return (
    <div className="ValidationComponent">
      {getTextLength <= 5 ? (
        <p>need more character </p>
      ) : getTextLength >= 10 ? (
        <p>ok, too much character</p>
      ) : (
        <p>ok now</p>
      )}
    </div>
  );
};

export default ValidationComponent;
