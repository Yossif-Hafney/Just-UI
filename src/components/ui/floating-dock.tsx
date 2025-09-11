import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
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
  mobileClassName?: string;
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
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    className?: string | ((active: boolean) => string);
  }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2 "
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900",
                    item.className
                  )}
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
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
        "flex h-22 items-end justify-center px-2 pb-4 dark:bg-neutral-900 mr-40 w-full md:w-[520px]",
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
        "cursor-pointer relative flex aspect-square items-center justify-center mx-2 dark:bg-neutral-800 w-26 h-16 border-b-4",
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
