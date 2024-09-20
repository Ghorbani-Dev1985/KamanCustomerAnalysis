'use client';
import { SelectDateItems } from '@/constants/SelectItems';
import { Button, Divider, Input, Select, SelectItem } from '@nextui-org/react'
import useClickOutside from 'hooks/useClickOutside';
import React, { ChangeEvent, useState } from 'react'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { HiCalendarDays, HiOutlineInformationCircle } from 'react-icons/hi2';
import {Calendar, DateObject, type Value} from "react-multi-date-picker"


const DatesSubHeader = () => {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const datePickerRef = useClickOutside(() => setShowDatePicker(false));
    const [isEnterUserDate , setIsEnterUserDate] = useState(true)
    const [startUserDate, setStartUserDate] = useState(new DateObject({ calendar: persian }).toFirstOfWeek());
    const [endUserDate, setEndUserDate] = useState(new DateObject({ calendar: persian }).toLastOfWeek());
    const [desiredTimePeriod, setDesiredTimePeriod] = useState([
        new DateObject({ calendar: persian }).toFirstOfWeek(),
        new DateObject({ calendar: persian }).toLastOfWeek(),
      ]);
    const [value2, setValue2] = useState([
        new DateObject({ calendar: persian }).toFirstOfWeek(),
        new DateObject({ calendar: persian }).toLastOfWeek(),
      ]);
    let startDesiredTimePeriod , endDesiredTimePeriod;
      const SelectTimePeriodHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const SelectId = e.target.value;
        setIsEnterUserDate(false)
        switch (SelectId) {
          case "1":
              setIsEnterUserDate(true)
              startDesiredTimePeriod = startUserDate
              endDesiredTimePeriod = endUserDate
              setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
          case "2":
          startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(2, "day");
          endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
           setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
          return
          case "3":
            let dayOfWeek = new DateObject({calendar: persian}).weekDay.index;
            let startOfThisWeek = new DateObject({calendar: persian}).subtract(dayOfWeek, "days");
            let endOfThisWeek = new DateObject({calendar: persian}).subtract(dayOfWeek, "days");
            startDesiredTimePeriod = startOfThisWeek.subtract(7 , "days");
            endDesiredTimePeriod = endOfThisWeek.subtract(1 , "days");
            setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
            return
            case "4":
              let startLastMonthDate = new DateObject({calendar: persian}).subtract(1, "month");
              let endLastMonthDate = new DateObject({calendar: persian}).subtract(1, "month");
              startDesiredTimePeriod = startLastMonthDate.setDay(1);
              endDesiredTimePeriod = endLastMonthDate.add(1, "month").setDay(1);
              setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
              return
              case "5":
              startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(7, "days");
              endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
              setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
              return
              case "6":
              startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(30, "days");
              endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
              setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
              return
              case "7":
              startDesiredTimePeriod = new DateObject({calendar: persian}).subtract(365, "days");
              endDesiredTimePeriod = new DateObject({calendar: persian}).subtract(1, "day");
              setDesiredTimePeriod([startDesiredTimePeriod , endDesiredTimePeriod]);
              return
          default:
            break;
        }
      };
      const SplitDesiredTimePeriod = desiredTimePeriod.toString().split(",");
      const StartUserDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = JSON.parse(e.target.value);
        console.log(inputValue)
        const dateOject = new DateObject({calendar: persian, locale: persian_fa});
        if(dateOject.isValid){
            setStartUserDate(inputValue);
            
           console.log(startUserDate)
        }else{
            setStartUserDate(inputValue);
        }
      };
      const EndUserDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = JSON.parse(e.target.value);
        const dateOject = new DateObject({calendar: persian, locale: persian_fa});
        if(dateOject.isValid){
            setEndUserDate(inputValue);
            console.log(endUserDate)
        }else{
            setEndUserDate(inputValue);
        }
      };
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
                  <span>{SplitDesiredTimePeriod[0]}</span>
                  <span>تا</span>
                  <span>{SplitDesiredTimePeriod[1]}</span>
                    </div>
                 {/*  <div className='flex-center gap-x-1'>
                  <span>مقایسه با</span>
                  <span>{start_time2}</span>
                  <span>تا</span>
                  <span>{end_time2}</span> 
                  </div>*/}
                  </div>
                </Button>
           <Divider orientation='vertical' className='h-full w-px bg-gray-100'/>
               <div ref={datePickerRef} className={`${!showDatePicker ? "opacity-100 visible" : "opacity-0 invisible"} absolute z-50 w-full flex flex-col max-w-[65rem] right-0 top-20 rounded-lg bg-white overflow-hidden shadow-fullDark transition-all ease-in-out duration-300`}>
                <div className='flex h-full min-h-80 '>
                  <div className='w-2/5 border-l border-gray-100 text-zinc-700'>
                    <div className='h-1/2 border-r-4 border-r-primary overflow-hidden border-b border-b-gray-100 px-3 py-4'>
                      <p className='font-normal'>انتخاب بازه زمانی</p>
                      <Select size='lg' items={SelectDateItems} aria-label='نتخاب بازه زمانی' aria-labelledby='نتخاب بازه زمانی' defaultSelectedKeys="1" onChange={SelectTimePeriodHandler} variant='bordered'>

                         {
                          (SelectDateItem) => (
                            <SelectItem key={SelectDateItem.id} value={SelectDateItem.name}>
                              {SelectDateItem.title}
                            </SelectItem>
                          )
                        }
                      </Select>
                      <div className='flex-between gap-x-4 my-4'>
                       
                        {
                            isEnterUserDate ? <>
                             <Input size='lg' variant="bordered" placeholder='تاریخ متعبر: ۱۴۰۱/۰۱/۰۱' value={startUserDate.toString()} onChange={StartUserDateHandler}
                            classNames={{inputWrapper: "data-[hover=true]:border-primary group-data-[focus=true]:border-primary" , input: "text-center text-base placeholder:text-xs"}}
                            />
                             <span>تا</span>
                             <Input size='lg' variant="bordered" placeholder='تاریخ متعبر: ۱۴۰۱/۰۲/۰۲' value={endUserDate.toString()} onChange={EndUserDateHandler}
                            classNames={{inputWrapper: "data-[hover=true]:border-primary group-data-[focus=true]:border-primary" , input: "text-center text-base placeholder:text-xs"}}
                            />
                            </> : <>
                            
                            <Input size='lg' variant="bordered" value={SplitDesiredTimePeriod[0]} 
                            classNames={{inputWrapper: "data-[hover=true]:border-primary group-data-[focus=true]:border-primary" , input: "text-center text-base"}}
                            />
                             <span>تا</span>
                             <Input size='lg' variant="bordered" value={SplitDesiredTimePeriod[1]} classNames={{inputWrapper: "data-[hover=true]:border-primary group-data-[focus=true]:border-primary" , input: "text-center text-base"}}/>
                            </>
                            
                        }
                      </div>
                    </div>
                    <div className='h-1/2 border-r-4 border-r-amber-500 overflow-hidden border-b border-b-gray-100 px-3 py-4'>2</div>
                  </div>
                  <div className='w-3/5 min-h-[23rem] px-3 py-4'>
                  <div className='flex-center'>
                  <Calendar
                    range
                   value={desiredTimePeriod}
                   calendar={persian}
                   locale={persian_fa}
                   onChange={setDesiredTimePeriod}
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