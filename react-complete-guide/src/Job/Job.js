import React from "react";

const Job = (props) => {
  return (
    <div className="job">
      <h1>MyJob is.. </h1>
      <input onChange={props.changeJob} type="text" />
      <h2>My name is {props.person.person[0].name}</h2>
      <h2>My job is is {props.person.person[0].job}</h2>
    </div>
  );
};

export default Job;
