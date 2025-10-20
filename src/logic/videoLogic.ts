// Comprehensive video logic for the entire application
import type { MediaItem } from "@/logic/mediaGridLogic";

/**
 * Check if media array contains only one item and it's a video
 */
export function isVideoOnly(media?: string[] | MediaItem[]): boolean {
  if (!media || media.length !== 1) return false;

  // Handle string array
  if (typeof media[0] === "string") {
    const url = media[0];
    return isVideoUrl(url);
  }

  // Handle MediaItem array
  const mediaItems = media as MediaItem[];
  return mediaItems[0].type === "video";
}

/**
 * Check if a URL is a video by extension
 */
export function isVideoUrl(url: string): boolean {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
}

/**
 * Get video URL from media array (returns first video found)
 */
export function getVideoUrl(media?: string[] | MediaItem[]): string | null {
  if (!media || media.length === 0) return null;

  // Handle string array
  if (typeof media[0] === "string") {
    const videos = (media as string[]).filter((url) => isVideoUrl(url));
    return videos.length > 0 ? videos[0] : null;
  }

  // Handle MediaItem array
  const mediaItems = media as MediaItem[];
  const videoItem = mediaItems.find((item) => item.type === "video");
  return videoItem ? videoItem.url : null;
}

/**
 * Check if media array contains any video
 */
export function hasVideo(media?: string[] | MediaItem[]): boolean {
  return getVideoUrl(media) !== null;
}

/**
 * Get all video URLs from media array
 */
export function getAllVideoUrls(media?: string[] | MediaItem[]): string[] {
  if (!media || media.length === 0) return [];

  // Handle string array
  if (typeof media[0] === "string") {
    return (media as string[]).filter((url) => isVideoUrl(url));
  }

  // Handle MediaItem array
  const mediaItems = media as MediaItem[];
  return mediaItems
    .filter((item) => item.type === "video")
    .map((item) => item.url);
}

/**
 * Count videos in media array
 */
export function countVideos(media?: string[] | MediaItem[]): number {
  return getAllVideoUrls(media).length;
}
