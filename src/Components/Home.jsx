import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavbarFixed from "./NavbarFixed";
import data from "./data";
import filter from "./filterstore";
import Works from "./Works";
import Title from "./Title";
import Navbar from "./Navbar";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import SeeMoreBtn from "./SeeMoreBtn";
import Filter from "./Filter";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Favorite, RemoveRedEye } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

function Home() {
  const [allWorks, setWorks] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  function filterWork(e) {
    console.log(e.target.value);
    if (e.target.value === "All") {
      setWorks(data);
      console.log(allWorks);
    } else {
      setWorks(data.filter((item) => item.category === e.target.value));
      console.log(allWorks);
    }
  }

  const addFav = (props) => {
    let array = favorites;
    let addArray = true;
    array.forEach((item, key) => {
      if (item === props.id) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(props.id);
    }
    setFavorites([...array]);
    localStorage.setItem("favs", JSON.stringify(favorites));
    console.log(favorites);
  };

  const [{}, dispatch] = useStateValue();

  const addToBasket = (props) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        img: props.img,
        category: props.category,
      },
    });
  };
  const removeFromBasket = (props) => {
    // passes the id to the reducer to remove the id from basket and return the state and the remaining basket items

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Header id="home" />
      <section className="works" id="works">
        <Title
          divClassName="section-title-div left-section-title"
          divNameAttr="works"
          title="works"
          pName="WORKS"
          upLinePosition="line-left"
          downLinePosition="line-right"
        />
        <div className="filter">
          <ul className="filter-btn">
            {filter.map((btn, index) => {
              return (
                <Filter
                  key={btn.id}
                  category={btn.category}
                  onFilterWork={filterWork}
                />
              );
            })}
          </ul>
        </div>
        <div className="works-gallery">
          {allWorks.map((work, index) => {
            return (
              <div className="works-div">
                <div
                // onClick={() => {
                //   props.viewThisProject(props.id);
                // }}
                >
                  <img src={work.img} alt="" className="works-img" />
                  <div className="overlay">
                    <RemoveRedEye titleAccess="VIEW PROJECT" />
                  </div>
                </div>

                <article className="work-info">
                  <div className="category-div">
                    <p>{work.category}</p>
                    <div></div>
                  </div>
                  {favorites.includes(work.id) ? (
                    <div className="fav-btn btns">
                      <Favorite
                        onClick={() => {
                          removeFromBasket(work);
                          addFav(work);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="fav-btn btns">
                      <FavoriteBorderIcon
                        onClick={() => {
                          addToBasket(work);
                          addFav(work);
                        }}
                      />
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <SeeMoreBtn />
      </section>
      <section className="about" id="about">
        <Title
          divClassName="about-section-title-div about-section-title"
          divNameAttr="about"
          title="about"
          pName="ABOUT"
          upLinePosition="line-right"
          downLinePosition="line-left"
        />
        <About />
      </section>
      <section className="contact" id="contact">
        <Title
          divClassName="section-title-div left-section-title"
          divNameAttr="contact"
          title="contact"
          pName="CONTACT"
          upLinePosition="line-left"
          downLinePosition="line-right"
        />
        <Contact
          containerClass="contact-container"
          container2="contact-container2"
          closeClass="contact-close-btn"
        />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
