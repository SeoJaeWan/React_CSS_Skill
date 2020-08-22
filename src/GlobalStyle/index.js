import styled, { createGlobalStyle } from "styled-components";
import font from "./font";

export const GlobalStyle = createGlobalStyle`
  ${font}
  * { 
    box-sizing: border-box;
    font-family: "Raleway"
  }

  body {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  section {
    width: 70%;
    height: 100vh;

    margin: 0 auto;
  }
  `;

export const Container = styled.section`
  padding-top: 100px;

  .main-title {
    font-size: 36px;
    font-family: "OpenSans";

    margin: 0;
  }

  .main-menu {
    margin: 0;
    padding: 5px 20px;

    font-size: 18px;
  }

  .main-menu-item {
    margin-top: 7px;
    letter-spacing: 0.15em;
  }

  .content {
    text-align: center;
  }

  .content > h2 {
    margin-bottom: 40px;
  }

  .content-box {
    display: flex;

    width: 50%;
    height: 320px;

    margin: 0 auto;
    overflow: hidden;

    background-color: #000;
  }

  .content-box-item {
    flex-shrink: 0;
    width: 100%;
    height: 320px;

    transform: translateX(-100%);
  }

  .red {
    background-color: #ff4d4d;
  }

  .yellow {
    background-color: #fff200;
  }
  .green {
    background-color: #32ff7e;
  }
`;
