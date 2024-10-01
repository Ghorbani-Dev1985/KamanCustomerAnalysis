import React, { ReactNode } from 'react'
import { HiOutlineLightBulb } from 'react-icons/hi'

const SubHeader = ({children} : {children?: ReactNode}) => {
  return (
    <section className="relative w-full flex-between bg-white h-20 mb-3 rounded-lg shadow-sm">
      <div>
         {children}
      </div>
    <div className="flex-center font-normal h-full gap-x-1 pl-1.5">
      <HiOutlineLightBulb  className="size-4" />
      <span>راهنما</span>
    </div>
  </section>
  )
}

export default SubHeader
