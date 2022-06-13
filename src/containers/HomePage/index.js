import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { BannerSection } from "./BannerSection";
import { Drinks } from "./Drinks";
import { LogoBanner } from "./LogoBanner";
import { ReachHistory } from "./ReachHistory";
import { RefinedVodka } from "./RefinedVodka";
import { VideoIntroduction } from "./VideoIntroduction";
import { VipVodka } from "./VipVodka";
import { VodkaGold } from "./VodkaGold";
import { VodkaIce } from "./VodkaIce";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <ReachHistory />
      <VipVodka />
      <Drinks />
      <VodkaIce />
      <VodkaGold />
      <RefinedVodka />
      <VideoIntroduction />
      <LogoBanner />
      <Footer />
    </>
  );
};
