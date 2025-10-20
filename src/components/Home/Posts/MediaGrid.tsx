import { useState } from "react";
import { sortMedia, convertImagesToMedia } from "@/logic/mediaGridLogic";
import type { MediaItem } from "@/logic/mediaGridLogic";

interface MediaGridProps {
  images?: string[];
  media?: MediaItem[];
  onVideoClick?: (videoUrl: string) => void;
}

export default function MediaGrid({
  images = [],
  media = [],
  onVideoClick,
}: MediaGridProps) {
  // Track which videos have ever been played
  const [playedVideos, setPlayedVideos] = useState<Set<string>>(new Set());
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  // Convert old images prop to new media format for backward compatibility

  const mediaItems: MediaItem[] =
    media.length > 0 ? media : convertImagesToMedia(images);
  const sortedMedia = sortMedia(mediaItems);

  const count = sortedMedia.length;
  if (count === 0) return null;

  // Helper for overlay
  const renderOverlay = (extra: number) => (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center ">
      <span className="text-white text-2xl font-bold select-none">
        +{extra}
      </span>
    </div>
  );

  // Helper for video overlay with play icon
  const renderVideoOverlay = () => (
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer group hover:bg-black/40 transition-colors">
      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
        <svg
          className="w-8 h-8 text-gray-800 ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  // Helper to render media (image or video thumbnail)
  const renderMedia = (item: MediaItem, className: string = "") => {
    if (item.type === "video") {
      const hasPlayed = playedVideos.has(item.url);
      const isPlaying = playingVideos.has(item.url);
      return (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => {
            onVideoClick?.(item.url);
            // Mark video as playing and as played when clicked
            setPlayingVideos((prev) => new Set(prev).add(item.url));
            setPlayedVideos((prev) => new Set(prev).add(item.url));
          }}
        >
          <video
            src={item.url}
            className={`w-full h-full object-cover ${className}`}
            preload="metadata"
            onPause={() => {
              // Remove from playing set when paused
              setPlayingVideos((prev) => {
                const newSet = new Set(prev);
                newSet.delete(item.url);
                return newSet;
              });
            }}
          />
          {!hasPlayed && !isPlaying && renderVideoOverlay()}
        </div>
      );
    }
    return (
      <img
        src={item.url}
        alt="media"
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  };

  // Single media
  if (count === 1) {
    return (
      <div className="w-full aspect-video relative">
        {renderMedia(sortedMedia[0])}
      </div>
    );
  }

  // Two media items
  if (count === 2) {
    return (
      <div className="w-full flex gap-0.5 aspect-[2/1]">
        {sortedMedia.map((item, i) => (
          <div key={i} className="flex-1 relative">
            {renderMedia(item)}
          </div>
        ))}
      </div>
    );
  }

  // Three media items
  if (count === 3) {
    return (
      <div className="w-full flex flex-col gap-0.5 aspect-[2/2.2]">
        <div className="flex-1 relative">{renderMedia(sortedMedia[0])}</div>
        <div className="flex flex-row gap-0.5 flex-1 min-h-0">
          {sortedMedia.slice(1).map((item, i) => (
            <div
              key={i}
              className={`flex-1 relative ${
                i === 0 ? "rounded-bl-xl" : "rounded-br-xl"
              }`}
            >
              {renderMedia(item)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Four media items
  if (count === 4) {
    return (
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-0.5 aspect-square">
        {sortedMedia.map((item, i) => (
          <div
            key={i}
            className={`relative ${
              i < 2
                ? i === 0
                  ? "rounded-tl-xl"
                  : "rounded-tr-xl"
                : i === 2
                ? "rounded-bl-xl"
                : "rounded-br-xl"
            }`}
          >
            {renderMedia(item)}
          </div>
        ))}
      </div>
    );
  }

  // Five or more media items
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-0.5 aspect-square">
      {sortedMedia.slice(0, 4).map((item, i) => (
        <div
          key={i}
          className={`relative ${
            i < 2
              ? i === 0
                ? "rounded-tl-xl"
                : "rounded-tr-xl"
              : i === 2
              ? "rounded-bl-xl"
              : "rounded-br-xl"
          }`}
        >
          {renderMedia(item)}
          {i === 3 && (
            <div className="absolute inset-0">{renderOverlay(count - 4)}</div>
          )}
        </div>
      ))}
    </div>
  );
}
