'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React, { useState } from 'react'
import TimePeriodAnalysis from './TimePeriodAnalysis';

const TimeFrameSettings = () => {
    const [selectTimePeriod, setSelectTimePeriod] = useState("365")
    const [userTimePeriod, setUserTimePeriod] = useState(91)
  return (
<SingleAccordion title='تنظیمات بازه زمانی' subTitle="(بخش بندی مشتریان، ارزش طول عمر مشتریان، فاصله خرید مشتریان، خوشه‌بندی مشتریان)">
    <TimePeriodAnalysis setSelectTimePeriod={setSelectTimePeriod} userTimePeriod={userTimePeriod} setUserTimePeriod={setUserTimePeriod}/>
</SingleAccordion>
  )
}

export default TimeFrameSettings
