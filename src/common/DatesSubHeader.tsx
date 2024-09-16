'use client';
import { Button, Divider } from '@nextui-org/react'
import useClickOutside from 'hooks/useClickOutside';
import React, { useState } from 'react'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { HiCalendarDays, HiOutlineInformationCircle } from 'react-icons/hi2';
import{Calendar, DateObject, type Value} from "react-multi-date-picker"
const DatesSubHeader = () => {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const datePickerRef = useClickOutside(() => setShowDatePicker(false));
    const [value, setValue] = useState([
        new DateObject({ calendar: persian }).toFirstOfWeek(),
        new DateObject({ calendar: persian }).toLastOfWeek(),
      ]);
    const [value2, setValue2] = useState([
        new DateObject({ calendar: persian }).toFirstOfWeek(),
        new DateObject({ calendar: persian }).toLastOfWeek(),
      ]);
     const start_time1 = value?.toLocaleString().split(',')[0];
     const end_time1 = value?.toLocaleString().split(',')[1];
     const start_time2 = value2?.toLocaleString().split(',')[0];
     const end_time2 = value2?.toLocaleString().split(',')[1];
    console.log(value?.toLocaleString().split(',')[0] , value2?.toLocaleString().split(','))
  return (
    <section className='relative w-full flex-between bg-white h-20 mb-3 rounded-lg shadow-fullLight'>
        <div className='flex-center h-full'>
        
      <Button
                  color="primary"
                  variant="light"
                  onPress={() => setShowDatePicker((prev) => !prev)}
                  className='hover:bg-primary-50 h-full px-1'
                >
                  <div className='flex flex-col text-xs md:text-sm gap-y-2'>
                    <div className='flex items-start gap-x-1'> 
                  <HiCalendarDays className='size-4'/>
                  <span>{start_time1}</span>
                  <span>تا</span>
                  <span>{end_time1}</span>
                    </div>
                  <div className='flex-center gap-x-1'>
                  <span>مقایسه با</span>
                  <span>{start_time2}</span>
                  <span>تا</span>
                  <span>{end_time2}</span>
                  </div>
                  </div>
                </Button>
           <Divider orientation='vertical' className='h-full w-px bg-gray-100'/>
               <div ref={datePickerRef} className={`${showDatePicker ? "opacity-100 visible" : "opacity-0 invisible"} absolute z-50 w-full flex flex-col max-w-[65rem] right-0 top-20 rounded-lg bg-white overflow-hidden shadow-fullDark transition-all ease-in-out duration-300`}>
                <div className='flex h-full min-h-80'>
                  <div className='w-2/5 border-l border-gray-100'>
                    <div className='h-1/2 border-r-4 border-r-primary overflow-hidden border-b border-b-gray-100 px-3 py-4'>1</div>
                    <div className='h-1/2 border-r-4 border-r-amber-500 overflow-hidden border-b border-b-gray-100 px-3 py-4'>2</div>
                  </div>
                  <div className='w-3/5 min-h-[23rem] px-3 py-4'>
                  <div className='flex gap-x-6'>
                  <Calendar
  range
  value={value}
  calendar={persian}
  locale={persian_fa}
  onChange={setValue}
/>
<Calendar
  range
  value={value2}
  calendar={persian}
  locale={persian_fa}
  onChange={setValue2}
/>
                  </div>
                  </div>
                </div>
                  <Divider />
                  <div className='w-full flex justify-end items-center p-6'>
                     <div className='flex-center gap-x-4'>
                     <Button
                  color="primary"
                  variant="bordered"
                  onPress={() => setShowDatePicker(false)}
                >
                  انصراف
                </Button>
                <Button
                  color="primary"
                  variant="solid"
                  onPress={() => setShowDatePicker(true)}
                >
                  اعمال
                </Button>
                     </div>
                  </div>
               </div>
        </div>
        <div className='flex-center font-normal h-full gap-x-1 pl-1.5'>
        <HiOutlineInformationCircle className='size-4'/>
        <span>راهنما</span>
        </div>
    </section>
  )
}

export default DatesSubHeader
