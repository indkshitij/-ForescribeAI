"use client";
import Image from "next/image";
import { ReactNode } from "react";

interface LoginButtonProps {
  color: string;
  logo?: ReactNode;
  content: string;
}

export default function LoginButton({
  color,
  logo,
  content,
}: LoginButtonProps) {
  return (
    <button
      className={`${color} w-64 py-2 text-xs  cursor-pointer rounded-lg  text-white flex items-center justify-center gap-3 transform transition-all duration-300 ease-in-out hover:scale-[1.04] active:scale-[0.98]`}
      role="button"
      aria-label={content}
    >
      <div className="w-[70%] flex items-center justify-start gap-1.5 ">
        <div className="w-8">
          {logo && <span className="text-lg">{logo}</span>}
        </div>
        <span className="font-normal lg:font-light">{content}</span>
      </div>
    </button>
  );
}
