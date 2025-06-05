// src/components/Navbar.tsx

import VideoHero from "./components/custom/VideoHero";
import heroVideo from "./assets/videos/hero-loop.mp4";
import FeatureCards from "./components/custom/FeatureCards";
import InvestorsSection from "./components/custom/InvestorsSection";
import Footer from "./components/custom/Footer";
import TrustMarquee from "./components/custom/TrustMarquee";
// import heroPoster from "./assets/images/hero-poster.jpg";
import Navbar from "./components/custom/Navbar";
import { MagicCard } from "./components/magicui/magic-card";

export default function App() {
  return (
    <div>
      <Navbar />
      <VideoHero
        videoSrc={heroVideo}
        // poster={heroPoster}
        title="Where market meets its tangent"
        subtitle="TangentX specializes in cutting-edge algorithmic strategies, powered by advanced mathematics and large-scale data analysis."
      />
    <div className="bg-gradient-to-b from-white via-blue-10 to-blue-100">

      <MagicCard gradientColor={"#D9D9D955"} className="p-0  flex-row">
        <FeatureCards />
        <InvestorsSection />
      </MagicCard>

    </div>
    <Footer />
  </div>
  );
}
