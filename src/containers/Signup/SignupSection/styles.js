import styled from "styled-components";
import Banner1 from "../../../assets/login.jpg";

export const BannerWrapper = styled.section`
  background-image: url(${Banner1});
  min-height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .poster-content {
    padding: 100px 0;

    .form {

      .form-item {
        padding: 10px 0;
        input,
        textarea, select {
          border: none;
          width: 100%;
          padding: 14px 10px;
          outline: none;
          background-color: #fff;
          color: white;
          font-family: 'Oswald', sans-serif;
          font-size: 18px;
        }
        button {
          padding: 14px 30px;
          border-radius: 0;
          border: 1px solid #efbb62;
          background: transparent;
          color: white;
          cursor: pointer;
        }
        .custom-checkbox {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 15px;
          color:#fff;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked {
              ~ {
                .checkmark {
                  &:after {
                    display: block;
                  }
                }
              }
            }
          }
          &:hover {
            input {
              ~ {
                .checkmark {
  
                }
              }
            }
          }
          .checkmark {
            &:after {
              left: 9px;
              top: 5px;
              width: 5px;
              height: 10px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: transparent;
          border: solid 1px #efbb62;
          &:after {
            content: "";
            position: absolute;
            display: none;
          }
        }
  
      }
    }
    
  }

  .title-style {
    font-size: 128px;
    color: #efbb62;
    margin: 0;
  }
  @media (max-width: 992px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style,.subtitle-style{ {
        font-size: 90px;
      }
    }
  }
  @media (max-width: 895px) {
    .bottle_image_wrapper {
      img {
        max-width: 100px;
      }
      .title-style,.subtitle-style{ {
        font-size: 80px;
      }
    }
  }
  @media (max-width: 651px) {
    .bottle_image_wrapper {
      img {
        max-width: 80px;
      }
      .title-style,.subtitle-style{ {
        font-size: 60px;
      }
    }
  }
  @media (max-width: 500px) {
    .bottle_image_wrapper {
      img {
        max-width: 50px;
      }
      .title-style,.subtitle-style{ {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 300px) {
    .bottle_image_wrapper {
      img {
        max-width: 35px;
      }
      .title-style,.subtitle-style{ {
        font-size: 30px;
      }
    }
    .logo img {
      max-width: 100px;
    }
  }
`;
