
import React from "react";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Clock3,
  WandSparkles,
} from "lucide-react";

const articles = [
  {
    image: "/logo53.jpeg",
    category: "Lightroom Presets",
    title: "How to Use Lightroom Presets to Edit Photos Like a Pro?",
    description:
      "Learn how Lightroom presets work, apply them to portraits and travel photos, and create consistent, professional-looking colors.",
    intro:
      "Lightroom presets are saved editing settings that help you apply a particular look quickly. They are useful for natural portraits, warm outdoor photography, vibrant colors, moody scenes, and cinematic edits.",
    features: [
      "Apply a consistent color style to multiple photos.",
      "Create warm, vibrant, natural, and cinematic looks.",
      "Fine-tune exposure, white balance, contrast, and saturation.",
      "Build a repeatable photo-editing workflow.",
    ],
    sections: [
      {
        heading: "1. What Are Lightroom Presets?",
        text: "A preset is a saved combination of editing adjustments. It may change color, tone, contrast, and detail. Results vary depending on the original photo and lighting.",
      },
      {
        heading: "2. How to Apply a Lightroom Preset",
        text: "Open your photo in Lightroom and find the Presets panel. Preview the available presets and select one that suits your image. Compare the edited version with the original.",
      },
      {
        heading: "3. Adjust Colors for Natural Results",
        text: "Check exposure and white balance first. Adjust highlights, shadows, contrast, and saturation. For portraits, keep skin tones natural.",
      },
      {
        heading: "4. Choose the Right Editing Style",
        text: "Natural presets suit everyday portraits, warm presets complement golden-hour scenes, and moody presets can work well for dramatic landscapes.",
      },
      {
        heading: "5. Export Your Edited Photos",
        text: "Review cropping, sharpness, noise, and color consistency. Choose export dimensions and quality suitable for your website or social platform.",
      },
    ],
    keywords:
      "Lightroom presets, Lightroom photo editing, cinematic presets, Lightroom mobile presets, portrait editing",
    readTime: "7 min read",
  },
  {
    image: "/logo54.jpeg",
    category: "AI Image Prompts",
    title:
      "How to Write the Best AI Image Prompts for Realistic and Cinematic Images?",
    description:
      "Discover how to write better AI image prompts by describing the subject, lighting, composition, mood, environment, and visual style.",
    intro:
      "An AI image prompt is a written description that guides an image generator. Clear prompts describe the subject, setting, lighting, framing, mood, and visual style.",
    features: [
      "Structure prompts around a clear subject and scene.",
      "Describe lighting, camera framing, and composition.",
      "Create prompts for portraits, products, and landscapes.",
      "Improve results with focused revisions.",
    ],
    sections: [
      {
        heading: "1. Describe the Main Subject",
        text: "Explain exactly what the image should show. Describe the subject, pose, clothing, location, background, and action.",
      },
      {
        heading: "2. Add Lighting and Composition",
        text: "Specify soft window light, golden-hour sunlight, dramatic side lighting, a close-up portrait, or a wide landscape.",
      },
      {
        heading: "3. Follow a Simple Prompt Formula",
        text: "Try this structure: subject + action + setting + lighting + composition + mood + style. For example, a cinematic portrait beside a forest trail at sunrise with golden backlight and natural colors.",
      },
      {
        heading: "4. Improve the First Result",
        text: "Review the generated image and identify one or two changes. Specify a simpler background or a different camera framing if needed.",
      },
      {
        heading: "5. Review the Final Image",
        text: "Check faces, hands, text, and fine details before publishing. Review the AI tool's usage and privacy terms before uploading personal images.",
      },
    ],
    keywords:
      "AI image prompts, realistic AI portraits, cinematic AI prompts, AI art ideas, image generator prompts",
    readTime: "7 min read",
  },
  {
    image: "/logo55.jpeg",
    category: "CapCut Tutorial",
    title: "How to Do Cinematic Color Grading in CapCut Step by Step?",
    description:
      "Learn to adjust video colors in CapCut, balance exposure, create cinematic tones, and prepare polished videos for social media.",
    intro:
      "Color grading helps video clips feel consistent and establishes a particular mood. Correct exposure and white balance first, then add a creative look gradually.",
    features: [
      "Correct brightness, contrast, highlights, and shadows.",
      "Experiment with warm, cool, and cinematic tones.",
      "Keep skin tones and colors consistent across clips.",
      "Check the final video before exporting.",
    ],
    sections: [
      {
        heading: "1. Import Your Video Clips",
        text: "Open CapCut, create a project, and import your footage. Select a clip and locate the adjustment controls available in your version.",
      },
      {
        heading: "2. Create a Cinematic Look",
        text: "Aim for a clear subject, controlled highlights, and shadows with visible detail. Experiment with cooler shadows and warmer highlights.",
      },
      {
        heading: "3. Match Colors Across Clips",
        text: "Review the whole sequence. Clips recorded in different lighting may need separate adjustments to keep exposure and white balance consistent.",
      },
      {
        heading: "4. Choose the Right Video Format",
        text: "Vertical 9:16 is commonly used for short-form videos, while 16:9 is common for widescreen YouTube videos.",
      },
      {
        heading: "5. Export and Review",
        text: "Check resolution, frame rate, aspect ratio, and audio. Watch the exported file to catch color changes or other problems.",
      },
    ],
    keywords:
      "CapCut color grading, cinematic video editing, CapCut tutorial, video color correction, CapCut editing tips",
    readTime: "7 min read",
  },
  {
    image: "/logo51.jpeg",
    category: "CapCut Basics",
    title: "How to Do Color Grading in CapCut for Cinematic Videos?",
    description:
      "Learn how to balance footage, adjust color tones, create a cinematic mood, and prepare videos for Reels, TikTok, and YouTube.",
    intro:
      "Color grading helps establish a consistent mood across your video. CapCut includes adjustment tools and, depending on the version, filters to refine exposure, contrast, and color.",
    features: [
      "Adjust brightness, contrast, highlights, and shadows.",
      "Experiment with warm and cool cinematic tones.",
      "Fine-tune saturation, temperature, and tint.",
      "Review color consistency before export.",
    ],
    sections: [
      {
        heading: "1. Start a New CapCut Project",
        text: "Create a project, import your footage, and select a clip. Open the adjustment controls available in your CapCut version.",
      },
      {
        heading: "2. Build a Cinematic Color Grade",
        text: "Balance highlights and shadows while preserving natural skin tones. Test cooler shadows and warmer highlights.",
      },
      {
        heading: "3. Keep Colors Consistent",
        text: "Review the full sequence because clips recorded in different lighting may need different corrections. Avoid excessive saturation.",
      },
      {
        heading: "4. Export for Your Platform",
        text: "Check resolution, frame rate, aspect ratio, and audio. Choose vertical or widescreen dimensions for your intended platform.",
      },
    ],
    keywords:
      "CapCut color grading, cinematic video editing, CapCut for beginners, color correction, video editing tips",
    readTime: "6 min read",
  },
  {
    image: "/logo50.jpeg",
    category: "Photoshop Tutorial",
    title: "How to Do Photo Manipulation in Photoshop? Beginner to Pro",
    description:
      "Learn Photoshop photo manipulation, including subject selection, background replacement, image blending, and creative compositions.",
    intro:
      "Photo manipulation combines photographs and editing techniques to create a new visual scene. Photoshop layers, selections, masks, and adjustment layers help you combine elements while keeping edits flexible.",
    features: [
      "Combine multiple images with layers and masks.",
      "Remove backgrounds and replace unwanted elements.",
      "Create fantasy compositions and double-exposure effects.",
      "Match lighting, shadows, and colors across images.",
    ],
    sections: [
      {
        heading: "1. Choose Images That Work Together",
        text: "Select a subject photo and a background that suit your intended scene. Check resolution, camera angle, perspective, and light direction.",
      },
      {
        heading: "2. Select the Subject",
        text: "Use a suitable selection tool to isolate the subject and refine detailed areas such as hair and clothing. Layer masks let you edit non-destructively.",
      },
      {
        heading: "3. Blend Images Naturally",
        text: "Match brightness, contrast, color temperature, and perspective. Add realistic shadows and use adjustment layers to create a consistent scene.",
      },
      {
        heading: "4. Add Effects and Export",
        text: "Experiment with atmospheric lighting, color grading, or double exposure. Export at a suitable size for your website, social media, or print use.",
      },
    ],
    keywords:
      "Photoshop photo manipulation, photo compositing, background replacement, double exposure, fantasy photo editing",
    readTime: "7 min read",
  },
  {
    image: "/logo52.jpeg",
    category: "AI Photo Editing",
    title: "What Are the Best AI Photo Editing Tools and How Do You Use Them?",
    description:
      "Explore how AI photo editors can enhance image clarity, retouch portraits, remove backgrounds, and create visual effects.",
    intro:
      "AI photo editing can simplify tasks that once required detailed manual work. Depending on the service, tools may improve lighting, remove distractions, separate a subject from the background, or create stylized effects.",
    features: [
      "Improve image clarity and adjust lighting.",
      "Retouch portraits while preserving natural details.",
      "Remove or replace backgrounds with supported tools.",
      "Explore creative effects and image restoration.",
    ],
    sections: [
      {
        heading: "1. Edit a Photo With an AI Tool",
        text: "Choose a tool that supports your task, upload an image you have permission to use, and select an editing feature. Compare the output with the original.",
      },
      {
        heading: "2. Enhance Portraits",
        text: "AI portrait tools may help balance lighting and improve clarity. Keep skin texture natural and check that facial features remain accurate.",
      },
      {
        heading: "3. Replace Backgrounds",
        text: "Inspect edges around hair and clothing. Make sure the replacement scene has compatible lighting, shadows, and color balance.",
      },
      {
        heading: "4. Compare Tools Before Choosing",
        text: "Review export resolution, watermarks, free-plan limits, pricing, and privacy terms before choosing an AI photo editor.",
      },
    ],
    keywords:
      "AI photo editing tools, best AI photo editor, AI portrait enhancement, AI background remover, photo enhancement",
    readTime: "6 min read",
  },
  {
    image: "/logo56.jpeg",
    category: "Trending Photo Editing",
    title:
      "How to Create Trending Photo Edits with Cinematic Colors and AI Tools?",
    description:
      "Discover trending portrait editing techniques, cinematic color grading, lighting adjustments, and AI-assisted photo enhancement.",
    intro:
      "Trending photo edits often combine balanced lighting, strong composition, attractive colors, and a clear subject. Improve the image while keeping the final result natural and suited to your creative style.",
    features: [
      "Create cinematic colors and dramatic portrait styles.",
      "Improve brightness, contrast, and image clarity.",
      "Explore compatible AI editing and masking features.",
      "Prepare polished images for social media.",
    ],
    sections: [
      {
        heading: "1. Start with a Clear Photo",
        text: "Choose a photograph with a sharp subject and useful lighting. A good original image makes it easier to improve color and detail.",
      },
      {
        heading: "2. Adjust Lighting and Contrast",
        text: "Fine-tune exposure, highlights, shadows, whites, and blacks. Preserve detail in bright areas and darker parts of the photograph.",
      },
      {
        heading: "3. Create a Trending Color Style",
        text: "Experiment with temperature, tint, vibrance, and saturation. Keep skin tones realistic and choose colors that suit the scene.",
      },
      {
        heading: "4. Enhance Details Carefully",
        text: "Use compatible AI masking or enhancement tools when they improve the image. Inspect facial details, hair edges, and clothing.",
      },
      {
        heading: "5. Compare and Export",
        text: "Compare the finished photo with the original, check the crop, and export at a suitable resolution for your platform.",
      },
    ],
    keywords:
      "trending photo editing, viral photo edits, cinematic portrait editing, AI photo enhancement, Lightroom editing techniques",
    readTime: "7 min read",
  },
  {
    image: "/logo57.jpeg",
    category: "100+ Lightroom Presets",
    title:
      "How to Use 100+ Lightroom Presets for Cinematic and Professional Photos?",
    description:
      "Explore Lightroom preset styles for portraits, landscapes, urban scenes, vintage photography, and cinematic color grading.",
    intro:
      "Lightroom presets are saved editing adjustments that can help you create a consistent visual style. Different presets suit different lighting conditions and subjects, so use them as a starting point and fine-tune each photo.",
    features: [
      "Explore cinematic, vintage, natural, and moody looks.",
      "Apply saved color adjustments quickly.",
      "Customize exposure, contrast, and white balance.",
      "Maintain consistent colors across a photo collection.",
    ],
    sections: [
      {
        heading: "1. What Are Lightroom Presets?",
        text: "A preset is a saved combination of photo adjustments. Depending on its settings, it may change color, contrast, tone, and detail.",
      },
      {
        heading: "2. Choose a Preset for Your Photo",
        text: "Natural presets can suit everyday portraits, cinematic presets can create a dramatic mood, and vintage presets can give photographs a retro appearance.",
      },
      {
        heading: "3. Apply a Preset in Lightroom",
        text: "Open your photo in Lightroom and locate the Presets panel. Preview the available looks and select a suitable preset.",
      },
      {
        heading: "4. Fine-Tune the Colors",
        text: "Adjust exposure and white balance first. Then refine highlights, shadows, contrast, and saturation while preserving natural skin tones.",
      },
      {
        heading: "5. Keep a Consistent Editing Style",
        text: "When editing several photos, start with a similar preset and adjust each image separately. Review the photos together for consistency.",
      },
      {
        heading: "6. Export Your Final Images",
        text: "Check cropping, sharpness, resolution, and image quality before exporting. Use dimensions suitable for your intended platform.",
      },
    ],
    keywords:
      "100+ Lightroom presets, Lightroom presets, Lightroom mobile presets, cinematic presets, vintage photo presets, portrait presets, photo editing",
    readTime: "8 min read",
  },
  {
    image: "/logo58.jpeg",
    category: "Cinematic Blur Background",
    title:
      "How to Create a Cinematic Blur Background in Videos? Before and After Editing Guide",
    description:
      "Learn how to create a cinematic background blur in videos, keep the main subject clear, and compare the original footage with the edited result.",
    intro:
      "A cinematic blur background helps draw attention to the main subject. Depending on your editor, you may be able to duplicate the clip, blur the lower layer, and keep the subject sharp in the upper layer using a mask or cutout.",
    features: [
      "Create a cinematic background blur effect.",
      "Keep the main subject clear and noticeable.",
      "Compare before-and-after editing results.",
      "Export a polished video for social media.",
    ],
    sections: [
      {
        heading: "1. Import Your Original Video",
        text: "Open your video editor and import the clip. Review the footage and identify the subject you want to keep sharp.",
      },
      {
        heading: "2. Create a Blurred Background",
        text: "If your editor supports layers, duplicate the clip. Apply a blur effect to the lower layer and scale it to fill the frame if needed.",
      },
      {
        heading: "3. Keep the Subject in Focus",
        text: "Use a supported mask, cutout, or background-removal feature on the upper layer. Refine the edges around hair, clothing, and moving objects.",
      },
      {
        heading: "4. Compare Before and After",
        text: "Toggle the effect on and off or compare the original and edited clips. Check that the subject stays sharp throughout the shot.",
      },
      {
        heading: "5. Export the Final Video",
        text: "Choose a suitable resolution and frame rate. Watch the exported video to check for mask glitches, flicker, or distracting edges.",
      },
    ],
    keywords:
      "cinematic blur background, video background blur, before and after video editing, portrait video blur, cinematic video editing",
    readTime: "7 min read",
  },
  {
    image: "/logo59.jpeg",
    category: "VN Vivid Filter Android",
    title:
      "How to Get a Vivid Filter Look on Android with VN Video Editor?",
    description:
      "Learn how to create a vivid, colorful video look on Android using VN Video Editor filters and adjustments while keeping colors balanced.",
    intro:
      "A vivid filter look uses richer colors and clear contrast. VN Video Editor features can vary by version, so start with the controls available on your device and make gradual adjustments to avoid oversaturation.",
    features: [
      "Create brighter, more vibrant video colors.",
      "Adjust contrast, saturation, and tone.",
      "Keep skin tones and highlights natural.",
      "Preview the result before exporting on Android.",
    ],
    sections: [
      {
        heading: "1. Open VN and Import Your Clip",
        text: "Open VN Video Editor on your Android phone, create a project, and select your video. Preview the original clip to judge its color and brightness.",
      },
      {
        heading: "2. Find Filter or Adjustment Controls",
        text: "Select the clip and explore the filter and adjustment options in your version of VN. Try a vivid filter or adjust the image manually if those controls are available.",
      },
      {
        heading: "3. Increase Color Carefully",
        text: "Raise saturation or vibrance gradually and adjust contrast for depth. Avoid pushing colors too far, especially on faces, skies, and greenery.",
      },
      {
        heading: "4. Match the Look Across Clips",
        text: "Preview every clip in the timeline. Lighting may differ between shots, so adjust clips individually to keep the video consistent.",
      },
      {
        heading: "5. Export and Check the Result",
        text: "Choose a suitable resolution and frame rate, then export. Watch the saved file to confirm that colors, details, and audio look right.",
      },
    ],
    keywords:
      "VN Video Editor Android, vivid filter, VN video editing, Android video filters, vivid color grading, VN tutorial",
    readTime: "7 min read",
  },
];

