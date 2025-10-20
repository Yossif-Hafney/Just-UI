// Logic helpers for MediaGrid

export interface MediaItem {
  url: string;
  type: "image" | "video";
}

export function sortMedia(mediaItems: MediaItem[]): MediaItem[] {
  return [...mediaItems].sort((a, b) => {
    if (a.type === "video" && b.type === "image") return -1;
    if (a.type === "image" && b.type === "video") return 1;
    return 0;
  });
}

export function convertImagesToMedia(images: string[]): MediaItem[] {
  return images.map((url) => ({ url, type: "image" as const }));
}
