import React from "react";

function Buttons(props) {
  return (
      <input type="button" value={props.value} className={props.className} />
  );
}

export default Buttons;
