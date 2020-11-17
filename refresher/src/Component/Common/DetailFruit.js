import React from 'react';

const DetailFruit = ({ showFruit, indexFruit }) => {
    console.log("get fruit ", showFruit[indexFruit].name)
    return (
        <div>
            <h1>{showFruit[indexFruit].name}</h1>
            <h2>{showFruit[indexFruit].color}</h2>
            <h2>{ showFruit[indexFruit].price}</h2>
        </div>
    )
}

export default DetailFruit