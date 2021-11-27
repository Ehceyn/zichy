import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import Buttons from "./Buttons";
import zichygraphs from "../../src/utilities/zichygraphs/zichygraphs.png";

function Header(props) {
  const [nav, setNav] = useState(
    <Navbar
      navLogo={
        <img src={zichygraphs} alt="" className="logo" draggable="false" />
      }
      navContainer="navbar"
    />
  );

  useEffect(() => {
    ["load", "scroll", "resize", "change"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["load", "scroll", "resize", "change"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
  }, []);

  function handleScroll() {
    if (window.scrollY > 140) {
      if (window.matchMedia("(max-width:800px)").matches) {
        setNav(<HamburgerMenu />);
      } else {
        setNav(<Navbar navLogo="ZICHYgraghs" navContainer="navbarfixed" />);
      }
    } else if (window.matchMedia("(max-width:800px)").matches) {
      setNav(<HamburgerMenu />);
    } else {
      setNav(
        <Navbar
          navLogo={
            <img src={zichygraphs} alt="" className="logo" draggable="false" />
          }
          navContainer="navbar"
        />
      );
    }
  }

  return (
    <header>
      {/* <Navbar navContainer={nav.navContainer} navLogo={nav.navLogo} /> */}
      {nav}
      {/* <HamburgerMenu /> */}
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
