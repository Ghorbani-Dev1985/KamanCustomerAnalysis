'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React , {useState} from 'react'
import SelectPurchaseAmountIndex from './SelectPurchaseAmountIndex';
import SelectNumberPurchaseIndex from './SelectNumberPurchaseIndex';
import RemoveOutliers from './RemoveOutliers';
import ChooseNumberCustomerCategories from './ChooseNumberCustomerCategories';

const CustomerSegmentationSettings = () => {
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  const [selectPurchaseAmount , setSelectPurchaseAmount] = useState("grossSales")
  const [selectNumberPurchase , setSelectNumberPurchase] = useState("numberSalesInvoices")
  const [isRemoveOutliers , setIsRemoveOutliers] = useState(false)
  const [numCustomerCategories , setNumCustomerCategories] = useState("11")
  console.log(isRemoveOutliers)
  return (
  <SingleAccordion
  isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
  title="تنظیمات بخش بندی مشتریان(RFM)"
  subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)">
  <SelectPurchaseAmountIndex setSelectPurchaseAmount={setSelectPurchaseAmount}/>
  <SelectNumberPurchaseIndex setSelectNumberPurchase={setSelectNumberPurchase}/>
  <RemoveOutliers isRemoveOutliers={isRemoveOutliers} setIsRemoveOutliers={setIsRemoveOutliers}/>
  <ChooseNumberCustomerCategories numCustomerCategories={numCustomerCategories} setNumCustomerCategories={setNumCustomerCategories}/>
</SingleAccordion>
  )
}

export default CustomerSegmentationSettings