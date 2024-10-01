'use client';
import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'

const CustomerSegmentationSettings = () => {
  return (
    <Accordion variant="splitted" className='my-6 shadow-sm !px-0'>
    <AccordionItem key="1" aria-label="تنظیمات بخش بندی مشتریان(RFM)" title="تنظیمات بخش بندی مشتریان(RFM)" subtitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)" classNames={{subtitle: "text-gray-400 text-sm" , indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
      dsd
    </AccordionItem>
  </Accordion>
  )
}

export default CustomerSegmentationSettings
