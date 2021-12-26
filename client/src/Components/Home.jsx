import React, { useState, useEffect } from "react";
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
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
ReactGA.initialize("UA-181717739-1");

function Home() {
  const [works, setWorks] = useState([]);
  const [newFilter, setNewFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favs") || "0");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log(window.location.pathname);
    // eslint-disable-next-line
  }, []);
  //Get items from loclstorage
  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
    // eslint-disable-next-line
  }, []);
  // Call Api
  useEffect(() => {
    getWorks();
    // eslint-disable-next-line
  }, [newFilter, page]);

  async function getWorks() {
    // We're using axios to Fetch works
    try {
      setIsLoading(true);
      const response = await axios
        // The API we're requesting data from
        .get(`/api/works?category=${newFilter}&page=${page}`);
      console.log(
        `http://localhost:5000/api/works?category=${newFilter}&page=${page}`
      );
      // Once we get a response, we'll map the API endpoints to our props
      if (page !== 1) {
        setWorks([...works, ...response.data]);
        console.log(`page: ${page} & initialPage: 1`);
      } else {
        setWorks(response.data);
      }

      setError("");
      console.log(works);
      console.log(response.data);
    } catch (error) {
      setError("Error while loading data. Try again later");
      console.log("ERROR: " + error);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(works);

  // To filter the works
  function filterWork(e) {
    console.log(e);
    setNewFilter(e);
    setPage(1);
    console.log(works);
  }

  // Load more items from the database
  function seeMore() {
    setPage((page) => page + 1);
    console.log("pageNumber: " + page);
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

  //eslint-disable-next-line
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
                  onFilterWork={() => filterWork(btn.category)}
                  className={
                    btn.category === newFilter
                      ? "single-filter-btn-active"
                      : "single-filter-btn-inactive"
                  }
                />
              );
            })}
          </ul>
        </div>
        <div className="works-gallery">
          {works.map((work, index) => {
            return (
              <div className="works-div" key={work._id}>
                <div>
                  <img
                    src={work.img}
                    className="works-img"
                    alt={work.category[1] + "_" + work._id}
                  />
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
          })}
          {error && <p className="errorMsg">{error}</p>}
        </div>
      </section>
      <section>
        <SeeMoreBtn
          onSeeMore={seeMore}
          status={!isLoading ? "See more" : "Loading..."}
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

export default withRouter(Home);
