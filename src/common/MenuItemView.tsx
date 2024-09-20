'use client'
import { MenuItems } from '@/constants/MenuItems';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiCaretLeft } from 'react-icons/bi';
import { HiChevronDown } from 'react-icons/hi2';

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
      <div className="w-full space-y-3 px-2">
        {MenuItems.map(({ id, title, href, icon, subMenu }) => {
          return (
            <React.Fragment key={id}>
              {subMenu ? (
                <div
                  className="group flex flex-col rounded-lg px-1.5 py-3"
                  tabIndex={id}
                >
                  <div className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center text-xs md:text-base gap-x-1.5">
                      {icon}
                      <span> {title} </span>
                    </div>
                    <HiChevronDown className="size-5 text-primary transition-all duration-500 group-focus:-rotate-180" />
                  </div>
                  <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                    <ul>
                      {subMenu.map(({ id, title, href }) => {
                        const isActive = (pathName === href);
                        return (
                          <li key={id}>
                            <Link
                              href={href}
                              className={`${isActive && "bg-primary-50/60"} flex items-center text-xs md:text-base hover:text-secondary px-1.5 py-3 gap-x-1 transition-colors`}
                            >
                              <BiCaretLeft className="size-5 text-amber-500 transition-colors" />
                              {title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    href={href}
                    className={`${pathName === href && "bg-primary-50/60"} flex items-center rounded-lg text-sm md:text-base  hover:text-secondary px-1.5 py-3 gap-x-1 transition-colors`}
                  >
                    {icon}
                    <span>{title}</span>
                  </Link>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  )
}

export default MenuItemView
