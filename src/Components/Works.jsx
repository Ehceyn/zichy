import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Favorite, RemoveRedEye } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import idMaker from "./idMaker";

function Works(props) {
  const [toggl, setToggl] = useState(false);
  const [icon, setIcon] = useState(<FavoriteBorderIcon />);

  function handleClick() {
    setToggl(!toggl);
    if (!toggl) {
      setIcon(<Favorite style={{ color: "black", cursor: "pointer" }} />);
      addToBasket();
    } else {
      setIcon(
        <FavoriteBorderIcon
          style={{ color: "rgba(0, 0, 0, 0.726)", cursor: "pointer" }}
        />
      );
      removeFromBasket();
    }
  }
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        img: props.img,
        category: props.category,
      },
    });
    console.log(dispatch);
  };
  const removeFromBasket = () => {
    // passes the id to the reducer to remove the id from basket and return the state and the remaining basket items

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

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

        <div className="fav-btn btns" onClick={handleClick}>
          {icon}
        </div>
      </article>
    </div>
  );
}

export default Works;
