import styled from "styled-components";
import BG from "../../assets/footerBg.png";
export const FooterWrapper = styled.footer`
  overflow: hidden;
  position: relative;
  .custom-col {
    background-color: #171717;
  }
  .form {
    padding: 40px 0 40px 50px;
    .form-item {
      padding: 10px 0;
      input,
      textarea {
        border: none;
        border-bottom: 1px solid #333;
        width: 100%;
        padding: 14px 0;
        outline: none;
        background-color: transparent;
        color: white;
      }
      button {
        padding: 14px 30px;
        border-radius: 0;
        border: none;
        background: black;
        color: white;
        cursor: pointer;
      }
    }
  }

  .links-col {
    background-image: url(${BG});
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .contact_us_links {
    padding: 40px 50px 40px 50px;

    h2 {
      font-size: 26px;
    }

    .address {
      .inc {
        margin: 0;
        font-style: italic;
        line-height: 21px;
        letter-spacing: 0.8px;
      }
    }

    .call {
      h4 {
        font-style: italic;
        font-size: 17px;
        letter-spacing: 0.8px;
      }
      .numbers p {
        margin: 0;
        font-style: italic;
        line-height: 21px;
        letter-spacing: 0.8px;
      }
    }
  }
  p {
    margin: 0;
  }

  .courtesy {
    position: absolute;
    text-align: center;
    bottom: 0;
    width: 100%;

    .designedby {
      display: inline-block;
      p,
      a {
        color: #969696;
        letter-spacing: 1.4px;
        word-spacing: 1px;
      }
      a {
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
      }
    }

    .copyright {
      display: inline-block;
      p {
        color: white;

        font-size: 16px;
        letter-spacing: 0.9px;
      }
    }
  }

  .flags {
    max-width: 36px;
  }
`;
