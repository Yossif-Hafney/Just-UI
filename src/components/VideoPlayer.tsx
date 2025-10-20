// Base styles for media player and provider (~400B).
import "@vidstack/react/player/styles/base.css";
// Default theme styles (optional).
import "@vidstack/react/player/styles/default/theme.css";
// Default layout styles.
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  MediaPlayer,
  MediaProvider,
  useMediaState,
  useMediaRemote,
  type MediaPlayerInstance,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const playerRef = useRef<MediaPlayerInstance>(null);
  const remote = useMediaRemote(playerRef);

  // Listen to media state
  const isPlaying = useMediaState("playing", playerRef);
  const hasPlayed = useMediaState("played", playerRef);

  // Hide overlay when video starts playing
  if (isPlaying && showOverlay) {
    setShowOverlay(false);
  }

  // Show overlay again if user seeks to start
  if (!isPlaying && !hasPlayed && !showOverlay) {
    setShowOverlay(true);
  }

  const handlePlay = () => {
    remote.play();
    setShowOverlay(false);
  };

  return (
    <div className="relative w-full">
      <MediaPlayer
        ref={playerRef}
        title={title}
        src={src}
        poster={poster}
        playsInline
        streamType="on-demand"
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
        {showOverlay && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black z-20 cursor-pointer transition-opacity duration-200"
            onClick={handlePlay}
          >
            <button
              className="bg-white/40 rounded-full  shadow-lg hover:bg-white"
              aria-label="Play video"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.8" />
                <polygon points="20,16 36,24 20,32" fill="#000" />
              </svg>
            </button>
          </div>
        )}
      </MediaPlayer>
    </div>
  );
}