function ArticleCard({ article, index }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="shrink-0 overflow-hidden bg-stone-950">
        <img
          src={article.image}
          alt={article.title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          width="1600"
          height="900"
          className="block aspect-video w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800">
            <WandSparkles size={14} />
            {article.category}
          </span>

          <span className="flex items-center gap-1.5 text-xs text-stone-500">
            <Clock3 size={14} />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-2xl">
          {article.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
          {article.description}
        </p>

        <div className="mt-6 rounded-xl bg-[#f8f7f2] p-4 sm:p-5">
          <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
            <Sparkles size={17} className="shrink-0 text-teal-700" />
            Key Features and Benefits
          </h4>

          <ul className="mt-3 space-y-2.5">
            {article.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-6 text-stone-700"
              >
                <CheckCircle2
                  size={17}
                  className="mt-1 shrink-0 text-teal-700"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <h4 className="text-lg font-extrabold text-slate-900">
            Complete Beginner's Guide
          </h4>

          <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
            {article.intro}
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h4 className="text-base font-bold leading-7 text-slate-900 sm:text-lg">
                {section.heading}
              </h4>

              <p className="mt-2 text-sm leading-7 text-stone-600 sm:text-base">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="border-t border-stone-200 pt-5">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <BookOpen size={16} className="text-teal-700" />
              Related Search Topics
            </h4>

            <p className="mt-2 break-words text-xs leading-6 text-stone-600 sm:text-sm">
              {article.keywords}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-100 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Editing Guide {String(index + 1).padStart(2, "0")}
              </span>

              <a
                href="#meer-editor-articles-heading"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-teal-800 transition hover:text-teal-600"
              >
                Back to Top
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Article() {
  return (
    <section
      aria-labelledby="meer-editor-articles-heading"
      className="bg-[#FAF7EF] py-12 text-slate-900 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-sm">
            <Sparkles size={15} />
            Meer Editor Learning Hub
          </span>

          <h2
            id="meer-editor-articles-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Photo Editing, AI Image Prompts, Trending Edits and Lightroom Presets
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
            Explore practical tutorials for photo editing, AI image generation,
            Photoshop, Lightroom presets, trending photo edits, cinematic video
            backgrounds, VN Video Editor, and CapCut. Choose a topic below to
            find a beginner-friendly guide.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {articles.map((article) => (
              <a
                key={article.category}
                href={`#article-${article.category
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-700 transition hover:border-teal-500 hover:text-teal-800 sm:text-sm"
              >
                {article.title}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-stone-600 sm:gap-5 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal-700" />
              Step-by-step tutorials
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal-700" />
              Practical editing tips
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal-700" />
              Beginner-friendly guides
            </span>
          </div>
        </header>

        {/* All 10 articles: 2 columns on desktop, 1 column on mobile */}
        <div
          className="grid grid-cols-1 items-stretch gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-10"
          style={{ gridAutoRows: "1fr" }}
        >
          {articles.map((article, index) => (
            <div
              key={article.category}
              id={`article-${article.category
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="min-w-0"
            >
              <ArticleCard article={article} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
