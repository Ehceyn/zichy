import React, { useState, useEffect } from "react";
import "./favorite.css";
import { useStateValue } from "../StateProvider";
import FavoriteWork from "./FavoriteWork";
import MyFavNavbar from "./MyFavNavbar";
import FavoritesHamburger from "./FavoritesHamburger";
import Contact from "./Contact";
import Buttons from "./Buttons";
import ReactGA from "react-ga";
ReactGA.initialize("G-86TQT77EXV", {
  debug: true,
  titleCase: false,
  gaOptions: {
    name: "Zichygraphs",
    userId: 3117594594,
  },
});
ReactGA.pageview(window.location.pathname + window.location.search);

function Checkout(props) {
  const [{ basket }] = useStateValue();
  const [contactDiv, setContactDiv] = useState();

  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  const [nav, setNav] = useState(<FavoritesHamburger />);

  useEffect(() => {
    ["scroll", "resize", "load"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["scroll", "resize", "load"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
    // eslint-disable-next-line
  }, []);

  function handleScroll() {
    if (window.matchMedia("(max-width:800px)").matches) {
      setNav(<FavoritesHamburger />);
    } else {
      setNav(<MyFavNavbar onDisplayContactDiv={displayContactDiv} />);
    }
  }

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
    // eslint-disable-next-line
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
      {nav}
      <div className="main-contactDiv-body">{contactDiv} </div>

      <div className="checkout">
        <div className="checkout-left">
          <div className="checkout-ad">
            <p>My Favorites</p>
          </div>
          <div>
            {basket?.length === 0 ? (
              <div>
                <h2 style={{ marginBottom: "10px" }}>
                  Your Favorites Section Is Empty
                </h2>
                <p>
                  You have no favorite. To add one or more favorite work(s)
                  simply click on the 'heart' icon next to the item{" "}
                </p>
              </div>
            ) : (
              <div>
                <h2 className="checkout-title">My Favorite Designs</h2>

                {/* list out all the checkout products */}
                <div className="works">
                  <div className="works-gallery">
                    {basket.map((work, index) => {
                      return (
                        <FavoriteWork
                          key={work.id}
                          id={work.id}
                          img={work.img}
                          category={work.category[1]}
                          onRemoveFav={addFav}
                        />
                      );
                    })}
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <li onClick={displayContactDiv}>
                    <Buttons
                      value="Hire me"
                      className="btn btn-for-favorites btn-with-bg"
                    />
                  </li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
