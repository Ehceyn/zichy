import React, { useState } from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutFavs from "./CheckoutFavs";
import MyFavNavbar from "./MyFavNavbar";
import idMaker from "./idMaker";
import work3 from "../utilities/zichygraphs/butterfly.jpg";
import Contact from "./Contact";

function Checkout(props) {
  const [{ basket }] = useStateValue();
  const [toggl, setToggl] = useState(false);
  const [contactDiv, setContactDiv] = useState();

  function displayContactDiv() {
    setContactDiv(
      <Contact
        containerClass="checkout-contactDiv"
        container2="checkout-contactDiv2"
        close="Close"
        closeClass="checkout-contact-close-btn "
        onClose={Close}
      />
    );
  }
  function Close() {
    setContactDiv();
  }

  return (
    <>
      <MyFavNavbar onDisplayContactDiv={displayContactDiv} />
      <div className="main-contactDiv-body">{contactDiv} </div>

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
              <div className="works">
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
