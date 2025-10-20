# Video Logic Documentation

## Overview

Complete video handling system built from scratch with clean separation of concerns.

## File Structure

### 1. **`src/logic/videoLogic.ts`** - Main Video Logic

Central hub for all video-related logic functions:

```typescript
// Core Functions:
- isVideoOnly(media) → boolean       // Check if media has only one video
- isVideoUrl(url) → boolean          // Check if URL is a video
- getVideoUrl(media) → string|null   // Get first video URL
- hasVideo(media) → boolean          // Check if any video exists
- getAllVideoUrls(media) → string[]  // Get all video URLs
- countVideos(media) → number        // Count total videos
```

**How it works:**

- Supports both `string[]` and `MediaItem[]` formats
- Detects videos by extension (.mp4, .webm, .ogg, .mov, .avi)
- Type-safe with TypeScript
- No side effects - pure functions

---

### 2. **`src/components/VideoPlayer.tsx`** - Video Player Component

React component using Plyr library for video playback:

**Features:**

- ✅ Plyr integration with custom controls
- ✅ Auto-cleanup on unmount
- ✅ Re-initializes when src changes
- ✅ Responsive 16:9 ratio
- ✅ No autoplay (user must click play)
- ✅ Fallback text for unsupported browsers

**Props:**

```typescript
{
  src: string;      // Required: Video URL
  poster?: string;  // Optional: Thumbnail/poster image
}
```

---

### 3. **`src/components/Home/Posts/Post.tsx`** - Post Component

Main post component that decides when to show video player:

**Video Logic Flow:**

```
1. Check if media contains only one video using isVideoOnly()
2. If yes: Get video URL using getVideoUrl()
3. Render VideoPlayer with the URL
4. If no: Render MediaGrid for images/multiple media
```

**Current Behavior:**

- **Single video** → Shows `VideoPlayer` directly
- **Multiple media** → Shows `MediaGrid` (you handle clicks later)
- **Images only** → Shows `MediaGrid`

---

### 4. **`src/components/Home/Posts/MediaGrid.tsx`** - Media Grid

Handles multiple media items (images/videos):

**Video Handling:**

- Shows video thumbnails with play overlay
- Tracks played/playing states
- Calls `onVideoClick(videoUrl)` when clicked
- Currently logs to console (ready for your implementation)

---

## How Videos Work

### Scenario 1: Post with Single Video

```typescript
const post = {
  media: [
    {
      url: "https://example.com/video.mp4",
      type: "video",
    },
  ],
};
```

**Result:** VideoPlayer renders automatically with Plyr controls

### Scenario 2: Post with Multiple Media (including videos)

```typescript
const post = {
  media: [
    { url: "image1.jpg", type: "image" },
    { url: "video.mp4", type: "video" },
    { url: "image2.jpg", type: "image" },
  ],
};
```

**Result:** MediaGrid renders. Video click logs to console (ready for you to handle)

### Scenario 3: Post with Images Only

```typescript
const post = {
  media: ["image1.jpg", "image2.jpg"],
};
```

**Result:** MediaGrid renders normally

---

## Testing

Check `src/logic/homeLogic.ts` for test posts:

1. **John Doe** - Single video post (should show VideoPlayer)
2. **Emily Brown** - Mixed media with video (should show MediaGrid)
3. **Others** - Image-only posts (should show MediaGrid)

---

## Next Steps (When You're Ready)

To handle video clicks in MediaGrid:

1. Update `handleVideoClick` in Post.tsx
2. Options:
   - Open modal with VideoPlayer
   - Navigate to full-screen view
   - Inline play in MediaGrid
   - Your custom implementation

---

## Key Benefits

✅ **Centralized Logic** - All video utilities in one file
✅ **Type Safe** - Full TypeScript support
✅ **Reusable** - Functions work anywhere in the app
✅ **Clean** - Pure functions, no side effects
✅ **Extensible** - Easy to add new features
✅ **Tested** - Works with sample data in homeLogic.ts

---

## File Locations

```
src/
├── logic/
│   └── videoLogic.ts          ← Main logic file
├── components/
│   ├── VideoPlayer.tsx         ← Plyr component
│   └── Home/
│       └── Posts/
│           ├── Post.tsx        ← Uses videoLogic
│           └── MediaGrid.tsx   ← Handles clicks
```

---

Last Updated: ${new Date().toLocaleDateString()}
