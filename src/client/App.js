import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../page/HomePage";
import { GlobalStyle } from "../GlobalStyle";
import SlidePage from "../page/SlidePage";
import BannerForm from "../container/BannerForm";

const App = () => {
  return (
    <>
      <BannerForm />
      <Route exact path={["/", "/Home"]} component={HomePage} />
      <Route path="/Slide" component={SlidePage} />

      <GlobalStyle />
    </>
  );
};

export default App;
