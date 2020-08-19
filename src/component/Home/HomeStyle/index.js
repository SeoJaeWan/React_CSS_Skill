import styled from "styled-components";

export const HomeContainer = styled.section`
  @keyframes disableContent {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(100px);
    }
  }

  @keyframes ableContent {
    from {
      transform: translateY(-100px);
    }

    to {
      transform: translateY(0px);
    }
  }

  display: flex;

  justify-content: center;
  align-items: center;

  height: 100vh;

  .home-title {
    font-size: 60px;
    line-height: 1;

    margin: 0;
    margin-bottom: 200px;
  }

  .home-title > strong {
    font-size: 100px;
    color: #00cec9;
  }

  .home-content {
    position: absolute;

    bottom: 30%;

    font-weight: bold;
    font-size: 20px;

    opacity: 0;

    transition: all 2s;
  }

  .home-content-view {
    opacity: 1;
  }

  .home-content-able {
    animation-name: ableContent;
    animation-duration: 2s;

    opacity: 1;
  }

  .home-content-disable {
    animation-name: disableContent;
    animation-duration: 2s;
  }
`;
