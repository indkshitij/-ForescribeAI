import Image from "next/image";
import Logo from "@/assets/LogoImg/logo.png";
import Link from "next/link";

interface ForescribeLogoProps {
  color?: string;
}
export default function ForescribeLogo({ color }: ForescribeLogoProps) {
  return (
    <Link href={"/"}>
      <div
        className="flex items-center select-none"
        role="img"
        aria-label="Forescribe company logo"
      >
        <div className="w-10 h-10 lg:w-12 lg:h-12">
          <Image
            src={Logo}
            alt="Forescribe Logo"
            className="w-full h-full object-contain pointer-events-none"
            priority
          />
        </div>

        <p
          className="-ml-1 md:-ml-1.5 mb-2 text-white tracking-tight text-xl xl:text-2xl"
          style={{ color: color || "white" }}
        >
          forescribe
        </p>
      </div>
    </Link>
  );
}
