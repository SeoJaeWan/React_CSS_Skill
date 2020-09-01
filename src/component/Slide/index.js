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
          <li className="main-menu-item">Left&amp;Right</li>
          <li className="main-menu-item">Up&amp;Down</li>
          <li className="main-menu-item">Fade</li>
        </ul>
      </header>

      <article className="content">
        <h2 className="content-title fs-h2 fw-bold">Left&amp;Right</h2>
        <SlideContent animation={animation.translateX}>
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

        <p className="content-text fw-bold">
          순환 Left Right Slide, translateX를 이용하여 구현
        </p>

        <SlideContent animation={animation.keyframe}>
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
      </article>
    </Container>
  );
};

export default Slide;
