import React from "react";

function Title(props) {
  return (
    <div
      className={props.divClassName}
      name={props.divNameAttr}
      title={props.title}
      draggable="false"
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <p className="section-title">{props.pName}</p>
    </div>
  );
}

export default Title;
