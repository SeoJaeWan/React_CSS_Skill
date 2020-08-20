import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "../page/HomePage";
import Banner from "../component/Banner";

import font from "./font.css";

const zz = require("../assets/fonts/test/BMJUA.ttf");

const App = () => {
  const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'font';
    src : url(${require("../assets/fonts/Black-Han-Sans/BlackHanSans.ttf")}) ;
  } */

  @font-face {
      font-family: "BMJUA";
      src: url(${require("../assets/fonts/test/BMJUA.eot")});
      src: url(${require("../assets/fonts/test/BMJUA.woff2")}) format('woff2'),
      url(${require("../assets/fonts/test/BMJUA.woff")}) format('woff'),
      url(${require("../assets/fonts/test/BMJUA.ttf")}) format('ttf');
    }
  * { 
    font-family: 'BMJUA',sans-serif;
    box-sizing: border-box;
  }

  body{
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  section {
    width: 70%;

    margin: 0 auto;

  }
  `;

  return (
    <>
      <GlobalStyle />
      <Banner />
      {console.log(zz)}
      <Route exact path={["/", "/Home"]} component={HomePage} />
    </>
  );
};

export default App;
