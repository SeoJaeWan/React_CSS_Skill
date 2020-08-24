import React from "react";
import { HomeContainer } from "./HomeStyle";

const Home = ({ content }) => {
  return (
    <HomeContainer>
      <h1 className="home-title">
        Welcome To <br />
        <strong>React CSS Skill Page</strong>
      </h1>

      {content.map((item, index) => {
        return (
          <p
            className={`home-content fs-large fw-bold ${item.class}`}
            key={index}
          >
            {item.content}
          </p>
        );
      })}
    </HomeContainer>
  );
};

export default Home;
