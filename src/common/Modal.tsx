import { ModalBodyProps, ModalHeaderProps, ModalProps } from "@/types/modalTypes";
import useClickOutside from "hooks/useClickOutside";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const ModalHeader = ({
  children,
  onClose,
  containerClass,
  iconClass: IconClass,
  titleClass,
}: ModalHeaderProps) => {
  return (
    <div
      className={`flex w-full items-center justify-between bg-zinc-50  ${containerClass}`}
    >
      {children && <h1 className={titleClass}>{children}</h1>}
      <button onClick={onClose} className="flex-center size-8 hover:bg-primary-50 rounded-full transition-colors">
        <HiXMark className={`size-6 text-rose-500 ${IconClass}`} />
      </button>
    </div>
  );
};

const ModalBody = ({ children, containerClass }: ModalBodyProps) => {
  return <div className={`${containerClass}`}>{children}</div>;
};

const CustomModal = ({ children, containerClasses, open, onClose }: ModalProps) => {
  // state
  const [isClient, setIsClient] = useState(false);

  //   hooks
  useEffect(() => {
    setIsClient(true);
  }, []);

  // To close the modal when it is clicked outside the modal
  const ref = useClickOutside(onClose);

  // deactive scroll when modal is open
  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "visible";
  }, [open]);

  if (typeof window === "object" && isClient) {
    return (
      open &&
      createPortal(
        <div
          className={`smooth-transition fixed inset-0 z-[999999999] flex items-center justify-center bg-primary-50/40 backdrop-blur-sm will-change-["opacity"] ${containerClasses}  ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {
            <div ref={ref} className="relative w-full max-w-lg bg-white overflow-hidden rounded-lg shadow-sm border border-primary-100">
              {children}
            </div>
          }
        </div>,
        document.body
      )
    );
  }
};

CustomModal.Header = ModalHeader;
CustomModal.Body = ModalBody;

export default CustomModal;