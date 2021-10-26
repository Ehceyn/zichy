import React from "react";
import "./contactFavs.css";
import { useStateValue } from "../StateProvider";
import { DeleteOutline } from "@material-ui/icons";

function ContactFavs(props) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // passes the id to the reducer to remove the id from basket and return the state and the remaining basket items

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="contactFav-div">
      <div
        className="cancel-contactFav"
        onClick={() => {
          removeFromBasket();
          props.onRemoveFav(props.id);
        }}
      >
        <DeleteOutline
          style={{ width: "15px", height: "15px", color: "grey" }}
        />
      </div>

      <img
        src={"http://localhost:5000/" + props.img}
        alt=""
        className="contactFav-img"
      />
    </div>
  );
}

export default ContactFavs;
