import React, { useState, useEffect } from "react";
import Header2 from "./Header2";
import Header from "./Header";
import filter from "./filterstore";
import Title from "./Title";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import SeeMoreBtn from "./SeeMoreBtn";
import Filter from "./Filter";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Favorite, RemoveRedEye } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import axios from "axios";

function Home() {
  const [works, setWorks] = useState([]);
  const [newFilter, setNewFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  //Get items from loclstorage
  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);
  // Call Api
  useEffect(() => {
    getWorks();
  }, [newFilter]);

  function getWorks() {
    // We're using axios to Fetch works
    axios
      // The API we're requesting data from
      .get(`http://localhost:5000/api/works?category=${newFilter}`)
      // Once we get a response, we'll map the API endpoints to our props
      .then((response) => {
        setWorks(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        console.log(response.data);
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch((error) => {
        setWorks(works);
        setError(error);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }
  console.log(works);

  function filterWork(e) {
    console.log(e.target.value);
    setNewFilter(e.target.value);
    console.log(works);
  }

  // Load more items from the database
  function seeMore() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  // Toggle function that Adds and removes work stored in the localstorage as favs
  const addFav = (props) => {
    let array = favorites;
    let addArray = true;
    array.forEach((item, key) => {
      if (item === props._id) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(props._id);
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
        id: props._id,
        img: props.img,
        category: props.category,
      },
    });
  };
  const removeFromBasket = (props) => {
    // passes the id to the reducer to remove the id from basket and return the state and the remaining basket items

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props._id,
    });
  };

  return (
    <div>
      <Header id="home" />
      <section className="works" id="works">
        <Title
          divClassName="section-title-div left-section-title"
          divNameAttr="works"
          title="works"
          pName="WORKS"
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
          {!isLoading ? (
            works.map((work, index) => {
              return (
                <div className="works-div" key={work._id}>
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
                      <p>{work.category[1]}</p>
                      <div></div>
                    </div>
                    {favorites.includes(work._id) ? (
                      <div
                        className="fav-btn btns"
                        onClick={() => {
                          removeFromBasket(work);
                          addFav(work);
                        }}
                      >
                        <Favorite />
                      </div>
                    ) : (
                      <div
                        className="fav-btn btns"
                        onClick={() => {
                          addToBasket(work);
                          addFav(work);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </div>
                    )}
                  </article>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          {error && <p className="errorMsg">{error}</p>}
        </div>
      </section>
      <section>
        <SeeMoreBtn
          onSeeMore={seeMore}
          status={isLoading ? "Loading..." : "See more"}
        />
      </section>
      <section className="about" id="about">
        <Title
          divClassName="about-section-title-div about-section-title"
          divNameAttr="about"
          title="about"
          pName="ABOUT"
        />
        <About />
      </section>
      <section className="contact" id="contact">
        <Title
          divClassName="section-title-div left-section-title"
          divNameAttr="contact"
          title="contact"
          pName="CONTACT"
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
