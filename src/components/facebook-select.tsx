import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface FacebookSelectProps {
  options: Option[];
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function FacebookSelect({
  options,
  placeholder,
  value,
  onChange,
  className,
}: FacebookSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value);
  };

  const getDisplayText = () => {
    const selected = options.find((opt) => opt.value === selectedValue);
    return selected ? selected.label : placeholder;
  };

  const getDisplayStyle = () => {
    return selectedValue ? "text-[#1c1e21]" : "text-[#8a8d91]";
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full h-[36px] px-3 rounded text-[15px] font-normal leading-5 font-sans",
          "border border-[#dddfe2] bg-white text-left flex items-center justify-between",
          "hover:border-[#bcc0c4] focus:border-[#1877f2] focus:outline-none transition-colors",
          getDisplayStyle()
        )}
      >
        <span>{getDisplayText()}</span>
        <svg
          className={cn(
            "w-3 h-3 transition-transform text-[#65676b]",
            isOpen && "rotate-180"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#dddfe2] rounded shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option)}
              className={cn(
                "w-full px-3 py-2 text-left text-[15px] font-sans text-[#1c1e21]",
                "hover:bg-[#f0f2f5] focus:bg-[#f0f2f5] focus:outline-none transition-colors",
                selectedValue === option.value && "bg-[#e7f3ff] text-[#1877f2]"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
