'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React , {useState} from 'react'

const CustomerSegmentationSettings = () => {
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  return (
  <SingleAccordion
  isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
  title="تنظیمات بخش بندی مشتریان(RFM)"
  subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)">
  sd
</SingleAccordion>
  )
}

export default CustomerSegmentationSettings
