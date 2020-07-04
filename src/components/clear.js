import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

function Clear(props) {
  function handleClear(e) {
    e.preventDefault();
    console.log("hello clearing!!");
    props.handleClear();
  }

  return (
    <div className="eraser">
      <FontAwesomeIcon
        title="erase"
        icon={faBackspace}
        className="fa-icon"
        onClick={handleClear}
      />
    </div>
  );
}

export default Clear;
