import React from "react";
import { Container } from "../../GlobalStyle";

const Slide = () => {
  return (
    <Container>
      <header>
        <h2 className="main-title">Slide?!</h2>
        <ul className="main-menu">
          <li className="main-menu-item">Up&amp;Down</li>
          <li className="main-menu-item">Left&amp;Right</li>
          <li className="main-menu-item">Fade</li>
        </ul>
      </header>

      <article className="content">
        <h2>Up&amp;Down</h2>
        <div className="content-box">
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
          <div className="content-box-item yellow"></div>
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
        </div>
      </article>
    </Container>
  );
};

export default Slide;
