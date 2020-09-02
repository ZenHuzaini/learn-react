import React, { useState } from "react"; // React is needed to render the component. Component is also required to liad the class
//useState to allow use to manage state in a cfuctiona compoennt
import "./App.css";
import Person from "./Person/Person";

//if we use hooks, the we dont use class but use function like below, and insetad of importing Component, we import useState
//make a functional component
const app = (props) => {
  //this is the hooks, functional component
  //use state returns two array element
  //firs elemet is initial, second is function that will allow us to update the state
  //we can name the constatnt, we crate the name of the function
  const [personState, setPersonState] = useState({
    person: [
      { name: "inyong marinyong", age: 28 },
      { name: "using state uus", age: 24 },
      { name: "using sate lukasz", age: 33 },
    ],
    otherState: "this is other state",
  });

  //the other way, we can separate the otherstate attribute
  const [otherstate] = useState("this is other state");

  const switchNamehandler = () => {
    console.log("was clicked!");

    //se person state must include al the previous data. if not all data will be overwritten with this. therefore we needd to copy all of the data
    setPersonState({
      person: [
        {
          name: "zen huzaini",
          age: 24,
          message: "something is here as the paragraph",
        },
        { name: "lukasz bujlo ", age: 33 },
      ],
      otherState: personState.otherState,
    });
  };

  return (
    <div className="App">
      <h1> Hi I am react app </h1>
      <p> I hope this one will work </p>
      <button onClick={switchNamehandler}>Switch Name </button>
      <Person name={personState.person[0].name} age={personState.person[0].age}>
        my hobby is gosipin orang mulu aja :)
      </Person>
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
        iWillClickThis={switc}
      >
        my hobby is gosipin orang mulu aja :)
      </Person>
    </div>
  );
};

export default app;
