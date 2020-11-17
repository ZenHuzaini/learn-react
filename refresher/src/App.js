import React, { Component } from 'react';

import './App.css';

//components
import Fruit from "./Component/Fruit/Fruit";
import DetailFruit from "./Component/Common/DetailFruit";
import InsertFruit from "./Component/Common/InsertFruit"


class App extends Component {
  state = {
    fruits: [{ name: "anggur", price: 30, color: "dark" }, { name: "apel", price: 50, color: "red" }],
    getFruit: 0,
    show: true,
    helpVar: {
      name: "",
      price: "",
      color: ""
    }
  }

  updateFruits(event, index){

  }

  deleteFruit(event) {
    let b = this.state.fruits

    console.log("get b ",)
    
    const newData = b.splice(1, event)

    console.log("deleted b ", newData)

    this.setState({
      fruits: newData
    })
  }

  seeFruit(index) {
    this.setState({
      getFruit: index
    })
  }

  setHelpName(event) {
    let newState = this.state
    newState.helpVar.name = event.target.value

    this.setState(newState)
  }

  setHelpPrice(event) {
    let newState = this.state
    newState.helpVar.price = event.target.value

    this.setState(newState)
  }

  setHelpcolor(event) {
    console.log("get color ", event.target.value)
     let newState = this.state
    newState.helpVar.color = event.target.value

    this.setState(newState)
  }

  addFruits() {
    const newData = this.state.helpVar
    const getData = this.state.fruits;
    getData.push(newData)
    this.setState({
      fruits:getData
    })
    
    console.log("all data ", this.state.fruits)
  }

  render() {
    return (
      <div className="App">
        <InsertFruit
          addFruits={this.addFruits.bind(this)}
          setHelpcolor={this.setHelpcolor.bind(this)}
          setHelpPrice={this.setHelpPrice.bind(this)}
          setHelpName={this.setHelpName.bind(this)}
        ></InsertFruit>

        <Fruit fruits={this.state.fruits} seeDetail={this.seeFruit.bind(this)} deleteFruit={this.deleteFruit.bind(this)}></Fruit>
        
        <br></br>
        <hr></hr>
        <DetailFruit showFruit={this.state.fruits} indexFruit={this.state.getFruit}></DetailFruit>
      </div>
    );
  }
}

export default App;
