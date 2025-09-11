import { IoMdPhotos } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineAddReaction } from "react-icons/md";

export default function CreatePost() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 w-full p-2 border-b border-gray-200">
        <div className="relative w-12 h-12 flex-shrink-0 cursor-pointer">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/d29aff430ff9a77db31c9e2a9867f6583c3a4b5e99c36135b677002a1c203c0a._SX1080_FMjpg_.jpg"
            className="rounded-full w-12 h-12 object-cover"
          />
          <div className="absolute bottom-0 right-0 border-white w-4 h-4 rounded-full" />
        </div>
        <button className="flex-1 text-left cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-4 py-2 text-gray-600 font-medium">
          What's on your mind?
        </button>
      </div>
      <div>
        <div className="flex justify-around items-center py-2">
          <button className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors rounded-full px-4 py-2">
            <IoVideocam className="h-5 w-5 text-red-500" />
            <span className="text-gray-600">Live video</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors rounded-full px-4 py-2">
            <IoMdPhotos className="h-5 w-5 text-green-400" />
            <span className="text-gray-600">Photo/Video</span>
          </button>
          <button className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors rounded-full px-4 py-2">
            <MdOutlineAddReaction className="h-5 w-5 text-yellow-400" />
            <span className="text-gray-600">Feelings/activity</span>
          </button>
        </div>
      </div>
    </div>
  );
}
