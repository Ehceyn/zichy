import React from "react";
import myPhoto from "../../src/utilities/zichygraphs/myphoto.png";
import handshake from "../../src/utilities/zichygraphs/handshakegray.png";
import conference from "../../src/utilities/zichygraphs/3d-glass-window-logo-mockup.png";

function About() {
  return (
    <div className="about-div">
      <article className="about-paragraph-div">
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          doloribus harum eos numquam perferendis facere necessitatibus amet,
          officia tempore dolorem dolorum aliquid nam odit placeat voluptatem
          iusto nostrum aliquam totam!
        </p>
      </article>
      <div className="about photo-div">
        <img
          src={handshake}
          alt="myPhoto"
          className="my-photo about-photo-overlay about-photo-overlay1"
        />
        <img src={myPhoto} alt="myPhoto" className="my-photo " />
        <img
          src={conference}
          alt="myPhoto"
          className="my-photo about-photo-overlay about-photo-overlay2"
        />
      </div>
    </div>
  );
}

export default About;
