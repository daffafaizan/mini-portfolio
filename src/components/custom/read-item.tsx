"use client";

import { useState } from "react";
import { Read } from "@/interfaces/read";

export default function ReadItem({ read }: { read: Read }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <li key={read.id} className="grid grid-cols-2 mb-2 gap-8">
      <div className="relative">
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          target="_blank"
          href={read.url}
          rel="noopener noreferrer"
          className="hover:underline text-[#0000EE]"
        >
          {read.title}
          {read.favorite && <span className="text-red-500">*</span>}
        </a>
        {read.quote && isHovering && (
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-white border border-t-gray-200 absolute w-full left-5 top-6 z-10 p-2 text-sm"
          >
            {read.quote}
          </span>
        )}
      </div>
      <span>{read.author}</span>
    </li>
  );
}
