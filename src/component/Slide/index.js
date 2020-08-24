import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "../../GlobalStyle";

const Slide = () => {
  return (
    <Container>
      <header>
        <h2 className="main-title fs-h2">Slide?!</h2>
        <ul className="main-menu fs-medium">
          <li className="main-menu-item">Up&amp;Down</li>
          <li className="main-menu-item">Left&amp;Right</li>
          <li className="main-menu-item">Fade</li>
        </ul>
      </header>

      <article className="content">
        <h2>Left&amp;Right</h2>
        <div className="content-box">
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
          <div className="content-box-item yellow"></div>
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
        </div>

        <button>
          <FontAwesomeIcon icon={faAngleLeft} size="3x" />
        </button>
        <button>
          <FontAwesomeIcon icon={faAngleRight} size="3x" />
        </button>

        <p className="content-text">
          가장 대표적인 Silde가 아닐까 생각하는 Left&amp;Right!
          <br />
        </p>
      </article>

      <article className="content">
        <h2>Up&amp;Down</h2>
        <div className="content-box">
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
          <div className="content-box-item yellow"></div>
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
        </div>

        <p></p>
      </article>

      <article className="content">
        <h2>Fade</h2>
        <div className="content-box">
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
          <div className="content-box-item yellow"></div>
          <div className="content-box-item green"></div>
          <div className="content-box-item red"></div>
        </div>

        <p></p>
      </article>
    </Container>
  );
};

export default Slide;
