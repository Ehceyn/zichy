import React from "react";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

function Ham() {
  return (
    <div>
      <nav>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#1">About</a>
          </li>
          <li>
            <a href="#2">Contact</a>
          </li>
          <li>
            <a href="#3">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Ham;
