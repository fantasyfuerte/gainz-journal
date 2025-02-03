"use client";

import { CgClose, CgMenuLeft } from "react-icons/cg";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function MenuButton({ children }: Readonly<{ children: React.ReactNode }>) {
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
            className="absolute top-0 left-0 w-[85%] sm:w-[70%]  md:w-[50%] lg:w-[40%] xl:w-[30%] h-screen z-10 bg-background/80 border-r-2 border-background/90 backdrop-blur-sm p-4"
          >
            <div className="flex justify-between">
              <h4 className="text-center text-xl font-bold">Menu</h4>
              <button onClick={handleClick}>
                <CgClose size={25} />
              </button>
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuButton;
