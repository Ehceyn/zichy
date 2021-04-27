import React from "react";

function Buttons(props) {
  return (
    <form action="">
      <input type="button" value={props.value} className={props.className} />
    </form>
  );
}

export default Buttons;
