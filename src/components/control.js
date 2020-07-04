import React from "react";
import Color from "./color";
import Eraser from "../components/eraser";
import Clear from "../components/clear";
import "../css/control.css";

function Controls(props) {
  return (
    <div className="controls">
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
      <Clear handleClear={props.handleClear} />
    </div>
  );
}

export default Controls;
