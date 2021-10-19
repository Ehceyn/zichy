import React from "react";

function Filter(props) {
  return (
    <li>
      <button onClick={props.onFilterWork} value={props.category}>
        {props.category}
      </button>
    </li>
  );
}

export default Filter;
