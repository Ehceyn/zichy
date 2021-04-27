import React from "react";
import greensmoke from "../../src/utilities/zichygraphs/butterfly.jpg";

function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-bg-img">
        <img src={greensmoke} alt="" className="contact-img" />
      </div>
      <div className="contact-page">
        <label htmlFor="fullname">Fullname</label>
        <input type="text" name="fullname" id="fullname" />
        <label htmlFor="email">E-mail</label>

        <input type="email" name="email" id="email" />
        <input type="tel" name="phone" id="phone" />
        <input type="text" name="message" id="message" />
      </div>
    </div>
  );
}

export default Contact;
