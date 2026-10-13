
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Internallinks from "./Internallinks";

function Promotion() {
  return (
    <>
      <Helmet>
        <title>Promotions & Offers | MeerTech</title>
        <meta
          name="description"
          content="Explore MeerTech promotions, featured updates, and highlighted resources to discover useful information and available opportunities."
        />
      </Helmet>

      <Hero />
      <Article />
      <Internallinks />
    </>
  );
}

export default Promotion;
