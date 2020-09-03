import styled from "styled-components";

export const SlideContent = styled.div`
  @keyframes show3dSlide {
    0% {
      opacity: 0;
    }
    30% {
      transform: translateX(${(props) => props.thirdD && props.thirdD.show}%)
        scale(0.5);
    }

    70% {
      transform: translateX(0%) scale(0.5);
    }

    100% {
      transform: translateX(0%) scale(1);
    }
  }

  @keyframes close3dSlide {
    0% {
      transform: translateX(0%) scale(1);
      opacity: 1;
    }

    30% {
      transform: translateX(0%) scale(0.5);
    }

    100% {
      transform: translateX(${(props) => props.thirdD && props.thirdD.close}%)
        scale(0.5);
      opacity: 0;
    }
  }

  position: relative;

  width: 50%;
  height: 320px;

  margin: 0 auto;
  overflow: hidden;

  background-color: #000;

  .content-box {
    width: 100%;
  }

  .content-item {
    width: 100%;
    height: 320px;
  }

  .rl-content {
    flex-shrink: 0;
    ${(props) =>
      props.animation &&
      `transform: translateX(${props.animation.position}%);transition: ${
        props.animation.delay ? "all 0.2s" : "none"
      }};`}
  }

  .fifo-content {
    position: absolute;

    top: 0;
    left: 0;

    opacity: 0;
    transition: all 1s;
  }

  .fifo-content-show {
    opacity: 1;
  }

  .third-d-content {
    position: absolute;

    top: 0;
    left: 0;

    opacity: 0;

    animation-name: close3dSlide;
    animation-duration: 1s;
  }

  .third-d-show {
    opacity: 1;

    animation-name: show3dSlide;
    animation-duration: 1s;
  }

  .content-button {
    display: flex;
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 0 10px;

    justify-content: space-between;

    button {
      opacity: 0;

      transition: all 0.5s;
    }

    button:hover {
      opacity: 1;
    }
  }
`;
