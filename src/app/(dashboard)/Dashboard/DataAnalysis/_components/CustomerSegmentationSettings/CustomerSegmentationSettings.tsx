'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React , {useState} from 'react'
import SelectPurchaseAmountIndex from './SelectPurchaseAmountIndex';

const CustomerSegmentationSettings = () => {
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  const [selectPurchaseAmount , setSelectPurchaseAmount] = useState("grossSales")
  return (
  <SingleAccordion
  isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
  title="تنظیمات بخش بندی مشتریان(RFM)"
  subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)">
  <SelectPurchaseAmountIndex setSelectPurchaseAmount={setSelectPurchaseAmount}/>
</SingleAccordion>
  )
}

export default CustomerSegmentationSettings