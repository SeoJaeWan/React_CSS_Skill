import styled from "styled-components";

export const BannerContainer = styled.aside`
  position: fixed;
  display: flex;

  justify-content: space-between;

  width: 100%;
  padding: 0 15%;

  .banner-title {
    margin: 0;
    font-size: 40px;
  }
`;

export const BannerNav = styled.nav`
  .banner-menu {
    display: flex;
    list-style: none;

    padding: 0;
    margin: 0;

    font-size: 18px;
    text-transform: uppercase;
  }

  .banner-menu-items {
    height: 54px;

    overflow: hidden;
    transition: all 1s;
  }

  .banner-menu-items:hover {
    height: 216px;
  }

  .banner-menu-items > a {
    height: 54px;

    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
