import React from "react";

const Animal = ({
  name,
  location,
  total,
  changeDesiredName,
  deleteElement,
}) => {
  return (
    <div>
      <p>
        Animal Name : {name}, Number in the forest : {total}, origin: {location}
      </p>
      <button onClick={deleteElement}>Delete this one?</button>
      <input onChange={changeDesiredName} value={name} type="text" />
    </div>
  );
};

export default Animal;
