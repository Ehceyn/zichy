import React from "react";
import { useStateValue } from "../StateProvider";
import { RemoveRedEye } from "@material-ui/icons";

function CheckoutFavs(props) {
  const [{ basket }, dispatch] = useStateValue();

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
      </article>

      <button onClick={removeFromBasket}>Remove from basket</button>
    </div>
  );
}

export default CheckoutFavs;
