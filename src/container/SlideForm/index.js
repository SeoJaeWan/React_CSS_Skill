import React, { useState } from "react";
import Slide from "../../component/Slide";

const SlideForm = () => {
  const initialState = {
    first: false,
    second: false,
    third: false,

    state: 0,
  };

  const [animation, setAnimation] = useState({
    translateX: { position: -100, delay: true },
    fade: { ...initialState, first: true },
    thirdD: { ...initialState, first: true, show: 100, close: -100 },
  });

  const onCycleChange = (direction) => {
    if (
      animation.translateX.position >= -300 &&
      animation.translateX.position <= -100
    ) {
      let weight = 100;
      if (direction === "left") weight *= -1;

      weight = animation.translateX.position + weight;

      if (weight === 0 || weight === -400) {
        // 좌우 순환 지점에 도달했을 경우
        setTimeout(() => {
          weight = Math.abs(weight + 300) * -1;
          setAnimation((prev) => ({
            ...prev,
            translateX: { position: weight, delay: false },
          }));
        }, 200);
      }

      setAnimation((prev) => ({
        ...prev,
        translateX: { position: weight, delay: true },
      }));
    }
  };

  const onFadeChange = (direction) => {
    let currentState = animation.fade.state;
    let result;
    let stateKey;
    if (direction === "left") currentState -= 1;
    else currentState += 1;

    if (currentState < 0 || currentState > 2)
      currentState = (currentState - 3) / -2;

    stateKey = Object.keys(initialState)[currentState];
    result = {
      ...initialState,
      [stateKey]: true,
      state: currentState,
    };

    setAnimation((prev) => ({
      ...prev,
      fade: { ...prev.fade, ...result },
    }));
  };

  const on3dChange = (direction) => {
    let currentState = animation.thirdD.state;
    let result;
    let stateKey;

    let dirc = 100;

    if (direction === "left") {
      currentState -= 1;
    } else {
      currentState += 1;
      dirc *= -1;
    }

    if (currentState < 0 || currentState > 2)
      currentState = (currentState - 3) / -2;

    stateKey = Object.keys(initialState)[currentState];
    result = {
      ...initialState,
      [stateKey]: true,
      state: currentState,
    };

    setAnimation((prev) => ({
      ...prev,
      thirdD: { ...prev.thirdD, ...result, show: dirc, close: -dirc },
    }));
  };

  return (
    <Slide
      animation={animation}
      onCycleChange={onCycleChange}
      onFadeChange={onFadeChange}
      on3dChange={on3dChange}
    />
  );
};

export default SlideForm;
