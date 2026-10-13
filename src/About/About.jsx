
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Internallinks from "./Internallinks";

function About() {
  return (
    <>
      <Helmet>
        <title>About MeerTech | Our Mission & Digital Resources</title>
        <meta
          name="description"
          content="Learn about MeerTech, our mission, our approach to technology and digital resources, and how we aim to provide useful information for our visitors."
        />
      </Helmet>

      <Hero />
      <Article />
      <Internallinks />
    </>
  );
}

export default About;
