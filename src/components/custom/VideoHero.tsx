// src/components/VideoHero.tsx

interface VideoHeroProps {
  /** Path to your video file (e.g. "/videos/hero-loop.mp4") */
  videoSrc: string;
  /** Fallback/poster image (optional) */
  poster?: string;
  /** Main heading text */
  title: string;
  /** Subtitle below the heading */
  subtitle?: string;
}

export default function VideoHero({
  videoSrc,
  poster,
  title,
  subtitle,
}: VideoHeroProps) {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* 1) VIDEO ELEMENT AS BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* new: gray overlay instead of black */}
       <div className="absolute inset-0 radial-gradient(circle at center, rgba(0,0,0,0.7), rgba(0, 0, 0, 0.1) 60%, transparent 100%" />


      {/* 3) CONTENT LAYER (z-10 so it sits above video + overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
