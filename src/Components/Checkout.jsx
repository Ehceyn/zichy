import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutFavs from "./CheckoutFavs";
import idMaker from "./idMaker";
import work3 from "../utilities/zichygraphs/butterfly.jpg";

function Checkout(props) {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-ad">
          <p>My Favorites</p>
        </div>

        {basket?.length === 0 ? (
          <div>
            <h2>Your Favorites Section Is Empty</h2>
            <p>
              You have no items in your basket. To add one or more favorite
              work(s) simply click on the 'heart' icon next to the item{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">My Favorite Designs</h2>

            {/* list out all the checkout products */}
            {basket.map((work, index) => {
              return (
                <CheckoutFavs
                  key={work.id}
                  id={work.id}
                  img={work.img}
                  category={work.category}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
