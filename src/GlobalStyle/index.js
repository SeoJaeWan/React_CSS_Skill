import styled, { createGlobalStyle } from "styled-components";
import font from "./font";

export const GlobalStyle = createGlobalStyle`
  ${font}
  * { 
    box-sizing: border-box;
    font-family: "Raleway";
    margin: 0;
  }

  body {

  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  button{
    border: none;
    background-color: unset;
  }

  section {
    width: 70%;
    height: 100vh;

    margin: 0 auto;
  }
  `;

export const Container = styled.section`
  padding-top: 100px;

  header {
    margin: 0;

    margin-bottom: 50px;
  }
  .main-title {
    font-family: "OpenSans";
  }

  .main-menu {
    padding: 5px 20px;
  }

  .main-menu-item {
    margin-top: 7px;
    letter-spacing: 0.15em;
  }

  .content {
    text-align: center;
    margin-bottom: 50px;
  }

  .content > h2 {
    padding-bottom: 30px;
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
