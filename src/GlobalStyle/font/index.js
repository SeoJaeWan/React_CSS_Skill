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
`;

export default font;
