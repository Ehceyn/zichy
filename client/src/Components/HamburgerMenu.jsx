import React, { useState } from "react";
import { Link } from "react-scroll";
import { Close, Favorite, Menu } from "@material-ui/icons";
import Buttons from "./Buttons";
import { SocialIcon } from "react-social-icons";

function HamburgerMenu() {
  const normalStyle = {
    backgroundColor: "transparent",
    color: "white",
    borderBottom: "1px solid rgba(255, 255, 255, 0.616)",
  };
  const onscrollStyle = {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  };
  const onclickStyle = {
    backgroundColor: "white",
    color: "black",
  };
  const hideNav = {
    display: "none",
  };
  const showNav = {
    display: "flex",
  };

  const [toggl, setToggl] = useState(false);
  const [navStyle, setNavStyle] = useState(normalStyle);

  window.onscroll = !toggl && handleScrol;

  function handleScrol() {
    if (
      window.document.body.scrollTop >= 70 ||
      window.document.documentElement.scrollTop >= 70
    ) {
      setNavStyle(onscrollStyle);
    } else {
      setNavStyle(normalStyle);
    }
  }
  function handleClick() {
    setToggl(!toggl);
    if (!toggl) {
      setNavStyle(onclickStyle);
    } else {
      handleScrol();
    }

    console.log(toggl);
  }

  return (
    <div>
      <div className="hamburger">
        <div className="ham-logo-div" style={navStyle}>
          <Link
            activeClass="active"
            to="my fav"
            spy={true}
            smooth={true}
            offset={0}
            duration={5}
          >
            <Favorite />
          </Link>

          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="ham-logo">ZICHYgraphs</div>
          </Link>

          <div onClick={handleClick}>{toggl ? <Close /> : <Menu />} </div>
        </div>

        <div className="ham-div" style={toggl ? showNav : hideNav}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={0}
              >
                <p className="ham-links" href="#home" onClick={handleClick}>
                  home
                </p>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-10}
                duration={0}
              >
                <p className="ham-links" href="#works" onClick={handleClick}>
                  works
                </p>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={0}
              >
                <p className="ham-links" href="#about" onClick={handleClick}>
                  about
                </p>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={0}
              >
                <p className="ham-links" href="#contact" onClick={handleClick}>
                  contact
                </p>
              </Link>
            </li>
            <li>
              <Buttons
                value="Hire me"
                className="btn btn-for-general btn-with-bg"
              />
            </li>
          </ul>
          <article>
            <SocialIcon
              url="https://facebook.com/chimeruzee.chidum"
              bgColor="blue"
              fgColor="white"
              className="social-icon"
            />
            <SocialIcon
              url="https://twitter.com/chimeruzee1"
              bgColor="#00ACEF"
              fgColor="white"
              className="social-icon"
            />
            <SocialIcon
              url="https://instagram.com/chimeruzee.chidum"
              bgColor="red"
              fgColor="white"
              className="social-icon"
            />
          </article>
        </div>
      </div>
      );
    </div>
  );
}

export default HamburgerMenu;
