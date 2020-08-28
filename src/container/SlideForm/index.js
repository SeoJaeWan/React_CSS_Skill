import React, { useState } from "react";
import Slide from "../../component/Slide";

const SlideForm = () => {
  const [animation, setAnimation] = useState({ position: -100, delay: true });

  const onChange = (direction) => {
    if (animation.position >= -300 && animation.position <= -100) {
      let weight = 100;
      if (direction === "left") weight *= -1;

      weight = animation.position + weight;

      if (weight === 0 || weight === -400) {
        setTimeout(() => {
          weight = Math.abs(weight + 300) * -1;
          setAnimation((prev) => ({ ...prev, position: weight, delay: false }));
        }, 200);
      }

      setAnimation((prev) => ({ ...prev, position: weight, delay: true }));
    }
  };

  return <Slide animation={animation} onChange={onChange} />;
};

export default SlideForm;
