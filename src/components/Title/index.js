import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title mb-4">
    <h1 className="text-danger">Toym Traveller's Memory Game</h1>
    <h1 className="text-warning">Instructions: </h1><h4 className="text-light">
      Click picture only once per round. Cheers!</h4>
    <span className="text-light"> Score : {props.score}</span> <br />
    <span className="text-light">> Top Score : {props.topScore}</span>
  </div >
}
export default Title;
