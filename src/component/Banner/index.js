import React from "react";
import { BannerContainer, BannerNav } from "./BannerStyle";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerContainer>
      <h1 className="banner-title">React CSS Skill</h1>
      <BannerNav>
        <ul className="banner-menu">
          <li className="banner-menu-items">
            <Link to="/">Home</Link>
          </li>
          <li className="banner-menu-items">
            <Link to="/Slide">Slide</Link>
            <Link to="/Slide">Up&amp;Down</Link>
            <Link to="/Slide">Left&amp;Right</Link>
            <Link to="/Slide">Fade</Link>
          </li>
          <li className="banner-menu-items">
            <Link to="/DragDrop">Drag&amp;Drop</Link>
          </li>
          <li className="banner-menu-items">
            <Link to="/Floating">Floating Banner</Link>
          </li>
        </ul>
      </BannerNav>
    </BannerContainer>
  );
};

export default Banner;
