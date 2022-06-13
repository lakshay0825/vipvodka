import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./styles";
import GoldenBottle from "../../../assets/goldenBottle.png";
import Logo from "../../../assets/logo.png";

export const BannerSection = () => {
  return (
    <BannerWrapper>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="poster-content">
        <div className="bottle_image_wrapper flex alignCenter justifyCenter">
          <h1 data-aos="fade-right" className="title-style left_title">
            &nbsp; &nbsp; ULTRA
          </h1>
          <img
            data-aos="fade-up"
            className="mh-20"
            src={GoldenBottle}
            alt="vodkaBottle"
          />
          <h1 data-aos="fade-left" className="title-style right-title ">
            PREMIUM
          </h1>
        </div>
      </div>
    </BannerWrapper>
  );
};
