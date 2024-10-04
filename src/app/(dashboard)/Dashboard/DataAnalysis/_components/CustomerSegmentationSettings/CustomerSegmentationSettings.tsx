'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React , {useState} from 'react'
import SelectPurchaseAmountIndex from './SelectPurchaseAmountIndex';
import SelectNumberPurchaseIndex from './SelectNumberPurchaseIndex';
import RemoveOutliers from './RemoveOutliers';
import ChooseNumberCustomerCategories from './ChooseNumberCustomerCategories';
import { Button } from '@nextui-org/react';
import { LiaSave } from 'react-icons/lia';
import ScoringMethod from './ScoringMethod';


const CustomerSegmentationSettings = () => {
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  const [selectPurchaseAmount , setSelectPurchaseAmount] = useState("grossSales")
  const [selectNumberPurchase , setSelectNumberPurchase] = useState("numberSalesInvoices")
  const [isRemoveOutliers , setIsRemoveOutliers] = useState(false)
  const [numCustomerCategories , setNumCustomerCategories] = useState("11")
  const  [isScoringMethod , setIsScoringMethod] = useState(false)
   
  const CustomerSegmentationSettingsHandler = async(data : any) => {
      console.log(data)
  }
 console.log(isScoringMethod)
  return (
  <SingleAccordion
  isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
  title="تنظیمات بخش بندی مشتریان(RFM)"
  subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)">
  <SelectPurchaseAmountIndex setSelectPurchaseAmount={setSelectPurchaseAmount}/>
  <SelectNumberPurchaseIndex setSelectNumberPurchase={setSelectNumberPurchase}/>
  <RemoveOutliers isRemoveOutliers={isRemoveOutliers} setIsRemoveOutliers={setIsRemoveOutliers}/>
  <ChooseNumberCustomerCategories numCustomerCategories={numCustomerCategories} setNumCustomerCategories={setNumCustomerCategories}/>
  <ScoringMethod handler={CustomerSegmentationSettingsHandler} setIsScoringMethod={setIsScoringMethod}>
  <div className='w-full flex justify-end items-center gap-x-2'>
    <Button color="primary" variant="bordered" onPress={() => setIsOpenSingleAccordion(false)}>انصراف </Button>
     <Button type='submit' onClick={CustomerSegmentationSettingsHandler} color="primary" disabled={(selectPurchaseAmount === "grossSales" && selectNumberPurchase === "numberSalesInvoices" && !isRemoveOutliers && numCustomerCategories === "11" && !isScoringMethod) && true} startContent={<LiaSave className='size-4'/>}> ذخیره تنظیمات </Button>
    </div>
    </ScoringMethod>
</SingleAccordion>
  )
}

export default CustomerSegmentationSettings