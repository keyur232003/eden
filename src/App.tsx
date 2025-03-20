import { useState } from "react";
import "./App.css";
import Home from "./pages/home/page";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Common Components/navbar";
import Footer from "./Common Components/footer";
import ArtWorks from "./pages/artworks/page";
import InspireMe from "./pages/Inspire me/page";
import Artists from "./pages/artists/page";
import Galleries from "./pages/galleries/page";
import EventExhibitions from './pages/exhibitions & events/page';
import Magazine from './pages/magazine/page'
import About from './pages/about/page'
import ContactUs from './pages/contact/page'
import GallerySingle from './pages/gallery single/page'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artworks" element={<ArtWorks />} />
        <Route path="/inspire_me" element={<InspireMe />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/event-exhibitions" element={<EventExhibitions />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/galleries/:id" element={<GallerySingle />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
