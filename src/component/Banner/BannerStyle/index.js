import styled from "styled-components";

export const BannerContainer = styled.aside`
  position: fixed;
  display: flex;

  justify-content: space-between;

  width: 100%;

  left: 0;
  top: 0;

  padding: 0 15%;
  background-color: #fff;

  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

  z-index: 3;

  .banner-title {
    margin: 0;

    line-height: 1.5;
  }
`;

export const BannerNav = styled.nav`
  .banner-menu {
    display: flex;
    list-style: none;

    margin: 0;

    text-transform: uppercase;
  }

  .banner-menu-item > a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 54px;

    padding: 0 20px;
  }
`;
