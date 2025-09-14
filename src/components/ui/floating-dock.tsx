import { cn } from "@/lib/utils";

import { motion, useMotionValue } from "motion/react";

import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

export const FloatingDock = ({
  items,
  desktopClassName,
  hoveredButton,
  setHoveredButton,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    className?: string | ((active: boolean) => string);
  }[];
  desktopClassName?: string;
  hoveredButton?: string | null;
  setHoveredButton?: (button: string | null) => void;
}) => {
  const [localActive, setLocalActive] = useState<string | null>(
    items[0]?.title || null
  );
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        localActive={localActive}
        setLocalActive={setLocalActive}
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
      />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  localActive,
  setLocalActive,
  hoveredButton,
  setHoveredButton,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    className?: string | ((active: boolean) => string);
  }[];
  className?: string;
  localActive?: string | null;
  setLocalActive?: (title: string) => void;
  hoveredButton?: string | null;
  setHoveredButton?: (button: string | null) => void;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-22 items-end justify-center px-2 pb-4 dark:bg-neutral-900 mr-40 w-full min-[700px]:flex min-[700px]:max-[900px]:w-[300px] md:mr-0",
        className
      )}
    >
      {items.map((item) => {
        const isActive = localActive === item.title;
        const className =
          typeof item.className === "function"
            ? item.className(isActive)
            : item.className;
        return (
          <IconContainer
            key={item.title}
            title={item.title}
            icon={item.icon}
            className={className}
            active={isActive}
            onClick={
              setLocalActive ? () => setLocalActive(item.title) : undefined
            }
            hoveredButton={hoveredButton}
            setHoveredButton={setHoveredButton}
          />
        );
      })}
    </motion.div>
  );
};

function IconContainer({
  title,
  icon,
  active,
  onClick,
  className,
  hoveredButton,
  setHoveredButton,
}: {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  hoveredButton?: string | null;
  setHoveredButton?: (button: string | null) => void;
}) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHoveredButton?.(title.toLowerCase())}
      onMouseLeave={() => setHoveredButton?.(null)}
      className={cn(
        "cursor-pointer relative flex aspect-square items-center justify-center mx-2  min-[700px]:max-[900px]:mx-1 dark:bg-neutral-800 min-[700px]:flex min-[700px]:max-[900px]:w-15 w-26 h-16 border-b-4",
        active ? "border-b-[#1877f2]" : "border-b-transparent",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center text-[28px]",
          active ? "text-[#1877f2]" : "text-gray-500"
        )}
      >
        {icon}
      </div>
      {hoveredButton === title.toLowerCase() && (
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
          {title}
        </span>
      )}
    </div>
  );
}
