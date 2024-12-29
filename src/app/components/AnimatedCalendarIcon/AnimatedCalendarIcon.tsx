"use client";

import { cn } from "@/utils/utils";
import { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";

const Calendar = LuCalendarClock as React.ElementType;

export default function AnimatedCalendarIcon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={cn(
        "fixed bottom-5 shadow-lg right-8 flex items-center bg-blue-400 p-4 text-white rounded-xl transition-all duration-300 ease-in-out",
        isHovered ? "pr-32 pl-4" : "p-4"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "absolute left-16 text-xl font-medium whitespace-nowrap transition-all duration-300 ease-in-out",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
        )}
      >
        Talk to Us
      </span>
      <Calendar
        size={28}
        className="transition-all duration-300 ease-in-out z-10"
      />
    </button>
  );
}
