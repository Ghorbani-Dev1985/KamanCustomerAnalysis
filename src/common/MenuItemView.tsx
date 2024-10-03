"use client";
import { MenuItems } from "@/constants/MenuItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiCaretLeft } from "react-icons/bi";
import { Accordion, AccordionItem, link } from "@nextui-org/react";
function MenuItemView() {
  const pathName = usePathname();
  return (
    <>
      <div className="min-h-36">
        <Image
          width={190}
          height={100}
          alt="کمان"
          className="my-4"
          placeholder="blur"
          blurDataURL="/images/logo/logo.png"
          src="/images/logo/logo.png"
        />
      </div>
      <div className="w-full">
        {MenuItems.map(({ id, title, href, icon, subMenu }) => {
          if (subMenu) {
            return (
              <Accordion key={id} variant="light" className="!px-0">
                <AccordionItem
                  aria-label={title}
                  startContent={icon}
                  title={title}
                  classNames={{
                    base: "rtl:data-[open=true]:bg-primary-50/50 px-0 overflow-hidden my-2",
                    trigger: "py-3",
                    heading:
                      "px-1 rtl:data-[open=true]:border-b rtl:data-[open=true]:text-orange-500",
                    title:
                      "text-zinc-700 rtl:data-[open=true]:text-orange-500 text-base",
                    content: "py-3",
                    indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90",
                  }}
                >
                  {subMenu.map(({ id, title, href }) => {
                    const isActiveRoute = pathName === href;
                    return (
                      <Link
                        key={id}
                        href={href}
                        className={`${
                          isActiveRoute && "bg-primary-100 font-bold"
                        } flex items-center text-xs md:text-base hover:text-text-orange-400 py-3 gap-x-1 transition-colors`}
                      >
                        <BiCaretLeft
                          className={`${
                            isActiveRoute
                              ? "text-orange-600"
                              : "text-orange-400"
                          } size-5  transition-colors`}
                        />
                        {title}
                      </Link>
                    );
                  })}
                </AccordionItem>
              </Accordion>
            );
          } else {
            return (
              <Link
                key={id}
                href={href}
                className={`${
                  pathName === href && "bg-primary-50/80 font-bold"
                } flex items-center text-sm md:text-base hover:text-orange-400 px-1.5 py-3 gap-x-1 transition-colors`}
              >
                {icon}
                <span>{title}</span>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
export default MenuItemView;
