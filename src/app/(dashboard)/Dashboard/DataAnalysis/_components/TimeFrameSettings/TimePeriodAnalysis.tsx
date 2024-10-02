'use client';
import Fieldset from '@/common/Fieldset'
import { Radio, RadioGroup } from '@nextui-org/react'
import React, { Dispatch, FocusEvent, SetStateAction, useState } from 'react'
import HelpTooltip from '@/common/HelpTooltip';
import toast from 'react-hot-toast';

const TimePeriodAnalysis = ({setSelectTimePeriod , userTimePeriod , setUserTimePeriod} : {setSelectTimePeriod : Dispatch<SetStateAction<string>> , userTimePeriod : number , setUserTimePeriod : Dispatch<SetStateAction<number>>}) => {
    const [isUserTimePeriod , setIsUserTimePeriod] = useState(false)
    const UserTimePeriodHandler = (e: FocusEvent<HTMLInputElement>) => {
      const numberValue = Number(e.target.value)
      if (numberValue < 91) {
        setUserTimePeriod(91)
        toast.error("بازه زمانی نمیتواند کمتر از ۹۱ روز باشد")
      }
      console.log(numberValue)
    }
  return (
     <Fieldset title='دوره زمانی تحلیل'>
        <p className='my-8'>در این بخش می توانید بازه زمانی تحلیل را انتخاب کنید وضعیت مشتریان در صفحات بخش‌بندی مشتریان، ارزش طول عمر مشتریان، فاصله خرید مشتریان، خوشه بندی مشتریان برحسب این بازه زمانی در نظر گرفته می شود.</p>
        <RadioGroup
      orientation="horizontal"
      classNames={{base: "w-full" , wrapper: "flex-between"}}
      onChange={(e) => {
        setSelectTimePeriod(e.target.value)
        setIsUserTimePeriod(false)
        setUserTimePeriod(91)
      }}
      defaultValue={"365"}
    >
      <Radio value="90">۹۰ روز</Radio>
      <Radio value="180">۱۸۰ روز</Radio>
      <Radio value="365"> ۱ سال </Radio>
      <Radio value="730">۲ سال</Radio>
      <Radio value="datas" >
        <div className='flex-center gap-x-1.5'>
        <span>از ابتدای داده</span>
         <HelpTooltip content='بازه زمانی تحلیل بر اساس ابتدای داده انتخاب می شود.'/>
        </div>
      </Radio>
      <div className='flex-center gap-x-2.5'>
      <Radio value="91" onChange={() => setIsUserTimePeriod(true)}>  دوره دلخواه</Radio>
        <div className='flex-center gap-x-1.5'>
          <input type="number" disabled={!isUserTimePeriod && true} min={"91"} value={userTimePeriod} onBlur={(e) => UserTimePeriodHandler(e)} className='w-14 h-12 border border-gray-300 disabled:opacity-30 focus:border-primary rounded-lg text-center outline-none transition-colors' onChange={(e) => setUserTimePeriod(Number(e.target.value))} />
          <span>روز (بیش از ۹۰ روز)</span>
        </div>
        </div>
    </RadioGroup>    
     </Fieldset>
  )
}

export default TimePeriodAnalysis
