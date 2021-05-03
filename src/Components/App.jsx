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
import Footer from "./Footer";

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
          upLinePosition='line-left'
          downLinePosition='line-right'

        />
        <Filter />
        <div className="works-gallery">
          {works.map((work, index) => {
            return <Works key={index} img={work.img} category={work.category} />;
          })}
        </div>
      </section>
      <section className="about" id="about">
        <Title
          divClassName="section-title-div about-section-title"
          divNameAttr="about"
          title="about"
          pName="ABOUT"
          upLinePosition='line-right'
        downLinePosition='line-left'

        />
        <About />
      </section>
      
      <section className="contact" id="contact">
      <Title
          divClassName="contact-section-title-div left-section-title"
          divNameAttr="contact"
          title="contact"
          pName="CONTACT"
          upLinePosition='line-left'
          downLinePosition='line-right'

        />
        <Contact />
      </section>
      <section>
      <Footer/>
      </section>
    </div>
  );
}

export default App;
