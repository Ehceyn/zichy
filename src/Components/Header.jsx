import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarFixed from "./NavbarFixed";
import HamburgerMenu from "./HamburgerMenu";
import Buttons from "./Buttons";

function Header(props) {
  const [navbar, setNavbar] = useState();

  window.onscroll = handleScroll;

  function handleScroll() {
    setNavbar(<Navbar />);
    if (window.outerHeight >= 70) {
      setNavbar(<NavbarFixed />);
    }
  }

  return (
    <header>
      <NavbarFixed />
      {/* {navbar} */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a name="home">
        <div className="intro">
          <p>
            Bring your <span className="intro-span">dreams</span> into reality.
            I put my best into every work.
          </p>
          <Buttons value="Hire me" className="btn btn-for-header btn-with-bg" />
        </div>
      </a>
    </header>
  );
}

export default Header;
