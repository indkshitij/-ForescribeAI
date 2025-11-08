"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import useDarkMode from "@/app/hooks/useDarkMode";

const DarkModeToggler = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="cursor-pointer relative flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-[#8B3DFF] to-[#602bd9]  text-white shadow-lg border border-white/10 hover:scale-110 hover:shadow-2xl active:scale-95  transition-all duration-300 ease-in-out"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <BsSun className="w-6 h-6 text-yellow-300" />
            ) : (
              <BsMoon className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export default DarkModeToggler;
