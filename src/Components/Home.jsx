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
import Checkout from "./Checkout";

function Home() {
  const [allWorks, setWorks] = useState(data);

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
              <Works
                key={work.id}
                id={work.id}
                img={work.img}
                category={work.category}
              />
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
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
