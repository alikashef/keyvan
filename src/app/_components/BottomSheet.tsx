"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  hasBackdrop?: boolean;
  hasBlur?: boolean;
  isClosable?: boolean;
};

export default function BottomSheet({
  isOpen,
  onClose,
  children,
  hasBackdrop = true,
  hasBlur = true,
  isClosable = true,
}: BottomSheetProps) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isClosable && (event.target as HTMLElement).id === "backdrop") {
        onClose();
      }
    };
    
    // Prevent body scrolling when BottomSheet is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose, isClosable]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="backdrop"
          className={cn(
            "fixed inset-0 z-50 flex items-end justify-center",
            hasBackdrop && "bg-black/50  max-w-lg w-full mx-auto",
            hasBlur && "backdrop-blur-sm  max-w-lg w-full mx-auto"
          )}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 50 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className={cn(" bg-background rounded-t-2xl  max-w-lg w-full mx-auto px-4 pb-16")}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
