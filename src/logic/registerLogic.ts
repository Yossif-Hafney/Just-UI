// Logic helpers for Register page
import { useState, useEffect, useRef } from "react";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface WarnedFields {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
}

export function useRegisterForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [warned, setWarned] = useState<WarnedFields>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
      // Clear warning if user types anything
      if (warned[field] && e.target.value.trim()) {
        setWarned((prev) => ({ ...prev, [field]: false }));
      }
    };

  const handleInputBlur = (field: keyof FormValues) => () => {
    if (!formValues[field].trim() && !warned[field]) {
      setWarned((prev) => ({ ...prev, [field]: true }));
    }
  };

  return {
    formValues,
    warned,
    handleInputChange,
    handleInputBlur,
  };
}

export function useBirthdaySelection() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return {
    selectedDay,
    setSelectedDay,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
  };
}

export function useTooltips() {
  const [showBirthdayTooltip, setShowBirthdayTooltip] = useState(false);
  const [showGenderTooltip, setShowGenderTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const genderTooltipRef = useRef<HTMLDivElement>(null);

  const toggleBirthdayTooltip = () => {
    setShowBirthdayTooltip(!showBirthdayTooltip);
  };

  const toggleGenderTooltip = () => {
    setShowGenderTooltip(!showGenderTooltip);
  };

  // Handle click outside to close tooltips
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowBirthdayTooltip(false);
      }
      if (
        genderTooltipRef.current &&
        !genderTooltipRef.current.contains(event.target as Node)
      ) {
        setShowGenderTooltip(false);
      }
    };

    if (showBirthdayTooltip || showGenderTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBirthdayTooltip, showGenderTooltip]);

  return {
    showBirthdayTooltip,
    showGenderTooltip,
    tooltipRef,
    genderTooltipRef,
    toggleBirthdayTooltip,
    toggleGenderTooltip,
  };
}

export const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

export const monthOptions = [
  { value: "1", label: "Jan" },
  { value: "2", label: "Feb" },
  { value: "3", label: "Mar" },
  { value: "4", label: "Apr" },
  { value: "5", label: "May" },
  { value: "6", label: "Jun" },
  { value: "7", label: "Jul" },
  { value: "8", label: "Aug" },
  { value: "9", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

export const yearOptions = Array.from({ length: 100 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return {
    value: String(year),
    label: String(year),
  };
});
