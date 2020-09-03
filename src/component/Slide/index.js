import React from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";

import { Container } from "../../GlobalStyle";
import { SlideContent } from "./SlideStyle";

const Slide = ({ animation, onCycleChange, onFadeChange, on3dChange }) => {
  return (
    <Container>
      <article className="content">
        <h2 className="content-title fs-h2 fw-bold">Left&amp;Right</h2>
        <SlideContent animation={animation.translateX}>
          <div className="content-box flex">
            <div className="content-item green rl-content"></div>
            <div className="content-item red rl-content"></div>
            <div className="content-item yellow rl-content"></div>
            <div className="content-item green rl-content"></div>
            <div className="content-item red rl-content"></div>
          </div>

          <div className="content-button">
            <button type="button" onClick={() => onCycleChange("left")}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </button>
            <button type="button" onClick={() => onCycleChange("right")}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </button>
          </div>
        </SlideContent>

        <p className="content-text fw-bold">
          순환 Left Right Slide,
          <strong className="fc-strong">translateX</strong>를 이용하여 구현
        </p>
      </article>

      <article className="content">
        <h2 className="content-title fs-h2 fw-bold">FadeIn&amp;FadeOut</h2>
        <SlideContent>
          <div className="content-box">
            <div
              className={cn("content-item fifo-content red", {
                "fifo-content-show": animation.fade.first,
              })}
            ></div>
            <div
              className={cn("content-item fifo-content yellow", {
                "fifo-content-show": animation.fade.second,
              })}
            ></div>
            <div
              className={cn("content-item fifo-content green", {
                "fifo-content-show": animation.fade.third,
              })}
            ></div>
          </div>

          <div className="content-button">
            <button type="button" onClick={() => onFadeChange("left")}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </button>
            <button type="button" onClick={() => onFadeChange("right")}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </button>
          </div>
        </SlideContent>

        <p className="content-text fw-bold">
          FadeIn FadeOut Slide, <strong className="fc-strong">opacity</strong>를
          이용해서 구현
        </p>
      </article>

      <article className="content">
        <h2 className="content-title fs-h2 fw-bold">3D Slide</h2>
        {console.log(animation.thirdD)}
        <SlideContent thirdD={animation.thirdD}>
          <div className="content-box">
            <div
              className={cn("content-item third-d-content red", {
                "third-d-show": animation.thirdD.first,
              })}
            ></div>
            <div
              className={cn("content-item third-d-content yellow", {
                "third-d-show": animation.thirdD.second,
              })}
            ></div>
            <div
              className={cn("content-item third-d-content green", {
                "third-d-show": animation.thirdD.third,
              })}
            ></div>
          </div>

          <div className="content-button">
            <button type="button" onClick={() => on3dChange("left", "thirdD")}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </button>
            <button type="button" onClick={() => on3dChange("right", "thirdD")}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </button>
          </div>
        </SlideContent>

        <p className="content-text fw-bold">
          3D Slide, <strong className="fc-strong">keyframes</strong>를 이용해서
          구현
        </p>
      </article>
    </Container>
  );
};

export default Slide;
