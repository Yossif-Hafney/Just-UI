// Logic helpers for Home page
import { useRef, useState, useEffect } from "react";

export function useStatusRowScroll() {
  const statusRowRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);

  const scrollStatusRow = (direction: "left" | "right") => {
    const row = statusRowRef.current;
    if (!row) return;
    const scrollAmount = 120;
    row.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = statusRowRef.current;
    if (!row) return;
    const handleScroll = () => setShowLeft(row.scrollLeft > 0);
    row.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => row.removeEventListener("scroll", handleScroll);
  }, []);

  return { statusRowRef, showLeft, scrollStatusRow };
}

export const posts = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    author: "John Doe",
    timestamp: "2 hours ago",
    content: "Check out this amazing video! 🎥",
    media: [
      {
        url: "https://bitmovin-a.akamaihd.net/content/bbb/stream.mpd",
        type: "video" as const,
      },
    ],
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    author: "Jane Smith",
    timestamp: "1 hour ago",
    content: "Beautiful sunset at the beach! 🌅",
    media: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"],
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    author: "Mike Johnson",
    timestamp: "45 minutes ago",
    content:
      "Amazing day exploring the mountains with friends. Nature never fails to amaze me!",
    media: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    ],
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    author: "Mike Johnson",
    timestamp: "30 minutes ago",
    content:
      "Weekend getaway was absolutely incredible! Can't wait to go back and explore more of this beautiful place.",
    media: [
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1760681554227-d7aad73cd57f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    author: "Emily Brown",
    timestamp: "just now",
    content:
      "Mixed media post - video will appear first! Check out this collection 📸🎬",
    media: [
      {
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        type: "image" as const,
      },
      {
        url: "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
        type: "video" as const,
      },
      {
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        type: "image" as const,
      },
      {
        url: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
        type: "image" as const,
      },
    ],
  },
  {
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    author: "Chris Lee",
    timestamp: "5 minutes ago",
    content:
      "This is the content of the post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime exercitationem facilis adipisci repellendus aliquid odit nesciunt cumque iusto ea. Sit dignissimos blanditiis quibusdam sequi esse. Odit quos ea quae qui.",
    media: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1760681554227-d7aad73cd57f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
];
