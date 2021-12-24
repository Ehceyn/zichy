import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { Favorite, Home } from "@material-ui/icons";

function FavoritesHamburger(props) {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <div className="hamburger">
        <div
          className="ham-logo-div"
          style={{
            backgroundColor: "white",
            color: "white",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <RouterLink to="/myfav">
            <div style={{ position: "relative" }}>
              <Favorite className="toggleBtn" style={{ color: "black" }} />
              <p
                style={{
                  backgroundColor: "white",
                  color: "black",
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
            <div className="ham-logo" style={{ color: "black" }}>
              ZICHYgraphs
            </div>
          </Link>
          <div
            style={{
              transition: "all 0.3s linear",
            }}
          >
            <RouterLink to="/home" style={{ color: "black" }}>
              <Home className="toggleBtn" />{" "}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesHamburger;
