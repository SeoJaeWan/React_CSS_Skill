import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../page/HomePage";
import Banner from "../component/Banner";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Route exact path={["/", "/Home"]} component={HomePage} />
    </>
  );
};

export default App;
