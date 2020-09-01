import styled, { createGlobalStyle } from "styled-components";
import font from "./font";
import backgroundColor from "./backgroundColor";

export const GlobalStyle = createGlobalStyle`
  ${font}
  ${backgroundColor}
  * { 
    box-sizing: border-box;
    font-family: "Raleway";
    margin: 0;
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

  .content-title {
    padding-bottom: 30px;
  }

  .content-text {
    font-family: "Raleway";

    text-align: center;
    margin: 10px 0 80px;
  }
`;
