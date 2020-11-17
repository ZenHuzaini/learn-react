import React from "react"; // we don't need component ince we don't meed to extend a class
import "./Person.css";
//component is just a fuction that will only return the jsx
//functional component. This is the best practice
const person = ({ clickUbah, name, age, children }) => {
  //props is a object that contains all the argument or the value in the name for example
  //we can use destruction instead. children is a special attribute within the  objcet to acces something not attriute
  return (
    <div className="Person">
      <h2 onClick={clickUbah}>
        the person name is {name} - {Math.floor(Math.random() * 24)}, but the
        real age is {age}
      </h2>
      <p>{children}</p>
    </div>
  );
};

export default person;
