'use client';
import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'

const TimeFrameSettings = () => {
  return (
    <Accordion variant="splitted" className='my-6 shadow-sm !px-0'>
    <AccordionItem key="1" aria-label="تنظیمات بازه زمانی" title="تنظیمات بازه زمانی" subtitle="(بخش بندی مشتریان، ارزش طول عمر مشتریان، فاصله خرید مشتریان، خوشه‌بندی مشتریان)" classNames={{subtitle: "text-gray-400 text-sm" , indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
      dsd
    </AccordionItem>
  </Accordion>
  )
}

export default TimeFrameSettings
