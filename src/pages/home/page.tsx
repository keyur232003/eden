import React, { useEffect } from "react";
import Navbar from "../../Common Components/navbar";
import Hero_card from "../../Common Components/hero_card";
import Curator_picks from "../../Common Components/curator_picks";
import Art_words_section from "../../Common Components/art_words_section";
import ArtAdvisory from "../../Common Components/art_advisory";
import Services from "../../Common Components/services";
import Highlight_art_work from "../../Common Components/highlight_art_work";
import ArtistCard from "../../Common Components/artist_card";
import News_letter from "../../Common Components/news_letter";
import Art_advisory_banner from "../../Common Components/art_advisory_banner";
import SlickSlider from "../../Common Components/slider";
import InfiniteSlider from "../../Common Components/slider";
import Footer from "../../Common Components/footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      // left: 0,
      behavior: "smooth", // Optional: makes the scroll smooth
    });
    console.log("test");
  }, [location]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Hero_card />
        <Curator_picks />
        <Art_words_section />
        <ArtAdvisory />
        <Services />
        <Highlight_art_work />
        <ArtistCard />
        <News_letter />
        <Art_advisory_banner />
        <InfiniteSlider />
        <Footer />
      </div>
    </>
  );
};

export default Home;
