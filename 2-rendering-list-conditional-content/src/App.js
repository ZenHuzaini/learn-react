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
      { id: 1, name: "elephant", location: "africa", total: 34 },
      { id: 2, name: "Hawk", location: "Asia", total: 80 },
      { id: 3, name: "kangooro", location: "Australia", total: 4 },
    ],
    showAnimals: true,
  };

  toggleAnimalHandler = () => {
    const shouldShow = this.state.showAnimals;
    //the other state content will not be deleted only this showAnimal attribute
    this.setState({ showAnimals: !shouldShow });
  };

  changeDesiredName = (event, id) => {
    const animalIndex = this.state.animal.findIndex((el) => {
      return el.id === id;
    });

    //we pas the object
    const getAnimal = { ...this.state.animal[animalIndex] };
    getAnimal.name = event.target.value;

    //get copy of the state
    //so we don't have to mutate the state
    const animals = [...this.state.animal];
    animals[animalIndex] = getAnimal;

    //pass the copy state
    this.setState({
      animal: animals,
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

  deleteElement = (animalIndex) => {
    // const animal = this.state.animal; not a good way, we need to copy the state
    const animal = [...this.state.animal];
    animal.splice(animalIndex, 1); //to delete
    //Array and object are refferemce type. so we didn't assign new value tot he constant. that's why we can do alter data
    this.setState({ animal });
  };

  render() {
    //or we can use somethi like this for condition, more optimal:
    let animalsHelpvar = null;
    if (this.state.showAnimals) {
      //then we can put the jsx content here
      animalsHelpvar = (
        <div>
          <h1>Must show things from using outside if using map</h1>
          {/* if we wasnt toreturn a list of array, we must convert the array into a jsx using map and do like this */}
          {this.state.animal.map(({ name, location, total, id }, index) => {
            return (
              <Animal
                key={id}
                name={name}
                changeDesiredName={(event) => this.changeDesiredName(event, id)}
                // wwe can use ()=> this.ss(ss) for nput or we can use this.dd.bind(this, sss)
                deleteElement={() => this.deleteElement(index)}
                location={location}
                total={total}
              ></Animal>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Rendering List and Conditional Content</h1>
        {/* <div className="AnimalList">
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
        </div> */}
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
