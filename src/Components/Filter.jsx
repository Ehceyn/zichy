import React from "react";

function Filter() {
  return (
    <div className="filter">
      <ul className="filter-btn">
        <li>
          <a href="#all">All</a>
        </li>
        <li>
          <a href="#logos">Logos</a>
        </li>
        <li>
          <a href="#business cards">Business cards</a>
        </li>
        <li>
          <a href="#flyers">Flyers</a>
        </li>
        <li>
          <a href="#posters">Posters</a>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
