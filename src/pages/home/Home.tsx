import Header from "@/components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStatusRowScroll, posts } from "@/logic/homeLogic";
import LeftAppSidebarHome from "./sidebar/leftAppSideBar";
import RightAppSidebarHome from "./sidebar/rightAppSideBar";
import CreatePost from "@/components/Home/Posts/addPost";
import AddStatus from "@/components/Home/addStatus";
import StatusCard from "@/components/Home/statusCard";
import Post from "@/components/Home/Posts/Post";

export default function Home() {
  const { statusRowRef, showLeft, scrollStatusRow } = useStatusRowScroll();

  return (
    <>
      <Header />
      <div className="pt-14 flex w-full h-full max-w-[1400px] mx-auto">
        <div className="leftSidebar flex-shrink-0 min-[900px]:max-[1200px]:hidden max-[900px]:hidden block min-[1100px]w-60">
          <LeftAppSidebarHome />
        </div>
        <div className="mainContent flex-1 min-h-screen w-full flex flex-col items-center">
          <div className="pl-4 pr-4 pt-3 pb-2.5 w-full max-w-[560px]">
            <div className="createPost rounded-lg shadow-md mb-2.5 bg-white w-full  h-[115px] ">
              <CreatePost />
            </div>
            <div className="statusSection pt-2 pb-2 -mt-2 -mb-2 bg-transparent w-full h-[216px] relative ">
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
            <div className="postsSection  pb-2 mt-2 bg-transparent w-full h-auto ">
              {posts.map((post, idx) => (
                <Post
                  key={idx}
                  img={post.img}
                  author={post.author}
                  timestamp={post.timestamp}
                  content={post.content}
                  media={post.media}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="rightSidebar flex-shrink-0 max-[900px]:hidden block">
          <RightAppSidebarHome />
        </div>
      </div>
    </>
  );
}
