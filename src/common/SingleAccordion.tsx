import { Button } from '@nextui-org/react'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

const SingleAccordion = ({children, isOpenSingleAccordion , setIsOpenSingleAccordion , title , subTitle} : {children : ReactNode , isOpenSingleAccordion: boolean , setIsOpenSingleAccordion : Dispatch<SetStateAction<boolean>> , title : string , subTitle : string}) => {
  return (
    <div className='w-full my-6'>
   <Button onPress={() => setIsOpenSingleAccordion((prev) => !prev)} disableRipple className={`${isOpenSingleAccordion ? "rounded-b-none border-b border-gray-300" : "rounded-b-lg"} w-full bg-gray-100 min-h-20 flex-between font-medium gap-y-2`}>
    <div className='flex flex-col items-start'>
    <div className='text-base'>{title}</div>
    <div className='text-gray-500 text-sm'>{subTitle}</div>
    </div>
    <HiOutlineChevronDown className='size-4 text-gray-400'/>
   </Button>
   <div className={`${isOpenSingleAccordion ? "opacity-100 will-change-auto h-auto overflow-y-auto bg-white px-2 py-10 rounded-b-lg" : "opacity-0 h-0"} `}>
    {children}
   </div>
    </div>
  )
}

export default SingleAccordion
