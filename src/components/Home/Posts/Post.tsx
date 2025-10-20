import { AiOutlineClose, AiFillLike } from "react-icons/ai";
import { FaHeart, FaAngry } from "react-icons/fa";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";
import { BsEmojiGrinFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import MediaGrid from "./MediaGrid";
import { useState } from "react";
import type { MediaItem } from "@/logic/mediaGridLogic";
import VideoPlayer from "@/components/VideoPlayer";
import { isVideoOnly, getVideoUrl } from "@/logic/videoLogic";

interface PostProps {
  img: string;
  author: string;
  timestamp: string;
  content?: string; // post text content
  media?: string[] | MediaItem[]; // array of image URLs or media objects
}

export default function Post({
  img,
  author,
  timestamp,
  content = "",
  media,
}: PostProps) {
  const [showAll, setShowAll] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState<string | null>(null);
  const words = content.split(" ");
  const isLong = words.length > 15;
  const displayText =
    showAll || !isLong ? content : words.slice(0, 15).join(" ") + "...";

  // Check if media contains only one video (no other media)
  const isSingleVideo = isVideoOnly(media);
  const singleVideoUrl = isSingleVideo ? getVideoUrl(media) : null;

  const handleVideoClick = (videoUrl: string) => {
    // Open fullscreen video player for multiple media
    setShowVideoPlayer(videoUrl);
  };

  return (
    <div className="post w-full h-full bg-white rounded-lg shadow-md mb-2.5">
      <div className="postHeader p-3 pb-0  relative">
        <div className="postAuthor w-full h-12 relative">
          <img src={img} className="rounded-full w-10 h-10" alt={author} />
          <div className="authorInfo ml-3  absolute top-0 left-9">
            <a className="authorName text-sm font-semibold cursor-pointer hover:underline transition-colors">
              {author}
            </a>
            <p className="authorTimestamp text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>
        <div className="absolute top-4 right-3 flex flex-row ">
          <div className="w-9 h-9 bg-transparent rounded-full cursor-pointer">
            <div className="m-auto text-xl text-black w-5 h-5">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <g fillRule="evenodd" transform="translate(-446 -350)">
                  <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="w-9 h-9 bg-transparent rounded-full cursor-pointer">
            <div className="m-auto text-xl text-black w-5 h-5">
              <AiOutlineClose />
            </div>
          </div>
        </div>
      </div>
      {/* Post Content */}
      <div className="pb-3">
        <p className="h-auto p-2 leading-5">
          {displayText}
          {isLong && !showAll && (
            <button
              className="pl-1 inline bg-transparent font-semibold cursor-pointer outline-none border-none p-0 m-0 hover:underline focus:outline-none text-base box-border"
              onClick={() => setShowAll(true)}
            >
              See more
            </button>
          )}
        </p>
        {/* Media photos and videos */}
        {isSingleVideo && singleVideoUrl ? (
          // Single video only: play inline in post
          <VideoPlayer src={singleVideoUrl} />
        ) : (
          // Multiple media or images: show grid
          media &&
          media.length > 0 &&
          (typeof media[0] === "string" ? (
            <MediaGrid
              images={media as string[]}
              onVideoClick={handleVideoClick}
            />
          ) : (
            <MediaGrid
              media={media as MediaItem[]}
              onVideoClick={handleVideoClick}
            />
          ))
        )}
      </div>

      {/* Fullscreen Video Player Overlay for multiple media */}
      {showVideoPlayer && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setShowVideoPlayer(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path d="M10 8.586l4.95-4.95a1 1 0 1 1 1.414 1.414L11.414 10l4.95 4.95a1 1 0 0 1-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 0 1 5.05 3.636L10 8.586z" />
            </svg>
          </button>
          <div className="w-full max-w-5xl px-4">
            <VideoPlayer src={showVideoPlayer} />
          </div>
        </div>
      )}
      {/* Post Stats */}
      <div className="postStats pb-2 px-3 flex flex-row justify-between text-sm text-gray-600">
        <div className="likes flex items-center gap-1">
          <div className="likeIcons flex -space-x-1 relative">
            <div className="likeIcon w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center border-2 border-white relative">
              <AiFillLike className="text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="likeIcon w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center border-2 border-white relative">
              <FaHeart className="text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="likeIcon w-5 h-5 bg-yellow-400 text-white rounded-full flex items-center justify-center border-2 border-white relative">
              <BsFillEmojiSurpriseFill className="text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/* Add more icons as needed */}
          </div>
          <span>205</span>
        </div>
      </div>
      {/* Post Actions */}
      <div className="postActions mx-1 border-t border-[#e6e6e6] pt-2 pb-1 flex flex-row justify-around">
        <div className="relative w-full flex justify-center">
          <div className="group/like relative w-full flex justify-center">
            <button className="postActionButton flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full justify-center group relative">
              <AiFillLike className="text-lg  transition-colors duration-150" />
              <span className="text-sm font-semibold group-hover:text-[#1877f2] transition-colors duration-150">
                Like
              </span>
            </button>
            {/* Reaction icons on hover, stay visible when hovered */}
            <div
              className="absolute bg-white px-4 py-2 shadow-lg rounded-full -top-14 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 pointer-events-none group-hover/like:opacity-100 group-hover/like:pointer-events-auto transition-opacity duration-200 z-20"
              onMouseEnter={(e) =>
                e.currentTarget.classList.add("pointer-events-auto")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("pointer-events-auto")
              }
            >
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <AiFillLike className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <FaHeart className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <BsFillEmojiSurpriseFill className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-yellow-300 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <BsEmojiGrinFill className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                <FaAngry className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Comment and Share buttons */}
        <button className="postActionButton flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full justify-center">
          <FaRegComment className="text-lg" />
          <span className="text-sm font-semibold">Comment</span>
        </button>
        <button className="postActionButton flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full justify-center max-[325px]:hidden">
          <FaShare className="text-lg" />
          <span className="text-sm font-semibold">Share</span>
        </button>
      </div>
    </div>
  );
}
