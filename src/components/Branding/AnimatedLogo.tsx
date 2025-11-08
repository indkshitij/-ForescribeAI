"use client";
import { useState } from "react";
import Image from "next/image";
import logoGif from "@/assets/LogoImg/logo.gif";

export default function AnimatedLogo() {
  const [gifKey, setGifKey] = useState(0);

  const replayGif = () => {
    setGifKey((prev) => prev + 1);
  };

  return (
    <div
      onMouseEnter={replayGif}
      className="cursor-pointer select-none transition transform hover:scale-105"
    >
      <div className="w-8 h-8  xl:w-10 xl:h-10">
        <Image
          role="img"
          aria-label="Forescribe animated logo"
          key={gifKey}
          src={logoGif}
          alt="Forescribe Logo Animation"
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
