import React from "react";
import "./style.css";

function Alert(props) {
  return <div className="alert mt-5 p-5">
    <br /><h1 style={{ paddingTop: "100px" }}> You Lose!!</h1>
    <div className="btn btn-success replay mt-5" style={{ textShadow: "1px 1px black" }}
      onClick={props.handleAlert}>Play Again?!</div> <br /> <br /> <br />
  </div >;
}

export default Alert;
