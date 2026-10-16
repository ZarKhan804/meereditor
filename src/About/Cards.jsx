
import React from "react";
import {
  Camera,
  Video,
  SlidersHorizontal,
  Clapperboard,
  Film,
  WandSparkles,
  MessageSquareText,
  ImagePlus,
  Layers,
  Scan,
  Aperture,
  Palette,
  Scissors,
  Smartphone,
  Paintbrush,
  UserRound,
  Sun,
  Image,
  Images,
  MonitorPlay,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

const learningTopics = [
  {
    title: "Photo Editing",
    icon: Camera,
    description:
      "Learn photo enhancement, color correction, retouching, and creative techniques to make your images look polished and professional.",
  },
  {
    title: "Video Editing",
    icon: Video,
    description:
      "Explore video trimming, transitions, audio synchronization, effects, and editing workflows for engaging video content.",
  },
  {
    title: "Lightroom Presets",
    icon: SlidersHorizontal,
    description:
      "Discover Lightroom presets, beautiful color tones, consistent editing styles, and practical techniques for faster photo editing.",
  },
  {
    title: "Cinematic Photo Editing",
    icon: Clapperboard,
    description:
      "Create cinematic photos using atmospheric colors, balanced contrast, dramatic lighting, and professional finishing techniques.",
  },
  {
    title: "Cinematic Video Editing",
    icon: Film,
    description:
      "Learn cinematic storytelling, smooth transitions, visual pacing, and creative color styles for compelling video projects.",
  },
  {
    title: "AI Image Generation",
    icon: WandSparkles,
    description:
      "Turn creative ideas into digital artwork using AI image generators, visual descriptions, and effective generation workflows.",
  },
  {
    title: "AI Image Prompts",
    icon: MessageSquareText,
    description:
      "Write effective AI prompts using subjects, lighting, composition, environments, moods, and distinctive visual styles.",
  },
  {
    title: "AI Photo Enhancement",
    icon: ImagePlus,
    description:
      "Explore AI tools for improving image clarity, restoring details, enhancing portraits, and refining photo quality.",
  },
  {
    title: "Photoshop Photo Manipulation",
    icon: Layers,
    description:
      "Combine images, work with layers and masks, replace elements, and create imaginative Photoshop compositions.",
  },
  {
    title: "Background Removal & Replacement",
    icon: Scan,
    description:
      "Learn to remove unwanted backgrounds and replace them with clean, realistic scenes while preserving natural subject edges.",
  },
  {
    title: "Background Blur Effects",
    icon: Aperture,
    description:
      "Create depth-of-field effects, soften distracting backgrounds, and bring attention to the main subject of your photographs.",
  },
  {
    title: "Color Grading & Color Correction",
    icon: Palette,
    description:
      "Master exposure, white balance, contrast, color correction, and creative grading for balanced photos and videos.",
  },
  {
    title: "CapCut Editing Tutorials",
    icon: Scissors,
    description:
      "Explore CapCut tutorials covering transitions, effects, captions, cinematic color grading, and video export settings.",
  },
  {
    title: "VN Video Editor Tutorials",
    icon: Smartphone,
    description:
      "Learn mobile video editing with VN, including timeline controls, transitions, music synchronization, and visual effects.",
  },
  {
    title: "Vivid Filters & Color Effects",
    icon: Paintbrush,
    description:
      "Experiment with vibrant filters, creative color combinations, and expressive effects to develop your own visual style.",
  },
  {
    title: "Portrait Retouching",
    icon: UserRound,
    description:
      "Improve portraits with natural skin retouching, subtle corrections, balanced skin tones, and detailed finishing techniques.",
  },
  {
    title: "Lighting & Contrast Adjustment",
    icon: Sun,
    description:
      "Improve your images by adjusting brightness, highlights, shadows, exposure, and contrast without losing important details.",
  },
  {
    title: "Photo Filters & Effects",
    icon: Image,
    description:
      "Discover photo filters, creative effects, and practical editing techniques for attractive and distinctive images.",
  },
  {
    title: "Before-and-After Editing",
    icon: Images,
    description:
      "Compare original and edited images to understand how retouching, color adjustments, and enhancement transform photographs.",
  },
  {
    title: "HD Video Export & Quality Settings",
    icon: MonitorPlay,
    description:
      "Understand video resolution, frame rates, bitrate, aspect ratios, and export settings for high-quality video playback.",
  },
];

function LearningCard({ topic, index }) {
  const Icon = topic.icon;

  return (
    <article
      id={`learning-topic-${index + 1}`}
      className="group flex h-full flex-col items-center rounded-2xl border border-[#E7DDCC] bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8AD80] hover:shadow-lg sm:px-6"
    >
      {/* Centered icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7D8BD] bg-[#FAF4E8] text-[#947044] transition-all duration-300 group-hover:border-[#29251F] group-hover:bg-[#29251F] group-hover:text-white">
        <Icon size={26} strokeWidth={1.7} />
      </div>

      {/* Topic number */}
      <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A38A65]">
        Topic {String(index + 1).padStart(2, "0")}
      </span>

      {/* Centered title */}
      <h3 className="mt-2 min-h-[3.5rem] text-lg font-extrabold leading-snug text-[#29251F]">
        {topic.title}
      </h3>

      {/* Centered description */}
      <p className="mt-3 flex-1 text-sm leading-7 text-[#71685D]">
        {topic.description}
      </p>

      {/* Short, balanced buttons */}
      <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2 border-t border-[#F0E9DE] pt-5">
        <a
          href={`#learning-topic-${index + 1}`}
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-[#29251F] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#514535] sm:text-sm"
        >
          Explore
          <ArrowUpRight size={14} />
        </a>

        <a
          href="#meer-editor-articles"
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-[#D9CBB5] bg-white px-4 py-2 text-xs font-semibold text-[#514535] transition hover:border-[#947044] hover:bg-[#FAF4E8] sm:text-sm"
        >
          Tutorials
          <BookOpen size={14} />
        </a>
      </div>
    </article>
  );
}

export default function Cards() {
  return (
    <section
      id="meer-editor-learning-cards"
      aria-labelledby="learning-cards-heading"
      className="bg-[#FAF7EF] px-4 py-10 text-[#29251F] sm:px-6 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#947044]">
            Learn • Create • Improve
          </span>

          <h2
            id="learning-cards-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            Explore Our Learning Topics
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#71685D] sm:text-base">
            Discover practical tutorials, creative techniques, and
            useful resources to improve your photo editing, video
            editing, and digital creativity skills.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#947044]" />
        </header>

        {/* Responsive grid: 1 mobile, 2 tablet, 3 desktop, 4 wide screens */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {learningTopics.map((topic, index) => (
            <LearningCard
              key={topic.title}
              topic={topic}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
