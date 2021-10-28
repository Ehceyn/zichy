import React, { useState, useEffect } from "react";
import "./favorite.css";
import { useStateValue } from "../StateProvider";
import FavoriteWork from "./FavoriteWork";
import MyFavNavbar from "./MyFavNavbar";
import idMaker from "./idMaker";
import work3 from "../utilities/zichygraphs/butterfly.jpg";
import Contact from "./Contact";

function Checkout(props) {
  const [{ basket }] = useStateValue();
  const [contactDiv, setContactDiv] = useState();

  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  const [nav, setNav] = useState({
    navPosition: "static",
    navBorder: "1px solid lightgray",
    navPaddingRight: "88px",
  });

  useEffect(() => {
    ["scroll", "resize", "load"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["scroll", "resize", "load"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
  }, []);

  function handleScroll() {
    if (window.scrollY > 10) {
      setNav({
        navPosition: "fixed",
        navBorder: "none",
        navPaddingRight: "70px",
      });
    } else {
      setNav({
        navPosition: "static",
        navBorder: "1px solid lightgray",
        navPaddingRight: "88px",
      });
    }
  }

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const addFav = (id) => {
    let array = favorites;
    let addArray = true;
    array.forEach((item, key) => {
      if (item === id) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(id);
    }
    setFavorites([...array]);
    localStorage.setItem("favs", JSON.stringify(favorites));
    console.log(favorites);
  };

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
                You have no favorite. To add one or more favorite work(s) simply
                click on the 'heart' icon next to the item{" "}
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout-title">My Favorite Designs</h2>

              {/* list out all the checkout products */}
              <div className="works">
                {basket.map((work, index) => {
                  return (
                    <FavoriteWork
                      key={work.id}
                      id={work.id}
                      img={work.img}
                      category={work.category}
                      onRemoveFav={addFav}
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
