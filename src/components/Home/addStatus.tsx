import { Card } from "@heroui/card";
import { FiPlus } from "react-icons/fi";

export default function AddStatus() {
  return (
    <div className="flex flex-row items-center shadow-md justify-start w-auto h-auto pl-0 pr-1 cursor-pointer ">
      <Card className="border-none" radius="lg">
        <div className="flex-none relative w-[114.5px] h-[200px] ">
          <img
            alt="Woman listing to music"
            className="object-cover w-full h-[188px] rounded-lg"
            src="https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg"
          />
          <div className="absolute right-9 bottom-3 z-10 -translate-y-1/2 border-4 border-white rounded-full w-10 h-10 shadow-md flex items-center justify-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1877f2]">
              <FiPlus className="text-white text-2xl" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-white rounded-b-lg"></div>
          <p className="absolute left-1/2 bottom-4 -translate-x-1/2 text-xs font-semibold text-center whitespace-nowrap">
            Create Story
          </p>
        </div>
      </Card>
    </div>
  );
}
