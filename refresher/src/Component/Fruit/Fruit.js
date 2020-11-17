import React from "react";

const Fruit = ({ fruits, seeDetail, deleteFruit }) => {
    const getFruit = fruits.map((fruit, index) => {
        return (
            <div className="fruitLists" key={index}>
                <p >{fruit.name}</p>
                {/* //onclick must be array function because if not will be error, it should get function */}
                <button onClick={() => seeDetail(index)}>Detail</button> <button onClick={()=>{deleteFruit(index)}}>Delete</button>
            </div>
        )
    })

    return (
        <div>
            { getFruit}
        </div>
    )
}

export default Fruit