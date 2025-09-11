import { Card } from "@heroui/card";
export default function StatusCard() {
  return (
    <div className="flex flex-row items-center justify-start shadow-md w-auto h-auto pl-1 pr-1 cursor-pointer">
      <Card className="border-none" radius="lg">
        <div className="flex-none w-[114.5px] h-[200px] ">
          <img
            alt="Woman listing to music"
            className="object-cover w-full h-full rounded-lg"
            src="https://heroui.com/images/hero-card.jpeg"
          />
        </div>
      </Card>
    </div>
  );
}
