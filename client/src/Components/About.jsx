import React from "react";
import myPhoto from "../../src/utilities/zichygraphs/myphoto.png";

function About() {
  return (
    <div className="about-div">
      <article className="about-paragraph-div">
        <p className="about-paragraph">
          I am <span className="intro-span">Chimzichim Chidum</span> consectetur
          adipisicing elit. Ipsa doloribus harum eos numquam perferendis facere
          necessitatibus amet, officia tempore dolorem dolorum aliquid nam odit
          placeat voluptatem iusto nostrum aliquam totam! <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          doloribus harum eos numquam perferendis facere necessitatibus amet,
          officia tempore dolorem dolorum aliquid nam odit placeat voluptatem
          iusto nostrum aliquam totam!
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
