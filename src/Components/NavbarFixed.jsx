import React from "react";
import { Link } from "react-scroll";
import { Favorite } from "@material-ui/icons";
import Buttons from "./Buttons";

function NavbarFixed() {
  return (
    <div>
      <div className="navbarfixed">
        <div className="logo-div">ZICHYgraphs</div>
        <ul className="nav-links">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
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
              offset={0}
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
              offset={0}
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
            <Link
              activeClass="active"
              to="my fav"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <p className="link" href="#my fav">
                my favorites
                <Favorite
                  style={{ color: "red", fontSize: "200%", marginLeft: "10px" }}
                />
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
      </div>
      );
    </div>
  );
}

export default NavbarFixed;
