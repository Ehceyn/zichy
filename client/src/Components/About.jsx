import React from "react";
import { Link } from "react-scroll";
import myPhoto from "../../src/utilities/zichygraphs/myphoto.png";

function About() {
  return (
    <div className="about-div">
      <article className="about-paragraph-div">
        <p className="about-paragraph">
          <span className="intro-span">Chimzichim Chidum</span> is an ambitious,
          creative and out-of-the-box graphics designer who specializes in
          individual designs and business branding. He has experience in
          creating engaging designs and successful brands for businesses.
          <br />
          <br />
          Chimzichim was first inspired to begin a career in graphics design
          during a church program, he saw the design of the banner was so
          amazing, being an admirer of beautiful and creative designs this
          inspired his long term passion for to create not just beautiful
          designs, but creative and out-of-the-box graphic designs.
          <br />
          <br />
          Through the time he has work in the graphics design industry, he has
          worked with over 50 clients, including startups, fashion brands,
          schools, churches and big organizations.
          <br />
          <br />
          Chimzichim currently lives with his family in Port Harcourt, Nigeria,
          where he schools and innovates.
          <br />
          <br />
          Chimzichim has open availability to opportunities, get in touch with
          him
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <span className="intro-span" style={{ cursor: "pointer" }}>
              {" "}
              here
            </span>
          </Link>
        </p>

        <img src={myPhoto} alt="myPhoto" className="my-photo-smscrn " />
      </article>
      <div className="about photo-div">
        <img src={myPhoto} alt="myPhoto" className="my-photo " />
      </div>
    </div>
  );
}

export default About;
