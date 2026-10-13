
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Internallinks from "./Internallinks";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact MeerTech | Get in Touch</title>
        <meta
          name="description"
          content="Contact MeerTech for website inquiries, general questions, feedback, and information about our digital resources and services."
        />
      </Helmet>

      <Hero />
      <Article />
      <Internallinks />
      <ContactForm/>
    </>
  );
}

export default Contact;
