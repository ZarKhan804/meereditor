
import React from "react";
import {
  ArrowUpRight,
  Sparkles,
  Clock3,
  BookOpen,
} from "lucide-react";

const articles = [
  {
    image: "/logo1.jpeg",
    category: "TikTok Trends",
    title: "Meer Editor TikTok Trends: Stay Updated",
    description:
      "Discover trending TikTok sounds, transitions, video styles, and creative ideas. Learn how to follow current trends and use Meer Editor in your video creation workflow.",
    sections: [
      {
        heading: "Discover Current Trends",
        text: "Explore TikTok's For You feed and search for topics in your niche. Notice popular sounds, hooks, and editing styles, then select trends that suit your audience.",
      },
      {
        heading: "Create Original Videos",
        text: "Combine relevant sounds with clear captions, smooth cuts, and engaging visuals. Add your own ideas instead of copying other creators.",
      },
    ],
    keywords:
      "Meer Editor TikTok trends, trending sounds, TikTok editing ideas",
    readTime: "3 min read",
  },
  {
    image: "/logo2.jpeg",
    category: "TikTok Growth",
    title: "Meer Editor: How to Go Viral on TikTok",
    description:
      "Improve your TikTok videos with strong opening hooks, engaging storytelling, and clean editing. No method guarantees viral results, but quality content can help.",
    sections: [
      {
        heading: "Catch Attention Quickly",
        text: "Start with an interesting question, useful tip, or result preview. Keep introductions short and show viewers what they can learn.",
      },
      {
        heading: "Improve Video Quality",
        text: "Remove unnecessary pauses, add readable captions, and use suitable audio. Review your analytics to learn which formats work best for your audience.",
      },
    ],
    keywords:
      "Meer Editor how to go viral on TikTok, TikTok growth, viral video tips",
    readTime: "3 min read",
  },
  {
    image: "/logo3.jpeg",
    category: "Photo Editing",
    title: "Meer Editor: How to Enhance Photo Quality",
    description:
      "Learn simple techniques to improve image clarity, brightness, color balance, and sharpness for cleaner social media photos and creative projects.",
    sections: [
      {
        heading: "Adjust Lighting and Color",
        text: "Balance brightness, highlights, shadows, and white balance. Make small adjustments to preserve natural colors and important details.",
      },
      {
        heading: "Export Carefully",
        text: "Choose suitable image dimensions and avoid repeatedly compressing files. Editing can improve appearance but cannot always restore missing details.",
      },
    ],
    keywords:
      "Meer Editor enhance photo quality, photo enhancement, image clarity",
    readTime: "3 min read",
  },
  {
    image: "/logo4.jpeg",
    category: "Content Strategy",
    title: "Meer Editor TikTok Content Strategy: Grow Faster",
    description:
      "Build a practical content plan with useful video ideas, consistent posting, and a clear niche. Use audience insights to improve your creative strategy.",
    sections: [
      {
        heading: "Choose Your Niche",
        text: "Decide which audience you want to help and what your videos will offer. Tutorials, quick tips, and demonstrations are useful recurring formats.",
      },
      {
        heading: "Review Your Performance",
        text: "Track watch time, comments, saves, and shares when analytics are available. Use the results to refine future content rather than chasing every trend.",
      },
    ],
    keywords:
      "Meer Editor TikTok content strategy, TikTok growth tips, content planning",
    readTime: "3 min read",
  },
  {
    image: "/logo5.jpeg",
    category: "AI Video Creation",
    title: "Meer Editor: Create AI Avatar Videos",
    description:
      "Explore how AI avatars can present tutorials, explain ideas, and support video creation. Learn the basic steps from scripting to reviewing your final video.",
    sections: [
      {
        heading: "Prepare Your Script",
        text: "Write a short script with one clear message. Use natural sentences and organize the information into simple, easy-to-follow sections.",
      },
      {
        heading: "Review AI Results",
        text: "Check pronunciation, captions, and timing. Respect likeness and voice permissions, and check the AI tool's terms before publishing.",
      },
    ],
    keywords:
      "Meer Editor AI avatar video, AI video creation, talking avatar guide",
    readTime: "3 min read",
  },
  {
    image: "/logo6.jpeg",
    category: "Pro Editing",
    title: "Meer Editor: How to Edit Photos Like a Pro",
    description:
      "Discover a simple photo editing workflow covering composition, exposure, color correction, and export settings for polished-looking images.",
    sections: [
      {
        heading: "Fix Composition First",
        text: "Straighten horizons, crop distractions, and make the main subject easy to notice. Strong composition improves a photo before advanced effects.",
      },
      {
        heading: "Use Natural Adjustments",
        text: "Balance exposure and colors before applying filters. Compare the final result with the original to avoid excessive sharpening or saturation.",
      },
    ],
    keywords:
      "Meer Editor photo editing like a pro, professional photo editing, color correction",
    readTime: "3 min read",
  },
  {
    image: "/logo7.jpeg",
    category: "Video Editing Course",
    title: "Video Editing Full Course: Beginner to Pro",
    description:
      "Understand the basics of editing, including importing clips, trimming footage, arranging scenes, improving audio, adding titles, and exporting videos.",
    sections: [
      {
        heading: "Learn Timeline Editing",
        text: "Organize your footage and arrange clips into a clear sequence. Practise trimming and cutting before moving on to advanced transitions.",
      },
      {
        heading: "Finish and Export",
        text: "Balance voice and music, add readable titles, and choose suitable resolution and aspect ratio for your destination platform.",
      },
    ],
    keywords:
      "video editing full course beginner to pro, editing tutorial, video editing basics",
    readTime: "4 min read",
  },
  {
    image: "/logo8.jpeg",
    category: "Free AI Tools",
    title: "Best Free AI Tools for Editing",
    description:
      "Explore AI editing tools for image enhancement, automatic captions, background removal, and audio cleanup. Compare features before choosing a tool.",
    sections: [
      {
        heading: "Explore Image and Video Tools",
        text: "Try tools that help with image cleanup, resizing, captions, and video reframing. Check the output carefully because results vary by project.",
      },
      {
        heading: "Check Free Plan Limits",
        text: "Review export quality, watermarks, usage credits, and privacy policies. Free features and pricing can change, so confirm the latest terms.",
      },
    ],
    keywords:
      "best free AI tools for editing, AI photo editor, AI video editing tools",
    readTime: "3 min read",
  },
  {
    image: "/logo9.jpeg",
    category: "CapCut Tutorial",
    title: "How to Add Effects in CapCut",
    description:
      "Learn how to choose visual effects, adjust their timing, and combine them with clean transitions and readable captions for engaging videos.",
    sections: [
      {
        heading: "Choose the Right Effect",
        text: "Open your project and explore the effects available in your CapCut version. Preview each option and select effects that support your video.",
      },
      {
        heading: "Review Before Exporting",
        text: "Adjust timing and intensity where available. Play the full video to check transitions, text, and audio before exporting.",
      },
    ],
    keywords:
      "how to add effects in CapCut, CapCut effects tutorial, video transitions",
    readTime: "3 min read",
  },
  {
    image: "/logo10.jpeg",
    category: "Short Video Tips",
    title: "Meer Editor: Tips for Creating Better Short Videos",
    description:
      "Create clearer short videos with a strong opening, focused message, suitable audio, and editing that keeps viewers engaged without distractions.",
    sections: [
      {
        heading: "Plan One Clear Message",
        text: "Decide what viewers should learn or understand. Organize your video around that idea and remove details that do not add value.",
      },
      {
        heading: "Polish Your Final Video",
        text: "Trim unnecessary pauses, add readable captions, and check the aspect ratio. Watch the finished video on a phone before publishing.",
      },
    ],
    keywords:
      "Meer Editor short video tips, short-form video editing, social media video creation",
    readTime: "3 min read",
  },
];

