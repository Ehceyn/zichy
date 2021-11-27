import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Buttons from "./Buttons";
import { useStateValue } from "../StateProvider";
import { Link as RouterLink } from "react-router-dom";
import { Favorite } from "@material-ui/icons";

function Navbar(props) {
  const [{ basket }] = useStateValue();

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(basket));
  }, [basket]);

  return (
    <div className={props.toggleHamburgerClassName}>
      {/* Hamburger */}
      <div
        className="ham-logo-div"
        style={{
          display: `${props.displayHamburger}`,
          borderBottom: `${props.hamburgerBorderBottom}`,
          background: `${props.hamburgerBackground}`,
          height: `${props.hamburgerHeight}`,
          boxShadow: `${props.hamburgerBoxShadow}`,
        }}
      >
        <RouterLink to="/myfav">
          <div style={{ position: "relative" }}>
            <Favorite
              style={{
                color: `${props.favoriteIconHamburgerColor}`,
                fontSize: `${props.favoriteIconHamburgerFontSize}`,
                marginLeft: `${props.favoriteIconHamburgerMarginLeft}`,
              }}
            />
            <div className="favCount">{basket?.length}</div>
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
          <div
            className="ham-logo"
            style={{
              color: `${props.hamburgerLogoColor}`,
              fontSize: `${props.hamburgerLogoFontSize}`,
            }}
          >
            ZICHYgraphs
          </div>
        </Link>

        <div
          onClick={props.onHandleClick}
          style={{
            color: `${props.hamburgerToggleIconsColor}`,
            marginRight: `${props.hamburgerToggleIconsMarginRight}`,
          }}
        >
          {props.hamburgerToggleIcons}{" "}
        </div>
      </div>

      {/* Nav Items */}
      <div
        className={props.navContainer}
        style={{ display: `${props.displayHomeNav}` }}
      >
        <div className="logo-div">{props.navLogo}</div>
        <div
          className={props.linksDiv}
          style={{ display: `${props.displayHamLinks}` }}
        >
          <ul className={props.navLinks}>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <div className="link">home</div>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <div className="link">works</div>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <div className="link">about</div>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <div className="link">contact</div>
              </Link>
            </li>
            <li>
              <RouterLink to="/myfav">
                <div
                  className="link"
                  style={{ display: `${props.favoriteIconDivDisplay}` }}
                >
                  my favorites
                  <div style={{ position: "relative" }}>
                    <Favorite
                      style={{
                        color: `${props.favoriteIconColor}`,
                        fontSize: `${props.favoriteIconFontSize}`,
                        marginLeft: `${props.favoriteIconMarginLeft}`,
                      }}
                    />
                    <div className="favCount">{basket?.length}</div>
                  </div>
                </div>
              </RouterLink>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <Buttons
                  value="Hire me"
                  className="btn btn-for-general btn-with-bg"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
