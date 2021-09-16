import React from "react";

function Filter(props) {
  return (
    <li
      onClick={() => {
        props.onFilterWork(props.category);
      }}
    >
      <a href={props.href}>{props.category}</a>
    </li>
  );
}

export default Filter;
