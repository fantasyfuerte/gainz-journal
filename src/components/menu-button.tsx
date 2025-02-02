"use client";

import { CgClose, CgMenuLeft } from "react-icons/cg";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>
        <CgMenuLeft size={30} className="cursor-pointer" />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            className="absolute top-0 left-0 w-[80%] h-screen z-10 bg-background/90 border-r-2 border-background/80 backdrop-blur-sm"
          >
            <button onClick={handleClick}>
              <CgClose size={25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuButton;
