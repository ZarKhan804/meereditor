
import React from "react";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Target,
} from "lucide-react";

const topics = [
  "Photo Editing",
  "Video Editing",
  "Lightroom Presets",
  "Cinematic Photo Editing",
  "Cinematic Video Editing",
  "AI Image Generation",
  "AI Image Prompts",
  "AI Photo Enhancement",
  "Photoshop Photo Manipulation",
  "Background Removal & Replacement",
  "Background Blur Effects",
  "Color Grading & Color Correction",
  "CapCut Editing Tutorials",
  "VN Video Editor Tutorials",
  "Vivid Filters & Color Effects",
  "Portrait Retouching",
  "Lighting & Contrast Adjustment",
  "Photo Filters & Effects",
  "Before-and-After Editing",
  "HD Video Export & Quality Settings",
];

const Hero = () => {
  return (
    <section
      aria-labelledby="about-meer-editor"
      className="bg-[#FAF7EF] px-4 py-10 text-[#29251F] sm:px-6 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Introduction */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DCCBAE] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#947044]">
            <Sparkles size={15} />
            Welcome to Meer Editor
          </span>

          <h1
            id="about-meer-editor"
            className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Photo Editing, Video Editing
            <span className="block text-[#947044]">
              & Digital Creativity
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#625B50] sm:text-base sm:leading-8">
            Meer Editor provides practical tutorials, creative editing
            techniques, AI image resources, Lightroom presets, and
            video editing guides to help beginners, photographers,
            and content creators improve their creative skills.
          </p>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-[#625B50] sm:text-base">
            Explore our learning topics below and discover the
            tools, techniques, and inspiration you need to create
            better photos and videos.
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#meer-editor-learning-cards"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#29251F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#514535]"
            >
              Explore Learning Topics
              <ArrowRight size={16} />
            </a>

            <a
              href="#meer-editor-mission"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CFC2AB] px-6 py-3 text-sm font-semibold text-[#29251F] transition hover:bg-[#EEE7D8]"
            >
              <Target size={16} />
              Our Mission
            </a>
          </div>
        </div>

        {/* All 20 learning topics */}
        <div className="mt-9 rounded-2xl border border-[#E5DCCB] bg-white/80 p-4 sm:mt-10 sm:p-6 lg:p-7">
          <div className="mb-5 flex items-center justify-center gap-2 text-center">
            <BookOpen size={20} className="shrink-0 text-[#947044]" />

            <h2 className="text-lg font-extrabold sm:text-xl">
              Our Learning Topics & Tutorials
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {topics.map((topic, index) => (
              <a
                key={topic}
                href="#meer-editor-learning-cards"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5DCCB] bg-[#FAF7EF] px-3 py-2 text-xs font-medium text-[#514535] transition hover:border-[#947044] hover:bg-[#EEE7D8] sm:text-sm"
              >
                <span className="text-[10px] font-bold text-[#947044]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {topic}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
