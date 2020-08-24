import { createGlobalStyle } from "styled-components";
/* 영어 불가능 */
const font = createGlobalStyle`
    @font-face {
        font-family: "Raleway";
        src: url(${
          require("../../assets/fonts/Raleway/Raleway-VariableFont_wght.ttf")
            .default
        });
    }

    @font-face {
        font-family: "OpenSans";
        src: url(${
          require("../../assets/fonts/OpenSans/OpenSans-Regular.ttf").default
        });
    }

    @font-face {
        font-family: "Oswald";
        src: url(${
          require("../../assets/fonts/Oswald/Oswald-VariableFont_wght.ttf")
            .default
        });
    }

    /* font size */
    .fs-tiny {
      font-size: 12px
    }

    .fs-small {
      font-size: 14px
    }

    .fs-base {
      font-size: 16px
    }

    .fs-medium {
      font-size: 18px
    }

    .fs-large {
      font-size: 20px
    }

    .fs-h2 {
      font-size : 36px
    }

    .fs-h1 {
      font-size: 40px;
    }

    /* font weight */
    .fw-light {
    font-weight: 300
    }

    .fw-regular {
        font-weight: 400
    }

    .fw-medium {
        font-weight: 500
    }

    .fw-bold {
        font-weight: 700
    }
`;

export default font;
