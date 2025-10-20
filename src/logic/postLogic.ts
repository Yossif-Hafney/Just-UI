// Logic helpers for Post component
import type { MediaItem } from "@/logic/mediaGridLogic";

export function isVideoOnly(media?: string[] | MediaItem[]): boolean {
  if (!media || media.length === 0) return false;
  if (typeof media[0] !== "string") {
    const mediaItems = media as MediaItem[];
    return mediaItems.length === 1 && mediaItems[0].type === "video";
  }
  return false;
}

export function getVideoUrl(media?: string[] | MediaItem[]): string | null {
  if (!media || media.length === 0) return null;

  if (typeof media[0] === "string") {
    // If it's a string array, check if it's a video by extension
    const firstItem = media[0];
    if (
      firstItem.endsWith(".mp4") ||
      firstItem.endsWith(".webm") ||
      firstItem.endsWith(".ogg")
    ) {
      return firstItem;
    }
    return null;
  }

  // MediaItem array - find first video
  const mediaItems = media as MediaItem[];
  const videoItem = mediaItems.find((item) => item.type === "video");
  return videoItem ? videoItem.url : null;
}

export function hasVideo(media?: string[] | MediaItem[]): boolean {
  return getVideoUrl(media) !== null;
}

export function useVideoLogic() {
  return {
    isVideoOnly,
    getVideoUrl,
    hasVideo,
  };
}
