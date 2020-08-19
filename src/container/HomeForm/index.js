import React, { useEffect, useState } from "react";

import Home from "../../component/Home";

const HomeForm = () => {
  const [homeContent, setHomeContent] = useState([
    {
      id: 0,
      content: "React CSS Skill Page에 오신 것을 다시 한번 환영합니다!",
      class: "home-content-view",
    },
    {
      id: 1,
      content: "React 로 애니메이션, CSS 공부한 것을 정리한 Page 입니다!",
      class: "",
    },
    {
      id: 2,
      content:
        "꾸준히 업데이트 하는 것을 목표로 하고 있습니다! 재밋게 보시길 바랍니다!",
      class: "",
    },
    {
      id: 3,
      content: "참고로 지금 보이는 슬라이드는 Carousel 슬라이드라고 불립니다. ",
      class: "",
    },
  ]);

  useEffect(() => {
    let count = 0;

    setInterval(() => {
      let beforeCount = count;
      count = (count + 1) % 4;
      setHomeContent((prev) =>
        prev.map((item) => {
          if (item.id === count) return { ...item, class: "home-content-able" };
          else if (item.id === beforeCount)
            return { ...item, class: "home-content-disable" };
          else return { ...item };
        })
      );
    }, 5000);
  }, []);
  return <Home content={homeContent} />;
};

export default HomeForm;
