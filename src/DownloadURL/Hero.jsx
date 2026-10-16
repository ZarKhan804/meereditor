import React from "react";
import { Helmet } from "react-helmet-async";
import DownloadURL from "./DownloadURL";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Download URLs & Resources | MeerTech</title>
        <meta
          name="description"
          content="Explore MeerTech download URLs and useful digital resources. Find helpful links, discover available downloads, and access resources in one convenient place."
        />
      </Helmet>

      <DownloadURL />
    </>
  );
};

export default Hero;