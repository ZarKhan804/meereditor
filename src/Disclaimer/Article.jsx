import React from "react";

const Article = () => {
  const sections = [
    {
      title: "1. General Information",
      paragraphs: [
        "Our website provides educational information, tutorials, creative ideas, and resources related to photo editing, video editing, image enhancement, and digital creativity. Our content is intended to help users learn editing techniques and understand different creative tools and workflows.",
        "Although we aim to provide useful and accurate information, we do not guarantee that all content will always be complete, current, or suitable for every user's needs.",
      ],
    },
    {
      title: "2. Educational Content",
      paragraphs: [
        "Our tutorials may cover photo editing, cinematic photo and video editing, Lightroom presets, Photoshop photo manipulation, portrait retouching, color grading, color correction, background removal, background blur, lighting adjustments, photo filters, and before-and-after editing techniques.",
        "Results may vary depending on software versions, devices, original image or video quality, editing skills, and techniques used. Our tutorials are provided for educational and informational purposes and do not guarantee specific results.",
      ],
    },
    {
      title: "3. Third-Party Applications and Tools",
      paragraphs: [
        "Our content may reference third-party applications and services, including CapCut, VN Video Editor, Adobe Photoshop, Adobe Lightroom, AI image generators, and AI photo enhancement tools.",
        "These applications and services belong to their respective owners. Unless explicitly stated, our website is not affiliated with, endorsed by, or officially connected to these companies.",
        "Application names, logos, and trademarks are the property of their respective owners and are mentioned for identification, educational, or informational purposes.",
      ],
    },
    {
      title: "4. AI Image Generation and Enhancement",
      paragraphs: [
        "Our website may provide educational information about AI image generation, AI image prompts, portrait enhancement, photo restoration, background replacement, and other AI-powered creative tools.",
        "AI-generated or enhanced results can vary and may contain inaccuracies or unexpected changes. Users should review generated content carefully and follow the relevant tool's terms, privacy policies, and usage restrictions.",
        "Users are responsible for ensuring that they have the necessary rights and permissions to upload, edit, generate, or publish images and other content.",
      ],
    },
    {
      title: "5. Downloads and External Links",
      paragraphs: [
        "Our website may contain links to external websites, application pages, software resources, cloud storage services, or other third-party platforms. These links are provided for convenience and informational purposes.",
        "We do not control third-party websites, their content, download availability, software files, security practices, or privacy policies. Visiting an external website or downloading a file is at your own discretion and risk.",
        "Before installing any application, users should verify the file's source, review required permissions, scan downloaded files with appropriate security software, and check the application's licensing and usage terms.",
      ],
    },
    {
      title: "6. Copyright and Intellectual Property",
      paragraphs: [
        "All third-party names, logos, images, software references, and trademarks featured on this website belong to their respective owners unless otherwise stated.",
        "Our educational articles and original website content should not be reproduced or redistributed without appropriate permission where required by law. Users are responsible for respecting copyright, licensing terms, and intellectual property rights when using editing tools or publishing creative work.",
      ],
    },
    {
      title: "7. Editing Quality and Export Settings",
      paragraphs: [
        "Our tutorials may explain HD video export, resolution, frame rates, bitrate, aspect ratios, transitions, audio synchronization, and other editing settings.",
        "Final image and video quality depends on several factors, including the original media, editing software, device capabilities, export settings, and the platform where content is shared. We cannot guarantee identical results across all devices and applications.",
      ],
    },
    {
      title: "8. User Responsibility",
      paragraphs: [
        "By using this website, you agree to use the information and resources responsibly and in accordance with applicable laws and third-party terms.",
        "You are responsible for checking the suitability of any application, tool, tutorial, or external resource before using it. You should also protect your personal information and avoid uploading private or sensitive images to services unless you understand their privacy practices.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      paragraphs: [
        "To the extent permitted by applicable law, we are not responsible for losses, damages, installation problems, data loss, or other issues arising from the use of our educational content, third-party applications, external websites, or linked resources.",
        "Nothing in this disclaimer excludes or limits any liability that cannot legally be excluded or limited under applicable law.",
      ],
    },
    {
      title: "10. Updates to This Disclaimer",
      paragraphs: [
        "We may update this disclaimer when our website, content, services, or practices change. Any updated version will be published on this page. We encourage visitors to review this page periodically.",
      ],
    },
    {
      title: "11. Contact Us",
      paragraphs: [
        "If you have questions about this disclaimer or the content published on our website, please contact us through our Contact Us page.",
      ],
    },
  ];

  return (
    <section
      id="disclaimer-article"
      aria-labelledby="disclaimer-heading"
      className="bg-[#FAF7EF] px-4 py-10 text-center text-[#29251F] sm:px-6 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <article className="rounded-2xl border border-[#E7DDCC] bg-white px-5 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-14">
          {/* Header */}
          <header className="mx-auto mb-9 max-w-3xl border-b border-[#F0E9DE] pb-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#947044]">
              Important Information
            </span>

            <h1
              id="disclaimer-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#29251F] sm:text-4xl"
            >
              Disclaimer
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#71685D] sm:text-base">
              Please read this disclaimer carefully before using our website
              and exploring our photo editing, video editing, AI creativity,
              and digital learning resources.
            </p>

            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#947044]" />
          </header>

          {/* All Disclaimer Sections */}
          <div className="space-y-9">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`disclaimer-section-${index + 1}`}
                className="mx-auto max-w-3xl text-center"
              >
                <h2 className="text-xl font-bold leading-snug text-[#29251F] sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-[#D9C4A2]" />

                <div className="mt-4 space-y-3">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-center text-sm leading-7 text-[#71685D] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.title === "11. Contact Us" && (
                  <a
                    href="/contact"
                    className="mx-auto mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#29251F] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#514535]"
                  >
                    Contact Us
                  </a>
                )}
              </section>
            ))}
          </div>

          {/* Final Notice */}
          <footer className="mx-auto mt-10 max-w-3xl border-t border-[#F0E9DE] pt-6">
            <p className="text-center text-sm leading-7 text-[#8B8174]">
              By accessing and using this website, you acknowledge that you
              have read and understood this disclaimer. Please use all
              information and third-party resources responsibly.
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default Article;