import React, { useState } from 'react'
import {
  Camera,
  Video,
  SlidersHorizontal,
  Clapperboard,
  Sparkles,
  WandSparkles,
  Image,
  ScanFace,
  Eraser,
  Layers,
  Palette,
  Scissors,
  Sun,
  Aperture,
  MonitorPlay,
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react'

const articles = [
  {
    icon: Camera,
    category: 'PHOTO EDITING',
    title: 'Photo Editing for Beginners',
    description: 'Learn to transform ordinary photographs into beautiful, professional-looking images.',
    content: 'Photo editing improves the appearance, color, lighting, and quality of your images. Start by adjusting exposure, contrast, highlights, shadows, and white balance. Small, balanced adjustments often create more natural results than applying too many effects.',
    points: ['Adjust brightness and contrast', 'Improve colors and white balance', 'Crop and straighten photographs', 'Export high-quality images'],
  },
  {
    icon: Video,
    category: 'VIDEO EDITING',
    title: 'Video Editing Complete Guide',
    description: 'Learn essential techniques for cutting clips, arranging scenes, transitions, and creating engaging videos.',
    content: 'Good video editing combines storytelling, timing, sound, and visual consistency. Organize your footage, remove unnecessary sections, and arrange clips in a logical sequence. Balance the audio and export using suitable quality settings.',
    points: ['Trim and arrange video clips', 'Use transitions naturally', 'Add music and sound effects', 'Export videos in the correct format'],
  },
  {
    icon: SlidersHorizontal,
    category: 'LIGHTROOM PRESETS',
    title: 'Lightroom Presets and Color Styles',
    description: 'Explore Lightroom presets, stylish color tones, and consistent editing styles.',
    content: 'Lightroom presets apply a collection of adjustments to a photograph. After applying a preset, fine-tune exposure, white balance, skin tones, and contrast to suit the individual image.',
    points: ['Apply and customize presets', 'Create your own preset styles', 'Maintain consistent photo colors', 'Adjust presets for different lighting'],
  },
  {
    icon: Clapperboard,
    category: 'CINEMATIC PHOTOS',
    title: 'Cinematic Photo Editing',
    description: 'Create cinematic photographs with dramatic lighting, balanced shadows, and creative colors.',
    content: 'Cinematic photography often uses controlled contrast, carefully chosen color palettes, and directional light. Warm highlights and cooler shadows can create a film-inspired mood. Match the color grade to the subject and atmosphere.',
    points: ['Create cinematic color palettes', 'Control highlights and shadows', 'Add depth through contrast', 'Develop a film-inspired look'],
  },
  {
    icon: MonitorPlay,
    category: 'CINEMATIC VIDEO',
    title: 'Cinematic Video Editing Techniques',
    description: 'Combine cinematic color grading, smooth transitions, sound design, and storytelling.',
    content: 'Cinematic video editing makes every shot feel connected. Choose clips that support the story, maintain consistent color across scenes, and use music and sound effects to build atmosphere. Smooth pacing matters more than excessive transitions.',
    points: ['Edit to the rhythm of music', 'Match colors between clips', 'Use sound design effectively', 'Create smooth and purposeful cuts'],
  },
  {
    icon: Sparkles,
    category: 'AI IMAGE GENERATION',
    title: 'AI Image Generation Guide',
    description: 'Discover how AI image generators turn written ideas into images.',
    content: 'AI image generation uses text prompts to describe an image. Clear instructions about the subject, environment, lighting, composition, and artistic style help guide the result. Generate variations and refine your prompt to get closer to your intended design.',
    points: ['Describe the subject clearly', 'Choose a visual style and mood', 'Guide lighting and composition', 'Refine prompts using results'],
  },
  {
    icon: WandSparkles,
    category: 'AI PROMPTS',
    title: 'How to Write Better AI Image Prompts',
    description: 'Write detailed prompts that communicate your creative vision and produce consistent AI images.',
    content: 'A useful image prompt explains what should appear and how it should look. Start with the main subject, then add the setting, framing, lighting, colors, mood, and medium. Change a few details at a time when refining results.',
    points: ['Define the subject and setting', 'Describe lighting and framing', 'Specify colors and artistic style', 'Improve prompts through iteration'],
  },
  {
    icon: Image,
    category: 'AI ENHANCEMENT',
    title: 'AI Photo Enhancement',
    description: 'Improve image clarity, reduce noise, sharpen details, and restore photographs using AI tools.',
    content: 'AI photo enhancement can improve low-resolution or noisy images. Results depend on the original file and intended use. Preview the results carefully because aggressive enhancement may create artificial textures or unnatural facial details.',
    points: ['Improve image clarity', 'Reduce digital noise', 'Upscale images when appropriate', 'Check for enhancement artifacts'],
  },
  {
    icon: Layers,
    category: 'PHOTOSHOP',
    title: 'Photoshop Photo Manipulation',
    description: 'Combine images and create creative, realistic compositions in Photoshop.',
    content: 'Photo manipulation combines multiple visual elements into one composition. Use layers and masks, match lighting and perspective, and refine edges. Consistent shadows, color, and image sharpness help the final result look cohesive.',
    points: ['Work with layers and masks', 'Blend multiple photographs', 'Match lighting and perspective', 'Refine edges for realistic results'],
  },
  {
    icon: Eraser,
    category: 'BACKGROUND EDITING',
    title: 'Background Removal and Replacement',
    description: 'Isolate subjects and replace distracting backgrounds with creative alternatives.',
    content: 'Background removal separates the main subject from its surroundings. Refine hair, transparent edges, and small details. When placing the subject on a new background, match light direction, color temperature, and shadows.',
    points: ['Select and isolate the subject', 'Refine hair and difficult edges', 'Add a replacement background', 'Match shadows and lighting'],
  },
  {
    icon: Aperture,
    category: 'BACKGROUND BLUR',
    title: 'Background Blur Effects',
    description: 'Create depth and draw attention to your subject with background blur.',
    content: 'Background blur helps separate a portrait or product from a busy environment. Keep the subject sharp while blur increases naturally with distance. Protect hair, clothing, and fine edges to avoid an artificial cutout appearance.',
    points: ['Separate the subject from the background', 'Adjust blur intensity gradually', 'Preserve natural subject edges', 'Keep the focal point sharp'],
  },
  {
    icon: Palette,
    category: 'COLOR GRADING',
    title: 'Color Grading and Color Correction',
    description: 'Correct inaccurate colors and create a distinctive visual mood.',
    content: 'Color correction creates a balanced starting point by fixing exposure and unwanted color casts. Color grading introduces a creative style. Adjust white balance, curves, and saturation while preserving natural skin tones.',
    points: ['Correct white balance', 'Balance exposure and contrast', 'Build a creative color palette', 'Maintain realistic skin tones'],
  },
  {
    icon: Video,
    category: 'CAPCUT TUTORIALS',
    title: 'CapCut Video Editing Tutorials',
    description: 'Learn CapCut basics for social media videos, captions, transitions, and music.',
    content: 'CapCut provides a convenient workflow for short-form and social media content. Choose the project ratio, arrange clips, and trim them to maintain a clear pace. Add readable captions, adjust music levels, and preview before exporting.',
    points: ['Create and organize a project', 'Add captions and transitions', 'Sync clips with music', 'Choose suitable export settings'],
  },
  {
    icon: Scissors,
    category: 'VN VIDEO EDITOR',
    title: 'VN Video Editor Tutorials',
    description: 'Explore timeline editing, multiple tracks, transitions, text, and audio in VN.',
    content: 'VN Video Editor provides timeline-based tools for assembling clips and audio. Split clips accurately, manage multiple tracks, and control the duration of text and transitions. Consistent pacing and clean audio make edits more polished.',
    points: ['Edit clips on the timeline', 'Add text and transitions', 'Manage music and voice audio', 'Review the final edit before export'],
  },
  {
    icon: Palette,
    category: 'VIVID FILTERS',
    title: 'Vivid Filters and Color Effects',
    description: 'Create vibrant photos while maintaining detail and natural-looking subjects.',
    content: 'Vivid filters increase the visual impact of colors. Adjust vibrance and saturation carefully because excessive intensity can remove subtle color differences. Check bright areas and skin tones to avoid oversaturation.',
    points: ['Choose a suitable filter', 'Balance vibrance and saturation', 'Protect skin tones and highlights', 'Save a reusable color style'],
  },
  {
    icon: ScanFace,
    category: 'PORTRAIT RETOUCHING',
    title: 'Professional Portrait Retouching',
    description: 'Improve portraits with subtle skin cleanup, balanced tones, and natural detail.',
    content: 'Portrait retouching works best when it enhances rather than completely changes a person’s appearance. Remove temporary distractions, balance uneven tones, and preserve natural skin texture. Keep adjustments subtle.',
    points: ['Clean up temporary blemishes', 'Balance skin tone and exposure', 'Preserve realistic skin texture', 'Enhance facial details subtly'],
  },
  {
    icon: Sun,
    category: 'LIGHTING & CONTRAST',
    title: 'Lighting and Contrast Adjustment',
    description: 'Learn how exposure, highlights, shadows, and contrast improve photographs.',
    content: 'Lighting adjustments reveal details and improve the mood of an image. Exposure affects overall brightness, while highlights and shadows target brighter and darker areas. Use contrast carefully to preserve important details.',
    points: ['Correct overall exposure', 'Recover highlight and shadow detail', 'Create balanced contrast', 'Maintain detail in bright and dark areas'],
  },
  {
    icon: Aperture,
    category: 'PHOTO FILTERS',
    title: 'Photo Filters and Creative Effects',
    description: 'Explore creative filters and effects that express a particular mood or style.',
    content: 'Filters can establish a visual identity, from soft vintage tones to modern, high-contrast looks. Choose effects based on the subject and intended mood. Compare the result with the original to avoid over-editing.',
    points: ['Explore different filter styles', 'Match effects to the photo’s mood', 'Combine effects carefully', 'Compare edited and original versions'],
  },
  {
    icon: Camera,
    category: 'BEFORE & AFTER',
    title: 'Before-and-After Photo Editing',
    description: 'Compare original and edited images and present your improvements clearly.',
    content: 'Before-and-after comparisons show how editing changes an image. Use the same crop and alignment for both versions so the difference is easy to understand. Keep the final result consistent with your creative goal.',
    points: ['Keep both versions aligned', 'Compare lighting and color changes', 'Use a side-by-side layout', 'Present edits clearly'],
  },
  {
    icon: MonitorPlay,
    category: 'HD VIDEO EXPORT',
    title: 'HD Video Export and Quality Settings',
    description: 'Understand resolution, frame rate, bitrate, and formats for clear videos.',
    content: 'Export settings affect video clarity, file size, and playback compatibility. Choose a resolution suited to your footage, preserve a suitable frame rate, and use an appropriate bitrate. Higher settings cannot create detail missing from the original footage.',
    points: ['Choose 1080p or 4K when appropriate', 'Match frame rate to your footage', 'Select a suitable bitrate', 'Check the exported video before sharing'],
  },
]

const Article = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  return (
    <>
      <section
        id="meer-editor-articles"
        className="w-full bg-[#FAF7EF] px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-3 inline-block rounded-full border border-[#947044]/30 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#947044]">
              MEER EDITOR LEARNING CENTER
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-[#29251F] sm:text-4xl lg:text-5xl">
              Learn Photo & Video Editing
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#62594E] sm:text-base">
              Explore tutorials on photo editing, video editing, Lightroom,
              AI tools, Photoshop, color grading, and more. Improve your
              creative skills one topic at a time.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#947044]" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {articles.map((article) => {
              const Icon = article.icon

              return (
                <article
                  key={article.title}
                  className="flex h-full flex-col rounded-2xl border border-[#947044]/20 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#947044]/50 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FAF7EF] text-[#947044]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full bg-[#FAF7EF] px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#947044] sm:text-xs">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-[#29251F] sm:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#62594E]">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#29251F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#947044] focus:outline-none focus:ring-2 focus:ring-[#947044] focus:ring-offset-2"
                    >
                      Read Full Article
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-[#947044]/20 bg-white p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-[#29251F] sm:text-2xl">
              Keep Learning with Meer Editor
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#62594E]">
              Practice these techniques, experiment with different styles,
              and develop your own creative editing workflow.
            </p>

            <a
              href="#meer-editor-learning-cards"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#947044] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#29251F]"
            >
              Explore All Topics
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 sm:p-6"
          onClick={closeArticle}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-popup-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FAF7EF] p-5 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeArticle}
              aria-label="Close article"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#29251F] shadow-sm transition hover:bg-[#29251F] hover:text-white"
            >
              <X size={21} />
            </button>

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#947044]">
              {React.createElement(selectedArticle.icon, {
                size: 28,
                strokeWidth: 1.8,
              })}
            </div>

            <span className="inline-block rounded-full border border-[#947044]/30 bg-white px-3 py-1.5 text-xs font-bold tracking-wider text-[#947044]">
              {selectedArticle.category}
            </span>

            <h2
              id="article-popup-title"
              className="mt-4 pr-8 text-2xl font-extrabold leading-tight text-[#29251F] sm:text-3xl"
            >
              {selectedArticle.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#62594E] sm:text-base">
              {selectedArticle.description}
            </p>

            <div className="my-6 h-px bg-[#947044]/25" />

            <h3 className="text-lg font-bold text-[#29251F]">
              About This Tutorial
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#62594E] sm:text-base">
              {selectedArticle.content}
            </p>

            <h3 className="mb-4 mt-7 text-lg font-bold text-[#29251F]">
              What You Will Learn
            </h3>

            <ul className="space-y-3">
              {selectedArticle.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-[#62594E] sm:text-base"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#947044]"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={closeArticle}
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#29251F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#947044]"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Article