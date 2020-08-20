import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* 영어 불가능 */
  @font-face {
      font-family: "BlackHanSans";
      src: url(${
        require("../assets/fonts/Black-Han-Sans/BlackHanSans.ttf").default
      });
  }

  @font-face {
      font-family: "NotoSansKR";
      src: url(${
        require("../assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf").default
      });
  }
  * { 
    box-sizing: border-box;
  }

  body{
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  section {
    width: 70%;

    margin: 0 auto;

  }
  `;

export default GlobalStyle;
