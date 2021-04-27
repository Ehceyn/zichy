import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import NavbarFixed from "./NavbarFixed";
import works from "./Allworks";
import Works from "./Works";
import Title from "./Title";
import Filter from "./Filter";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [navbarfixed, setNavbarFixed] = useState();
  window.onscroll = handleScroll;
  function handleScroll() {
    if (
      window.document.body.scrollTop >= 70 ||
      window.document.documentElement.scrollTop >= 70
    ) {
      setNavbarFixed(<NavbarFixed />);
    } else {
      setNavbarFixed();
    }
  }

  return (
    <div>
      {navbarfixed}
      <Header id="home" />
      <section className="works" id="works">
        <Title
          divClassName="section-title-div left-section-title"
          divNameAttr="works"
          title="works"
          pName="WORKS"
        />
        <Filter />
        <div className="works-gallery">
          {works.map((work, index) => {
            return <Works key={index} img={work.img} />;
          })}
        </div>
      </section>
      <section className="about" id="about">
        <Title
          divClassName="section-title-div about-section-title"
          divNameAttr="about"
          title="about"
          pName="ABOUT"
        />
        {/* <About /> */}
      </section>
      {/* <section className="contact" id="contact">
        <Title
          divClassName="section-title-div left-section-title"
          divNameAttr="contact"
          title="contact"
          pName="CONTACT"
        />
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
