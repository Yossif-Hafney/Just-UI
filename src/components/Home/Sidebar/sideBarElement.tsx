import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function SideBarElement({
  icon,
  text,
  href,
}: {
  icon?: ReactNode;
  text: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 py-3 h-full w-full rounded-md 
                 hover:bg-gray-200
                  relative overflow-hidden"
    >
      {/* Subtle background gradient on hover */}
      <div className="absolute opacity-20 " />

      {icon && <div className="flex-shrink-0 relative pl-2 z-10">{icon}</div>}

      <span className="flex-1 font-medium text-[0.875rem] leading-[1.333] text-[#808089] text-start">
        {text}
      </span>
    </Link>
  );
}
