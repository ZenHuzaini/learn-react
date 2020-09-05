import React, { Component } from "react";
import "./App.css";
import Animal from "./Animal/Animal";

const animals = [
  "birds",
  "girrafe",
  "snake",
  "dragon",
  "ant",
  "cat",
  "pokemon",
];

const location = [
  "house",
  "kitchen",
  "bathroom",
  "living room",
  "garden",
  "roof",
  "bedroom",
];

class App extends Component {
  state = {
    animal: [
      { name: "elephant", location: "africa", total: 34 },
      { name: "Hawk", location: "Asia", total: 80 },
      { name: "kangooro", location: "Australia", total: 4 },
    ],
    showAnimals: true,
  };

  toggleAnimalHandler = () => {
    const shouldShow = this.state.showAnimals;
    //the other state content will not be deleted only this showAnimal attribute
    this.setState({ showAnimals: !shouldShow });
  };

  changeDesiredName = (event) => {
    this.setState({
      animal: [
        {
          name: event.target.value,
          location: location[Math.floor(Math.random() * Math.floor(7))],
          total: Math.random(),
        },
        {
          name: event.target.value,
          location: location[Math.floor(Math.random() * Math.floor(7))],
          total: Math.random(),
        },
        {
          name: animals[Math.floor(Math.random() * Math.floor(7))],
          location: location[Math.floor(Math.random() * Math.floor(7))],
          total: Math.random(),
        },
      ],
      showAnimals: false,
    });
  };

  shuffleAnimal = () => {
    this.setState({
      animal: [
        {
          name: animals[Math.floor(Math.random() * Math.floor(7))],
          location: location[Math.floor(Math.random() * Math.floor(7))],
          total: Math.random(),
        },
        {
          name: animals[Math.floor(Math.random() * Math.floor(7))],
          location: location[Math.floor(Math.random() * Math.floor(7))],
          total: Math.random(),
        },
        {
          name: animals[Math.floor(Math.random() * Math.floor(7))],
          location: location[Math.floor(Math.random() * Math.floor(7))],
          total: Math.random(),
        },
      ],
      showAnimals: false,
    });
  };

  render() {
    //or we can use somethi like this for condition, more optimal:
    let animalsHelpvar = null;
    if (this.state.showAnimals) {
      //then we can put the jsx content here
      animalsHelpvar = (
        <div>
          <h1>Must show things from using outside if</h1>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Rendering List and Conditional Content</h1>
        <div className="AnimalList">
          <Animal
            changeDesiredName={this.changeDesiredName}
            name={this.state.animal[0].name}
            location={this.state.animal[0].location}
            total={this.state.animal[0].total}
          ></Animal>
          <Animal
            changeDesiredName={this.changeDesiredName}
            name={this.state.animal[1].name}
            location={this.state.animal[1].location}
            total={this.state.animal[1].total}
          ></Animal>
          <Animal
            changeDesiredName={this.changeDesiredName}
            name={this.state.animal[2].name}
            location={this.state.animal[2].location}
            total={this.state.animal[2].total}
          ></Animal>
        </div>
        <button onClick={this.shuffleAnimal}>Shuffle</button>
        <hr />
        <h1>conditional, add calibrac</h1>
        <button onClick={this.toggleAnimalHandler}>Hide and show</button>
        {/* in JSX only ternanry for condiiton, not for whole if, if we wanna use if the we need to make vars */}
        {this.state.showAnimals ? (
          <div>
            <h1>Must show things</h1>
          </div>
        ) : null}

        {/* call the variable */}
        {animalsHelpvar}
      </div>
    );
  }
}

export default App;
