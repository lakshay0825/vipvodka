import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./styles";
import Logo from "../../../assets/logo.png";
import { Col, Container, Row } from "react-grid-system";
import { Paragraph, SubHeading } from "../../../components";

export const SignupSection = () => {
  return (
    <BannerWrapper>
      <div className="logo">
        <a href="/"><img src={Logo} alt="logo" /></a>
      </div>
      <div className="poster-content" style={{width:'100%'}}>
        <div className="bottle_image_wrapper flex alignCenter justifyCenter" style={{paddingTop:'90px'}}>
          <Container style={{width:'100%'}}>
            <Row>
            <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} xxxl={5}>
              <SubHeading style={{fontSize:'40px', color:'#fff', marginBottom:'15px', textAlign:'center'}}>Create Account</SubHeading>
              <Paragraph style={{fontSize:'18px', color:'#fff', textAlign:'center'}}>or use your email account:</Paragraph>
              <div className="form">
                <form>
                  <div className="form-item">
                    <input placeholder="Name" />
                  </div>
                  <div className="form-item">
                    <input placeholder="Email" type="email"/>
                  </div>
                  <div className="form-item">
                    <input placeholder="Password" type="password" />
                  </div>
                  <div className="form-item">
                    <input placeholder="Confrim Password" type="password" />
                  </div>
                  <div className="form-item">
                    <button>Login</button>
                  </div>
                </form>
              </div>
              
            </Col>
            </Row>
          </Container>
        </div>
      </div>
    </BannerWrapper>
  );
};
