import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Favorite } from "@material-ui/icons";

function Works(props) {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }
  // console.log(toggle);

  return (
    <div className="works-div">
      <img src={props.img} alt="" className="works-img" />
      <div className="overlay">
        <div className="fav-btn-div" onClick={handleClick}>
          {toggle ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon style={{ color: "grey" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Works;
