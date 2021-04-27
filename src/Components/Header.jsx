import React from "react";
// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import Buttons from "./Buttons";

function Header(props) {
  return (
    <header>
      <Navbar />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a name="home">
        <div className="intro">
          <p>
            Bring your <span className="intro-span">dreams</span> into reality.
            I put my best into every work.
          </p>
          <Buttons value="Hire me" className="btn btn-for-header btn-with-bg" />
        </div>
      </a>
    </header>
  );
}

export default Header;
