
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Internallinks from "./Internallinks";

function Earn() {
  return (
    <>
      <Helmet>
        <title>Earn | MeerTech</title>
        <meta
          name="description"
          content="Explore MeerTech's earn section for helpful information, online earning guidance, digital opportunities, and practical resources for learning."
        />
      </Helmet>

      <Hero />
      <Article />
      <Internallinks />
    </>
  );
}

export default Earn;
