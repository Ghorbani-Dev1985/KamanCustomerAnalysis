'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React, { useState } from 'react'
import TimePeriodAnalysis from './TimePeriodAnalysis';
import ComparisonTimePeriodAnalysis from './ ComparisonTimePeriodAnalysis';
import { Button } from '@nextui-org/react';
import { LiaSave } from "react-icons/lia";

const TimeFrameSettings = () => {
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
    const [selectTimePeriod, setSelectTimePeriod] = useState("365")
    const [userTimePeriod, setUserTimePeriod] = useState(91)
    const [selectComparisonTimePeriod, setSelectComparisonTimePeriod] = useState("none")
  return (
<SingleAccordion isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion} title='تنظیمات بازه زمانی' subTitle="(بخش بندی مشتریان، ارزش طول عمر مشتریان، فاصله خرید مشتریان، خوشه‌بندی مشتریان)">
    <TimePeriodAnalysis setSelectTimePeriod={setSelectTimePeriod} userTimePeriod={userTimePeriod} setUserTimePeriod={setUserTimePeriod}/>
    <ComparisonTimePeriodAnalysis setSelectComparisonTimePeriod={setSelectComparisonTimePeriod}/>
    <div className='w-full flex justify-end items-center gap-x-2'>
    <Button color="primary" variant="bordered" onPress={() => setIsOpenSingleAccordion(false)}>انصراف </Button>
     <Button color="primary" disabled={(selectTimePeriod === "365" && selectComparisonTimePeriod === "none") && true} startContent={<LiaSave className='size-4'/>} className=''> ذخیره تنظیمات </Button>
    </div>
</SingleAccordion>
  )
}

export default TimeFrameSettings
