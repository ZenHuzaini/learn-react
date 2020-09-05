import React from "react";

const Animal = ({ name, location, total, changeDesiredName }) => {
  return (
    <div>
      <p>
        Animal Name : {name}, Number in the forest : {total}, origin: {location}
      </p>
      <input onChange={changeDesiredName} value={name} type="text" />
    </div>
  );
};

export default Animal;
