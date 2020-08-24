import React from "react";
import { BannerContainer, BannerNav } from "./BannerStyle";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerContainer>
      <h1 className="banner-title fs-h1">React CSS Skill</h1>
      <BannerNav>
        <ul className="banner-menu fs-medium">
          <li className="banner-menu-item">
            <Link to="/Home">Home</Link>
          </li>
          <li className="banner-menu-item">
            <Link to="/Slide">Slide</Link>
          </li>
          <li className="banner-menu-item">
            <Link to="/DragDrop">Drag&amp;Drop</Link>
          </li>
          <li className="banner-menu-item">
            <Link to="/Floating">Floating Banner</Link>
          </li>
        </ul>
      </BannerNav>
    </BannerContainer>
  );
};

export default Banner;
