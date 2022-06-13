import styled from "styled-components";
import Banner1 from "../../../assets/slider.jpg";

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .poster-content {
    padding: 100px 0;
  }

  .title-style {
    font-size: 100px;
    margin: 0;
  }
  .left_title {
    margin-top: -100px;
    text-align: right;
  }
  .right-title {
    margin-top: 100px;
  }

  @media (max-width: 992px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style {
        font-size: 90px;
      }
    }
  }
  @media (max-width: 895px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style {
        font-size: 80px;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 651px) {
    .bottle_image_wrapper {
      img {
        max-width: 80px;
      }
      .title-style {
        font-size: 60px;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 500px) {
    .bottle_image_wrapper {
      img {
        max-width: 50px;
      }
      .title-style {
        font-size: 40px;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 300px) {
    .bottle_image_wrapper {
      img {
        max-width: 35px;
      }
      .title-style {
        font-size: 30px;
        font-weight: 600;
      }
    }
    .logo img {
      max-width: 100px;
    }
  }
`;
