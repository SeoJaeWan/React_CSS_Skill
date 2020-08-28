import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "../../GlobalStyle";
import { SlideContent } from "./SlideStyle";

const Slide = ({ animation, onChange }) => {
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
        <SlideContent animation={animation}>
          <div className="content-item green"></div>
          <div className="content-item red"></div>
          <div className="content-item yellow"></div>
          <div className="content-item green"></div>
          <div className="content-item red"></div>

          <div className="content-button">
            <button type="button" onClick={() => onChange("left")}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </button>
            <button type="button" onClick={() => onChange("right")}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </button>
          </div>
        </SlideContent>

        <p className="content-text">
          가장 대표적인 Silde가 아닐까 생각하는 Left&amp;Right!
          <br />
        </p>
      </article>
    </Container>
  );
};

export default Slide;
