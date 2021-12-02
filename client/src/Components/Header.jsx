import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-scroll";

import Buttons from "./Buttons";
import zichygraphs from "../../src/utilities/zichygraphs/zichygraphs.png";
import { Close, KeyboardArrowDownOutlined, Menu } from "@material-ui/icons";

function Header(props) {
  const [nav, setNav] = useState(
    <HamburgerMenu
      closeIcon={<Close className="toggleBtn" />}
      menuIcon={<Menu className="toggleBtn" />}
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
        setNav(
          <HamburgerMenu
            closeIcon={<Close className="toggleBtn" />}
            menuIcon={<Menu className="toggleBtn" />}
          />
        );
      } else {
        setNav(<Navbar navLogo="ZICHYgraghs" navContainer="navbarfixed" />);
      }
    } else if (window.matchMedia("(max-width:800px)").matches) {
      setNav(
        <HamburgerMenu
          closeIcon={<Close className="toggleBtn" />}
          menuIcon={<Menu className="toggleBtn" />}
        />
      );
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
      {nav}
      <a name="home">
        <div className="intro">
          <p>
            Bring your <span className="intro-span">dreams</span> into reality.
            I put my best into every work.
          </p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            {" "}
            <Buttons
              value="Hire me"
              className="btn btn-for-header btn-with-bg"
            />
          </Link>
        </div>
        <div classname="animated-arrow-div">
          <KeyboardArrowDownOutlined
            style={{ color: "white", width: "40px", height: "40px" }}
            classname="animated-arrow"
          />
        </div>
      </a>
    </header>
  );
}

export default Header;
