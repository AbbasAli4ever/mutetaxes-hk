"use client";
import  { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
  maxWidth?: string; // optional max-width
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  maxWidth = "max-w-5xl",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn p-2 sm:p-4 "
      onClick={onClose} // click outside closes modal
    >
      <div
        className={`relative w-full h-auto sm:h-auto sm:max-h-[85vh] ${maxWidth} bg-white flex flex-col rounded-lg sm:rounded-xl overflow-hidden shadow-2xl`}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 text-black hover:text-red-500 transition bg-white rounded-full p-1 shadow-md"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        <div className="w-full h-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
