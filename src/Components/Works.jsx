import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Favorite, RemoveRedEye } from "@material-ui/icons";

function Works(props) {
  const [toggl, setToggl] = useState(false);

  function handleClick() {
    setToggl(!toggl);
  }
  

  return (
    <div className="works-div">
      <div
        onClick={() => {
          props.viewThisProject(props.id);
        }}
      >
        <img src={props.img} alt="" className="works-img" />
        <div className="overlay">
          <RemoveRedEye titleAccess="VIEW PROJECT" />
        </div>
      </div>

      <article className="work-info">
        <div className="category-div">
          <p>{props.category}</p>
          <div></div>
        </div>

        <div className="fav-btn" onClick={handleClick}>
          {toggl ? (
            <Favorite style={{ color: "black", cursor: "pointer" }} />
          ) : (
            <FavoriteBorderIcon
              style={{ color: "rgba(0, 0, 0, 0.726)", cursor: "pointer" }}
            />
          )}
        </div>
      </article>
    </div>
  );
}

export default Works;
