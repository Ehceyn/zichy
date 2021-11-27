import React from "react";

function Title(props) {
  return (
    <div
      className={`title ${props.divClassName}`}
      name={props.divNameAttr}
      title={props.title}
      draggable="false"
    >
      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p className="section-title">{props.pName}</p>
        <div className="underline">
          <div>{/* <div><div className="underline"></div></div> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Title;
