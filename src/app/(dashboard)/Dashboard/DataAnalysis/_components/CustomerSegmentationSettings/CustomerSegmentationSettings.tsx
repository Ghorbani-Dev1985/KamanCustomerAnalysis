'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React , {useEffect, useState} from 'react'
import SelectPurchaseAmountIndex from './SelectPurchaseAmountIndex';
import SelectNumberPurchaseIndex from './SelectNumberPurchaseIndex';
import RemoveOutliers from './RemoveOutliers';
import ChooseNumberCustomerCategories from './ChooseNumberCustomerCategories';
import { Button, Spinner } from '@nextui-org/react';
import { LiaSave } from 'react-icons/lia';
import ScoringMethod from './ScoringMethod/ScoringMethod';
import { useCustomerSegmentationSettings, useUpdateDataAnalysisSettings } from 'hooks/useDataAnalysisSettings';

const CustomerSegmentationSettings = () => {
  const { data } = useCustomerSegmentationSettings()
  const {SegmentationSettings} = data || {}
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  const [selectPurchaseAmount , setSelectPurchaseAmount] = useState("pure_sale")
  const [selectNumberPurchase , setSelectNumberPurchase] = useState("sale_factor_count")
  const [isRemoveOutliers , setIsRemoveOutliers] = useState(0)
  const [numCustomerCategories , setNumCustomerCategories] = useState(11)
  const [isScoringMethod , setIsScoringMethod] = useState(false)
  useEffect(() => {
    if(SegmentationSettings){
      setIsRemoveOutliers(SegmentationSettings.results.outlayer)
      setNumCustomerCategories(SegmentationSettings.results.segment)
      setSelectPurchaseAmount(SegmentationSettings.results.recency_type)
      setSelectNumberPurchase(SegmentationSettings.results.frequncy_type)
    }
  },[SegmentationSettings])
  const {isUpdateDataAnalysisSettings , UpdateDataAnalysisSettings} = useUpdateDataAnalysisSettings()
  const CustomerSegmentationSettingsHandler = (data : any) => {
    let formData = new FormData();
    formData.append("outlayer", isRemoveOutliers.toString());
    formData.append("segment", numCustomerCategories.toString());
    for(const key in data) {
      formData.append(key, data[key]);
    }
    UpdateDataAnalysisSettings(formData)
  }
  return (
  <SingleAccordion
  isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
  title="تنظیمات بخش بندی مشتریان(RFM)"
  subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)">
  <SelectPurchaseAmountIndex selectPurchaseAmount={selectPurchaseAmount} setSelectPurchaseAmount={setSelectPurchaseAmount}/>
  <SelectNumberPurchaseIndex selectNumberPurchase={selectNumberPurchase} setSelectNumberPurchase={setSelectNumberPurchase}/>
  <RemoveOutliers isRemoveOutliers={isRemoveOutliers} setIsRemoveOutliers={setIsRemoveOutliers}/>
  <ChooseNumberCustomerCategories numCustomerCategories={numCustomerCategories} setNumCustomerCategories={setNumCustomerCategories}/>
  {/* Because use of useForm in  ScoringMethod component */}
  <ScoringMethod handler={CustomerSegmentationSettingsHandler} setIsScoringMethod={setIsScoringMethod}>
  <div className='w-full flex justify-end items-center gap-x-2 my-3'>
    <Button color="primary" variant="bordered" onPress={() => setIsOpenSingleAccordion(false)}>انصراف </Button>
     <Button type='submit' onClick={CustomerSegmentationSettingsHandler} color="primary" className='min-w-24' disabled={(selectPurchaseAmount === SegmentationSettings?.results?.recency_type && selectNumberPurchase === SegmentationSettings?.results?.frequncy_type && isRemoveOutliers == SegmentationSettings?.results?.outlayer && numCustomerCategories == SegmentationSettings?.results?.segment && !isScoringMethod && !isUpdateDataAnalysisSettings) && true} startContent={<LiaSave className='size-4'/>}>
       {
        isUpdateDataAnalysisSettings ? <Spinner color='white' size='md'/> : <span>ذخیره تغییرات</span>
       }
      </Button>
    </div> 
    </ScoringMethod>
</SingleAccordion>
  )
}

export default CustomerSegmentationSettings