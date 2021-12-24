import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { Favorite } from "@material-ui/icons";
import Buttons from "./Buttons";
import { SocialIcon } from "react-social-icons";

function HamburgerMenu(props) {
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
    borderBottom: "3px solid rgb(238, 238, 238)",
  };
  const hideNav = {
    height: "0px",
  };
  const showNav = {
    height: "92vh",
  };

  const [{ basket }] = useStateValue();
  const [toggl, setToggl] = useState(false);
  const [navStyle, setNavStyle] = useState(normalStyle);

  useEffect(() => {
    ["load", "scroll", "resize", "change"].forEach((e) =>
      window.addEventListener(e, handleScrol)
    );
    return () =>
      ["load", "scroll", "resize", "change"].forEach((e) =>
        window.removeEventListener(e, handleScrol)
      );
    // eslint-disable-next-line
  }, []);

  function handleScrol() {
    if (window.scrollY >= 70) {
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
          <RouterLink to="/myfav">
            <div style={{ position: "relative" }}>
              <Favorite
                className="toggleBtn"
                style={{ color: `${window.scrollY >= 70 ? "black" : "white"}` }}
              />
              <p
                style={{
                  backgroundColor: `${
                    window.scrollY >= 70 ? "white" : "black"
                  }`,
                  color: `${window.scrollY >= 70 ? "black" : "white"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.4em",
                  position: "absolute",
                  height: "14px",
                  width: "14px",
                  borderRadius: "50%",
                  left: "14px",
                  bottom: "5px",
                  transition: "all 0.3s ease-in",
                }}
              >
                {basket?.length}
              </p>
            </div>
          </RouterLink>
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
          <div
            onClick={handleClick}
            style={{
              transition: "all 0.3s linear",
            }}
          >
            <RouterLink to="/home" style={{ color: "black" }}>
              {props.homeIcon}
            </RouterLink>
            {toggl ? props.closeIcon : props.menuIcon}{" "}
          </div>
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
              bgColor="#eee"
              fgColor="black"
              className="social-icon"
            />
            <SocialIcon
              url="https://twitter.com/chimeruzee1"
              bgColor="#eee"
              fgColor="black"
              className="social-icon"
            />
            <SocialIcon
              url="https://instagram.com/chimeruzee.chidum"
              bgColor="#eee"
              fgColor="black"
              className="social-icon"
            />
          </article>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
