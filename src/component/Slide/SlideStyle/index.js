import styled from "styled-components";

export const SlideContent = styled.div`
  display: flex;
  position: relative;

  width: 50%;
  height: 320px;

  margin: 0 auto;
  overflow: hidden;

  background-color: #000;

  .content-item {
    flex-shrink: 0;
    width: 100%;
    height: 320px;

    transform: translatex(${(props) => props.position}%);
    transition: all 1s;
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
