import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../page/HomePage";
import Banner from "../component/Banner";
import { GlobalStyle } from "../GlobalStyle";
import SlidePage from "../page/SlidePage";

const App = () => {
  return (
    <>
      <Banner />
      <Route exact path={["/", "/Home"]} component={HomePage} />
      <Route path="/Slide" component={SlidePage} />

      <GlobalStyle />
    </>
  );
};

export default App;
