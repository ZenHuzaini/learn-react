import React from 'react';

const InsertFruit = ({ addFruits, setHelpcolor, setHelpPrice, setHelpName }) => {
    return (
        <div>
        <input onChange={setHelpName.bind(this)} type="text" placeholder="name of Fruiut"></input>
        <input onChange={setHelpPrice.bind(this) } type="number" placeholder="quantity of Fruiut"></input>
        <input onChange={setHelpcolor.bind(this) } type="text" placeholder="color of Fruiut"></input>
        <button onClick={() => { addFruits() }} >Save</button>
        </div>
    )
}

export default InsertFruit