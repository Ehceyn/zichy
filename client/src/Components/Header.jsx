import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import Buttons from "./Buttons";
import zichygraphs from "../../src/utilities/zichygraphs/zichygraphs.png";

function Header(props) {
  const [nav, setNav] = useState({
    navLogo: (
      <img src={zichygraphs} alt="" className="logo" draggable="false" />
    ),
    navContainer: "navbar",
  });

  useEffect(() => {
    ["scroll", "resize", "load"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["scroll", "resize", "load"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
  }, []);

  function handleScroll() {
    if (window.scrollY > 140) {
      setNav({
        navLogo: "ZICHYgraphs",
        navContainer: "navbarfixed",
      });
    } else {
      setNav({
        navLogo: (
          <img src={zichygraphs} alt="" className="logo" draggable="false" />
        ),
        navContainer: "navbar",
      });
    }
  }

  return (
    <header>
      <Navbar navContainer={nav.navContainer} navLogo={nav.navLogo} />
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
