"use client";
import { motion } from "framer-motion";
import ForescribeLogo from "@/components/Branding/ForescribeLogo";
import InfoCardContainer from "@/components/Cards/InfoCardContainer";
import Login from "@/components/Authentication/Login";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  return (
    <>
      <motion.div
        className="h-screen max-h-screen overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {/* Logo */}
        <motion.div
          className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-6 md:left-10"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
        >
          <ForescribeLogo />
        </motion.div>

        {/* bg gradient */}
        <div className="z-10 bg-black/80">
          <motion.div
            className="z-20 h-screen flex justify-center items-center"
            style={{
              background:
                "linear-gradient(118.88deg, rgba(0, 0, 0, 0.6) 38.24%, rgba(139, 61, 255, 0.55) 97.48%, rgba(139, 61, 255, 0.55) 108.58%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Login */}
            <motion.div
              className="z-40 flex flex-col justify-center items-center w-88 md:w-95 "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3, ease: "easeOut" }}
            >
              <Login />
            </motion.div>
          </motion.div>

          {/* Card */}
          <motion.div
            className="absolute -top-96 -z-10 w-full"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          >
            <InfoCardContainer />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
