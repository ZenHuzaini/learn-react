import React, { Component } from "react"; // React is needed to render the component. Component is also required to liad the class
import "./App.css";
import Person from "./Person/Person";
import Job from "./Job/Job";

//first react component
//the App component used int he index.js
class App extends Component {
  //the name is state becaus eit is called inside
  state = {
    person: [
      { name: "inyong marinyong", age: 28 },
      { name: "using state uus", age: 24 },
      { name: "using sate lukasz", age: 33 },
    ],
    oterState: "this is other state",
  };

  switchNamehandler = (passTheArgument) => {
    console.log("was clicked!");
    //DON't DO THIS : this.state.person[0].name = "zen huzaini";

    //special method extended from Component
    this.setState({
      person: [
        { name: passTheArgument, age: 24 },
        { name: "lukasz bujlo ", age: 33 },
      ],
    });
  };

  newNameChanger = (e) => {
    this.setState({
      person: [
        { name: "Zen", age: 24, job: e.target.value },
        { name: "lukasz bujlo ", age: 33, job: "team leader" },
      ],
    });
  };
  //method must return something htm
  render() {
    //create inline style,
    //it is like object in JS
    const styleInlineLikeThis = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    //METHOD 1 ----------
    return (
      <div className="App">
        <h1>BIndinf Get inpu value</h1>
        <div className="getInputValue">
          <input onChange={this.newNameChanger.bind(this)} type="text" />
          <h1>The input would be {this.state.person[0].name}</h1>
          <Job changeJob={this.newNameChanger} person={this.state}></Job>
        </div>
        <hr />
        <h1> Hi I am react app - Props, function, accessing </h1>
        <p> I hope this one will work </p>
        {/* <Person name="zen" age="24" /> */}
        {/* <Person name="lukasz" age="33" /> */}
        {/* <Person name="inyong" age="36"> */}
        {/* my hobby is gosipin orang :) */}
        {/* </Person> */}
        <br />
        <hr />
        <button
          style={styleInlineLikeThis}
          onClick={this.switchNamehandler.bind(
            this,
            "bagaimana caranya passTheArgument pakai satu  contoh"
          )}
        >
          Switch Name pakai parameter{" "}
        </button>
        <button
          onClick={() =>
            this.switchNamehandler(
              "bagaimana caranya passTheArgument pakai arrow function, but arrow functionn will be inefficient"
            )
          }
        >
          Switch Name pakai parameter dan arrow function{" "}
        </button>
        <Person
          clickUbah={this.switchNamehandler.bind(this, "from here")}
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        >
          my hobby is gosipin orang mulu aja :)
        </Person>
        <Person
          onClick={this.switchNamehandler.bind(
            this,
            "change my name with bind is better"
          )}
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        >
          my hobby is gosipin orang mulu aja :)
        </Person>
      </div>
    ); //we use className, not class because it is used in JS
    //we can not add something or example <h1> after the div, because wee need to put everything into a one root element

    //METHOD2 ------------
    //WE can also use the from the React class
    //React.createElement('div', configuration object (we can put null), 'h1', 'Hi, my name is Zen')
    //we hope to render <div><h1>hi</h1></div>, but cannot do that, because later the <h1> will be seen as a text
    //So, here is the process.. so we have to do this nesting
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement(
    //     "h1",
    //     null,
    //     React.createElement("i", null, "bismillah bisa")
    //   )
    // );
    //a bit complicated isn't it but okay // xd that's why we don't use this. but we use JSX
  }
}

export default App;
