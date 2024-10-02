import { Button } from '@nextui-org/react'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

const SingleAccordion = ({children, isOpenSingleAccordion , setIsOpenSingleAccordion , title , subTitle , marginStyle} : {children : ReactNode , isOpenSingleAccordion: boolean , setIsOpenSingleAccordion : Dispatch<SetStateAction<boolean>> , title : string , subTitle? : string , marginStyle? : string}) => {
  return (
    <div className={`${marginStyle ? {marginStyle} : "my-6"} w-full`}>
   <Button onPress={() => setIsOpenSingleAccordion((prev) => !prev)} disableRipple disableAnimation className={`${isOpenSingleAccordion ? "rounded-b-none border border-gray-300" : "rounded-b-lg"} w-full bg-gray-100 min-h-20 flex-between font-medium gap-y-2`}>
    <div className='flex flex-col items-start'>
    <div className='text-base text-zinc-600'>{title}</div>
    <div className='text-gray-500 text-sm'>{subTitle}</div>
    </div>
    <HiOutlineChevronDown className={`${isOpenSingleAccordion && "rotate-180"} size-4 text-gray-400 transition-all ease-in-out duration-400`}/>
   </Button>
   <div className={`${isOpenSingleAccordion ? "block will-change-auto h-auto overflow-y-auto bg-white px-2 py-10 rounded-b-lg border-b border-l border-r" : "hidden h-0"} `}>
    {children}
   </div>
    </div>
  )
}

export default SingleAccordion
