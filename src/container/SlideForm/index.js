import React, { useState } from "react";
import Slide from "../../component/Slide";

const SlideForm = () => {
  const [position, setPosition] = useState(0);

  const onChange = (direction) => {
    let weight = 100;
    if (direction === "left") weight *= -1;

    setPosition(position + weight);
  };

  return <Slide position={position} onChange={onChange} />;
};

export default SlideForm;
