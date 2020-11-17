import React, { Component } from "react";
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";
import CharComponents from "./Components/CharComponents/CharComponents";
import CharComponentsStyle from "./Components/CharComponents/CharComponent.css";

import "./App.css";

class App extends Component {
  state = {
    text: "",
  };

  updateText = (event) => {
    this.setState({ text: event.target.value });
  };

  getTextLenth = () => this.state.text.length;

  removeChars = (key) => {
    console.log(key);
    const { newCharacter } = this.charComponents();
    const getIndex = newCharacter.findIndex(({ id }) => id === key);

    newCharacter.splice(getIndex, 1);
    const getStringBack = newCharacter.map(({ theChar }) => theChar).join("");
    this.setState({ text: getStringBack });
  };

  charComponents = () => {
    const charComponent = {
      display: "inline",
      padding: "16px",
      "text-align": "center",
      margin: "16px",
      border: "1px solid black",
    };

    let charComponents = "";
    let getCharacter = [];
    getCharacter = this.state.text.split("");
    const newCharacter = getCharacter.map((item, index) => {
      return { id: index, theChar: item };
    });

    charComponents = (
      <div>
        {newCharacter.map(({ id, theChar }) => {
          return (
            <CharComponents
              style={charComponent}
              getTheCharacter={theChar}
              key={id}
              removeChars={() => this.removeChars(id)}
            ></CharComponents>
          );
        })}
      </div>
    );

    return { charComponents, newCharacter };
  };

  render() {
    const getTextLength = this.getTextLenth();

    return (
      <div className="App">
        <h1>Assignment2</h1>
        <input onChange={this.updateText} value={this.state.text} type="text" />
        <p>entered text length : {getTextLength}</p>
        <ValidationComponent getTextLength={getTextLength} />
        <hr />
        {this.charComponents().charComponents}
      </div>
    );
  }
}

export default App;
