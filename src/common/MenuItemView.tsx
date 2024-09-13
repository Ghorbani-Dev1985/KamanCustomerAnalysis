import { MenuItems } from '@/constants/MenuItems';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiCaretLeft } from 'react-icons/bi';
import { HiChevronDown } from 'react-icons/hi2';

function MenuItemView() {
  return (
    <>
        <Image
        width={224}
        height={300}
        alt="کمان"
        placeholder="blur"
        blurDataURL={`/images/logo/logo.png`}
        src={`/images/logo/logo.png`}
      />
      <div className="w-full space-y-3 px-2">
        {MenuItems.map(({ id, title, href, icon, subMenu }) => {
          return (
            <React.Fragment key={id}>
              {subMenu ? (
                <div
                  className="group flex flex-col rounded-lg bg-primary-50/60 px-1.5 py-3 shadow"
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
                        return (
                          <li key={id}>
                            <Link
                              href={href}
                              className="flex items-center text-xs md:text-base hover:text-primary-800 px-1.5 py-3 gap-x-1 transition-colors"
                            >
                              <BiCaretLeft className="size-5 text-amber-500" />
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
                    className="flex items-center rounded-lg text-sm md:text-base bg-primary-50/60 hover:text-primary-800 shadow px-1.5 py-3 gap-x-1 transition-colors"
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
