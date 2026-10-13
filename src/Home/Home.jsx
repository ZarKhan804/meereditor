
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Internallinks from "./Internallinks";

function Home() {
  return (
    <>
      <Helmet>
        <title>MeerTech | Technology, Digital Solutions & Online Resources</title>
        <meta
          name="description"
          content="Explore MeerTech for technology insights, digital solutions, useful online resources, and practical guides designed to help you learn and grow."
        />
      </Helmet>

      <Hero />
      <Article />
      <Internallinks />
    </>
  );
}

export default Home;
