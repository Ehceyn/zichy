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
    <div className={props.navContainer}>
      <div className="logo-div">{props.navLogo}</div>
      <ul className="nav-links">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <p className="link" href="#home">
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
            offset={-30}
            duration={500}
          >
            <p className="link" href="#works">
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
            offset={-30}
            duration={500}
          >
            <p className="link" href="#about">
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
            duration={500}
          >
            <p className="link" href="#contact">
              contact
            </p>
          </Link>
        </li>
        <li>
          <RouterLink to="/myfav">
            <p className="link" href="#my fav">
              my favorites
              <div style={{ position: "relative" }}>
                <Favorite
                  style={{
                    color: "red",
                    fontSize: "200%",
                    marginLeft: "10px",
                  }}
                />
                <p className="favCount">{basket?.length}</p>
              </div>
            </p>
          </RouterLink>
        </li>
        <li>
          <Buttons
            value="Hire me"
            className="btn btn-for-general btn-with-bg"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
