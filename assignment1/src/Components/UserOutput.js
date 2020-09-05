import React from "react";

const UserOutput = ({ stateData, intendedChange }) => {
  //   console.log(stateData);
  //   console.log(stateData.data[0].paragraph);
  return (
    <div className="UserOutput">
      <p onClick={intendedChange}>{stateData} </p>
    </div>
  );
};

export default UserOutput;