const Article = () => {
  return (
    <section
      aria-labelledby="meer-editor-articles-heading"
      className="bg-[#FAF7EF] py-10 text-gray-900 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-700">
            <Sparkles size={13} />
            Meer Editor Learning Hub
          </span>

          <h2
            id="meer-editor-articles-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            Explore Our Editing Guides
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Explore tutorials on TikTok trends, photo editing, AI video
            creation, content strategy, and creative tools.
          </p>
        </div>

        {/* Responsive Article Grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e6e0d4] bg-white/85 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
            >
              {/* Full Image: No Cropping */}
              <div className="flex h-36 w-full items-center justify-center overflow-hidden bg-[#f1eee6] p-1">
                <img
                  src={article.image}
                  alt={article.title}
                  loading={index < 5 ? "eager" : "lazy"}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold text-teal-800">
                    {article.category}
                  </span>

                  <span className="flex items-center gap-1 text-[10px] text-gray-500">
                    <Clock3 size={11} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-extrabold leading-snug text-slate-900 transition group-hover:text-teal-700">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs leading-[1.7] text-gray-600">
                  {article.description}
                </p>

                {/* Short Article Sections */}
                <div className="mt-3 space-y-3 border-t border-gray-100 pt-3">
                  {article.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="text-xs font-bold leading-5 text-slate-800">
                        {section.heading}
                      </h4>

                      <p className="mt-1 text-xs leading-[1.7] text-gray-600">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Related Keywords */}
                <div className="mt-auto border-t border-gray-100 pt-3">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    Related topics
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-teal-800">
                    {article.keywords}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-teal-700">
                    <span className="flex items-center gap-1">
                      <BookOpen size={12} />
                      Guide {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
