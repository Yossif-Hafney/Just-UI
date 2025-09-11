import Header from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import LeftAppSidebarHome from "./sidebar/leftAppSideBar";
import RightAppSidebarHome from "./sidebar/rightAppSideBar";
import CreatePost from "@/components/Home/Posts/addPost";
import AddStatus from "@/components/Home/addStatus";
import StatusCard from "@/components/Home/statusCard";
import Post from "@/components/Home/Posts/Post";

export default function Home() {
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

  return (
    <>
      <Header />
      <div className="pt-14 flex w-full h-full max-w-[1400px] mx-auto">
        <div className="leftSidebar flex-shrink-0 ">
          <LeftAppSidebarHome />
        </div>
        <div className="mainContent flex-1 min-h-screen w-full flex flex-col items-center">
          <div className="pl-4 pr-4 pt-3 pb-2.5 ">
            <div className="createPost rounded-lg shadow-md mb-2.5 bg-white w-[560px] h-[122.8px] ">
              <CreatePost />
            </div>
            <div className="statusSection pt-2 pb-2 -mt-2 -mb-2 bg-transparent w-[560px] h-[216px] relative ">
              {showLeft && (
                <button
                  className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-1 hover:bg-gray-200 transition-colors"
                  onClick={() => scrollStatusRow("left")}
                  aria-label="Scroll left"
                >
                  <ChevronLeft />
                </button>
              )}
              <div
                ref={statusRowRef}
                className="w-full h-full flex flex-row overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: "none" }}
              >
                <AddStatus />
                <StatusCard />
                <StatusCard />
                <StatusCard />
                <StatusCard />
                <StatusCard />
                <StatusCard />
              </div>
              <button
                className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-1 hover:bg-gray-200 transition-colors"
                onClick={() => scrollStatusRow("right")}
                aria-label="Scroll right"
              >
                <ChevronRight />
              </button>
            </div>
            <div className="postsSection pt-2 pb-2 mt-2 bg-transparent w-[560px] h-auto ">
              <Post />
              {/* <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post /> */}
            </div>
          </div>
        </div>
        <div className="rightSidebar flex-shrink-0">
          <RightAppSidebarHome />
        </div>
      </div>
    </>
  );
}
