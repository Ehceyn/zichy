import React from "react";
import { Link } from "react-scroll";
import zichygraphs from "../../src/utilities/zichygraphs/zichygraphs.png";
import Buttons from "./Buttons";
import { useStateValue } from "../StateProvider";
import { Link as RouterLink } from "react-router-dom";
import { Favorite } from "@material-ui/icons";

function Navbar() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={zichygraphs} alt="" className="logo" draggable="false" />
      </div>
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
            offset={0}
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
