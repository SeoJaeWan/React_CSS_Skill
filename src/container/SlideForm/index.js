import React, { useState } from "react";
import Slide from "../../component/Slide";

const SlideForm = () => {
  const [position, setPosition] = useState(-100);

  const onChange = (direction) => {
    let weight = 100;
    if (direction === "left") weight *= -1;

    weight = position + weight;

    if (weight === 0 || weight === -400) weight = Math.abs(weight + 300) * -1;

    setPosition(weight);
  };

  return <Slide position={position} onChange={onChange} />;
};

export default SlideForm;
