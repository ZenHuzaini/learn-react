import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    data: [{ paragraph: "default paragraph" }, { paragraph: "lala paragraph" }],
  };

  intendedChange = () => {
    this.setState({
      data: [
        { paragraph: "default oh paragraph" },
        { paragraph: "lala paragraph" },
      ],
    });
  };

  changeText = (event) => {
    this.setState({
      data: [
        { paragraph: event.target.value },
        { paragraph: "lala paragraph" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput
          changeText={this.changeText}
          state={this.state.data[0].paragraph}
        ></UserInput>
        {/* output */}
        <UserOutput
          intendedChange={this.intendedChange}
          stateData={this.state.data[0].paragraph}
        ></UserOutput>
        <UserOutput stateData={this.state.data[1].paragraph}></UserOutput>
      </div>
    );
  }
}

export default App;
