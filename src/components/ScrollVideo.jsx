import { useRef, useEffect } from 'react';

/**
 * ScrollVideo — plays a video frame-by-frame driven by scroll position.
 *
 * Props:
 *   src        – path to the MP4 video (e.g. "/videos/hero-scroll.mp4")
 *   className  – optional wrapper className
 *   scrollStart – scroll offset (px) at which video begins playing (default 0)
 *   scrollEnd   – scroll offset (px) at which video reaches its last frame
 *                 (default: window.innerHeight * 3, i.e. ~3 viewport heights of scroll)
 */
export default function ScrollVideo({
  src = '/videos/Product_reveal_exploded_202604241637.mp4',
  className = '',
  scrollStart = 0,
  scrollEnd,
}) {
  const videoRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause immediately so scroll controls playback
    video.pause();

    const end = scrollEnd ?? window.innerHeight * 3;

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!video || !video.duration) return;

        const scrollY = window.scrollY || window.pageYOffset;
        // Map scroll position to 0→1 progress
        const progress = Math.min(
          Math.max((scrollY - scrollStart) / (end - scrollStart), 0),
          1
        );

        // Seek to the corresponding frame
        video.currentTime = progress * video.duration;
      });
    }

    // Set initial frame
    const handleLoaded = () => {
      video.currentTime = 0;
      onScroll(); // sync in case page is already scrolled
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollStart, scrollEnd]);

  return (
    <div className={`scroll-video-wrapper ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
