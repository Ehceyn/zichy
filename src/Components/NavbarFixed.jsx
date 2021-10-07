import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Link } from "react-scroll";
import { Favorite } from "@material-ui/icons";
import Buttons from "./Buttons";
import { useStateValue } from "../StateProvider";

function NavbarFixed() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  console.log(RouterLink);
  console.log(Link);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(basket));
  }, [basket]);

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
              offset={-10}
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
              offset={-20}
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
          <RouterLink to="/myfav">
            <li>
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
            </li>
          </RouterLink>
          <RouterLink to="/contact">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              <li>
                <Buttons
                  value="Hire me"
                  className="btn btn-for-general btn-with-bg"
                />
              </li>
            </Link>
          </RouterLink>
        </ul>
      </div>
      );
    </div>
  );
}

export default NavbarFixed;
