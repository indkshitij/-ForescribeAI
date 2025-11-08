import React from "react";
import LoginButton from "@/components/Buttons/LoginButton";
import { BsGoogle, BsMicrosoft } from "react-icons/bs";
import AnimatedLogo from "@/components/Branding/AnimatedLogo";
import Link from "next/link";

const Login = () => {
  return (
    <div
      className="w-full mx-auto "
      role="form"
      aria-label="Login with Google or Microsoft to access Forescribe"
    >
      <div className="p-6 sm:p-7 flex flex-col items-center gap-4 text-center bg-black/20 backdrop-blur-sm rounded-2xl w-full">
        <AnimatedLogo />

        <h1
          role="heading"
          className="text-base sm:text-lg lg:text-lg font-normal text-white mb-1"
        >
          Welcome to Forescribe
        </h1>

        <LoginButton
          color="bg-[#8B3DFF]"
          logo={<BsGoogle />}
          content="Continue with Google"
        />
        <LoginButton
          color="bg-[#4A4A4A]"
          logo={<BsMicrosoft />}
          content="Continue with Microsoft"
        />
      </div>

      <p
        aria-label="Legal disclaimer about terms and privacy policy"
        className="mt-0.5 mx-0.5 text-[10px]  font-light leading-relaxed text-white text-justify "
      >
        By clicking “Continue with Google/Microsoft” above, you acknowledge that
        you have read and understood, and agree to Forescribe's{" "}
        <Link
          href="/term-and-conditions"
          className="text-primary underline hover:opacity-80"
        >
          {" "}
          Terms & Conditions
          {" "}
        </Link>
        and{" "}
        <Link
          href="/privacy-policy"
          className="text-primary underline hover:opacity-80"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default Login;
