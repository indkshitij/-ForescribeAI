"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  type: "company" | "person";
  logo: StaticImageData;
  name?: string;
  role?: string;
  quote?: string;
  bg: string;
  bgGradient: string;
}

const InfoCard: React.FC<CardProps> = ({
  type,
  logo,
  name,
  role,
  quote,
  bg,
  bgGradient,
}) => {
  return (
    <div
      className="rounded-lg h-96 md:h-112 py-4 sm:py-5 px-3 sm:px-4 flex flex-col items-center text-center shadow-[0px_4px_25px_rgba(0,0,0,0.08)] break-inside-avoid"
      style={
        type === "company"
          ? {
              background: `linear-gradient(180deg, #FFFFFF 0%, ${bgGradient} 279.53%)`,
            }
          : { background: "#FFFFFF" }
      }
    
      aria-label=
      {type === "company"
        ? `${name} company card showing ${role}`
        : `${name} testimonial card with quote`}
    >
      {/* COMPANY */}
      {type === "company" && (
        <>
          <div
            className="w-full h-56 md:h-64 rounded-2xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: bg }}
          >
            <Image
              src={logo}
              alt={name || "Image"}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-lg md:text-2xl mt-4 text-[#19154E]">
              {name}
            </h3>
            <p className="text-[#595959] text-sm sm:text-lg md:text-xl font-medium">
              {role}
            </p>
          </div>
        </>
      )}
      {/* PERSON */}
      {type === "person" && (
        <>
          <div
            className="w-full h-56 md:h-64 rounded-2xl flex items-end justify-center shadow-md"
            style={{ backgroundColor: bg }}
          >
            <Image
              src={logo}
              alt={name || "Image"}
              className="w-auto h-[75%] sm:h-[80%] md:h-[85%]"
            />
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-lg md:text-2xl mt-4 text-[#19154E]">
              {name}
            </h3>
            <p className="text-[#111111] text-sm sm:text-base md:text-lg mt-2 max-w-[95%] leading-normal font-normal">
              "{quote}"
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCard;
