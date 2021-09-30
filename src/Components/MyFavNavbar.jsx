import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Link } from "react-scroll";
import { Favorite } from "@material-ui/icons";
import Buttons from "./Buttons";
import { useStateValue } from "../StateProvider";

function MyFavNavbar(props) {
  const [{ basket }] = useStateValue();
  console.log(basket);
  console.log(RouterLink);
  console.log(Link);

  return (
    <div>
      <div className="navbarfixed">
        <div className="logo-div">ZICHYgraphs</div>
        <ul className="nav-links nav-links-fav">
          <RouterLink to="/">
            <li>
              <p className="link" href="#home">
                home
              </p>
            </li>
          </RouterLink>
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

          <li onClick={props.onDisplayContactDiv}>
            <Buttons
              value="Hire me"
              className="btn btn-for-general btn-with-bg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyFavNavbar;
