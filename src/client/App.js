import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "../page/HomePage";
import Banner from "../component/Banner";

const App = () => {
  const GlobalStyle = createGlobalStyle`
  * { 
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
      <Route exact path={["/", "/Home"]} component={HomePage} />
    </>
  );
};

export default App;
