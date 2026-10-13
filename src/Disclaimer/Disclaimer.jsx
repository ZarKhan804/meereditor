
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Internallinks from "./Internallinks";

function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | MeerTech</title>
        <meta
          name="description"
          content="Read the MeerTech disclaimer to understand the purpose of our website content, its limitations, and important information about using our resources."
        />
      </Helmet>

      <Hero />
      <Article />
      <Internallinks />
    </>
  );
}

export default Disclaimer;
