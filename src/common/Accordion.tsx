"use client";
import useClickOutside from "hooks/useClickOutside";
import React, { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

type AccordianProps = {
  containerClasses?: string;
  contentClasses?: string;
  titleClasses?: string;
  titleContainer?: string;
  arrowClasses?: string;
  activeTitle?: string;
  children: string | React.ReactNode;
  title: string;
  icon?: React.ReactNode;
};

const KamanAccordion = ({
  containerClasses,
  contentClasses,
  titleClasses,
  titleContainer,
  arrowClasses,
  children,
  icon,
  activeTitle,
  title,
}: AccordianProps) => {
  // states
  const [open, setOpen] = useState<boolean>(false);
  const [contentSize, setContentSize] = useState<number>(0);
  // content ref
  const contentRef = useRef<null | HTMLDivElement>(null);
  const AccordionBody = useClickOutside(() => setOpen(false));
  // reset contentSize state according to the size of the element
  useEffect(() => {
    if (open) {
      const content: number = Number(contentRef.current?.scrollHeight);
      setContentSize(content);
    }
  }, [open]);

  return (
    <>
      <div
      ref={AccordionBody}
        onClick={() => setOpen((prev) => !prev)}
        className={`${open ? "rounded-tr-lg rounded-tl-lg bg-primary-50/60 border-b border-primary-200" : "rounded-lg"} flex cursor-pointer items-center justify-between px-1 py-2 mt-4 ${containerClasses}`}
      >
        <div className={`flex-center gap-x-1 ${titleContainer}`}>
          {icon && icon}
          <span className={`${titleClasses} ${open && activeTitle}`}>
            <span className={`${open && "text-amber-600 font-semibold"}`}>{title}</span>
          </span>
        </div>
        <HiChevronDown className={`smooth-transition size-4 text-primary will-change-transform ${arrowClasses} ${
            open && "rotate-180"
          }`}
        />
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${open ? contentSize : 0}px`,
          overflow: `hidden`,
          willChange: "height",
        }}
        className={`smooth-transition ${contentClasses}`}
      >
        {children}
      </div>
    </>
  );
};

export default KamanAccordion;
