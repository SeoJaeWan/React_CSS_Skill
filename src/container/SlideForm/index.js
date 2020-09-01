import React, { useState } from "react";
import Slide from "../../component/Slide";

const SlideForm = () => {
  const [animation, setAnimation] = useState({
    translateX: { position: -100, delay: true },
    keyframe: { position: -100, delay: true },
  });

  const onChange = (direction) => {
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

  return <Slide animation={animation} onChange={onChange} />;
};

export default SlideForm;
