import { Col, Container, Row } from "react-grid-system";
import { FooterWrapper } from "./styles";
import US from "../../assets/flags/us.png";
import FR from "../../assets/flags/bl.png";
import ENG from "../../assets/flags/gb-eng.png";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container fluid>
        <Row>
          <Col
            className="custom-col"
            xs={12}
            sm={12}
            md={6}
            lg={5}
            xl={5}
            xxl={5}
            xxxl={5}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8} xxxl={8}>
                <div className="form">
                  <form>
                    <div className="form-item">
                      <input placeholder="Your Name" />
                    </div>
                    <div className="form-item">
                      <input placeholder="Your Email" type="email" />
                    </div>
                    <div className="form-item">
                      <input placeholder="Subject" type="email" />
                    </div>
                    <div className="form-item">
                      <textarea rows={3} placeholder="Message" />
                    </div>
                    <div className="form-item">
                      <button>SEND</button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            className="links-col"
            xs={12}
            sm={12}
            md={6}
            lg={7}
            xl={7}
            xxl={7}
            xxxl={7}
          >
            <div className="contact_us_links">
              <div className="title">
                <h2 className="uppercase mb-20 textWhite">Contact us</h2>
              </div>
              <div className="address">
                <p className="inc textWhite">
                  Merhav Holdings Inc. <br /> 2999 NE 191 street, Miami FL 33180
                </p>
              </div>
              <div className="call">
                <h4 className="textWhite">Call Us</h4>

                <div className="numbers flex alignCenter mb-20 textWhite">
                  <img className=" mr-10 flags" src={US} alt="usa-country" />
                  <p>+ 1 312 684 2954</p>
                </div>
                <div className="numbers flex alignCenter mb-20 textWhite">
                  <img className=" mr-10 flags" src={FR} alt="usa-country" />
                  <p>+ 33 97 00 19 205</p>
                </div>
                <div className="numbers flex alignCenter mb-20 textWhite">
                  <img className=" mr-10 flags" src={ENG} alt="usa-country" />
                  <p>+ 44 20 3769 8981</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="courtesy">
        <div className="copyright">
          <p>
            © Copyright 2022. All Rights Reserved.{" "}
            <span className="designedby">
              Designed & developed by |{" "}
              <a href="http://www.thewebart.co">The Web Art</a>
            </span>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
};
