import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Disclaimer from "./Disclaimer/Disclaimer";
import Earn from "./Earn/Earn";
import Promotion from "./Promotion/Promotion";
import DownloadURL from "./DownloadURL/Hero";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/download-url" element={<DownloadURL />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;