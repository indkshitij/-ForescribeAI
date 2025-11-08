"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        bg-primary w-36 py-2 
        text-xs cursor-pointer rounded-lg text-white 
        flex items-center justify-center gap-3
        transform transition-all duration-300 ease-in-out
        hover:scale-[1.05] hover:shadow-lg 
        active:scale-[0.97]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60
      "
    >
      <BsArrowLeft className="text-lg sm:text-xl" />
      <span className="text-sm sm:text-base">Go Back</span>
    </button>
  );
};

export default GoBackButton;
