import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import NavbarFixed from "./NavbarFixed";
import works from "./Allworks";
import Works from "./Works";
import Title from "./Title";
import Filters from "./Filters";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import SeeMoreBtn from "./SeeMoreBtn";
import filters from "./FiltersStore";
import Filter from "./Filter";

function App() {
  const [allWorks, setWorks] = useState(works);

  function filterWork(category) {
    console.log(category);

    if (category === "all") {
      setWorks((prevNotes) => {
        return prevNotes.filter((noteItem, d) => {
          return noteItem.category === "all";
        });
      });
    } else if (category === "logos") {
      setWorks((prevNotes) => {
        return prevNotes.filter((noteItem, d) => {
          return noteItem.category === "logos";
        });
      });
    } else if (category === "Business cards") {
      setWorks((prevNotes) => {
        return prevNotes.filter((noteItem, d) => {
          return noteItem.category === "Business Cards";
        });
      });
    } else if (category === "flyers") {
      setWorks((prevNotes) => {
        return prevNotes.filter((noteItem, d) => {
          return noteItem.category === "flyers";
        });
      });
    } else if (category === "posters") {
      setWorks((prevNotes) => {
        return prevNotes.filter((noteItem, d) => {
          return noteItem.category === "posters";
        });
      });
    } else {
      setWorks((prevNotes) => {
        return prevNotes.filter((noteItem, d) => {
          return noteItem.category === "all";
        });
      });
    }
  }
  // useEffect(() => {
  //   filterWork();
  // }, [works]);

  return (
    <div>
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
        {/* Filter Props Mapping */}
        <div className="filter">
          <ul className="filter-btn">
            {filters.map((filters, index) => {
              return (
                <Filter
                  key={index}
                  id={index}
                  category={filters.category}
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
                key={index}
                id={index}
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

export default App;
