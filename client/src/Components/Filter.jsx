import React from "react";

function Filter(props) {
  return (
    <li onClick={props.onFilterWork}>
      <button value={props.category} className={props.className}>
        {props.category}
      </button>
      <div className="btnBorder"></div>
    </li>
  );
}

export default Filter;
