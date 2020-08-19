import React from "react";
import { BannerContainer, BannerNav } from "./BannerStyle";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerContainer>
      <h1 className="banner-title">React CSS Skill</h1>
      <BannerNav>
        <ul className="banner-menu">
          <li>
            <Link className="banner-menu-items" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="banner-menu-items" to="/Slide">
              Slide
            </Link>
          </li>
          <li>
            <Link className="banner-menu-items" to="/DragDrop">
              Drag&amp;Drop
            </Link>
          </li>
          <li>
            <Link className="banner-menu-items" to="/Floating">
              Floating Banner
            </Link>
          </li>
        </ul>
      </BannerNav>
    </BannerContainer>
  );
};

export default Banner;
