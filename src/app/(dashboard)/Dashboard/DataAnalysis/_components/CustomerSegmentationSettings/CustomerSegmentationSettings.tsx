'use client';
import SingleAccordion from '@/common/SingleAccordion';
import React , {useEffect, useState} from 'react'
import SelectPurchaseAmountIndex from './SelectPurchaseAmountIndex';
import SelectNumberPurchaseIndex from './SelectNumberPurchaseIndex';
import RemoveOutliers from './RemoveOutliers';
import ChooseNumberCustomerCategories from './ChooseNumberCustomerCategories';
import { Button, Spinner } from '@nextui-org/react';
import { LiaSave } from 'react-icons/lia';
import ScoringMethod from './ScoringMethod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateDataAnalysisSettings } from 'services/DataAnalysisServics';
import toast from 'react-hot-toast';
import { useCustomerSegmentationSettings } from 'hooks/useDataAnalysisSettings';

const CustomerSegmentationSettings = () => {
  const {data: dataAnalysisSettings } = useCustomerSegmentationSettings()
  const queryClient = useQueryClient(); 
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  const [selectPurchaseAmount , setSelectPurchaseAmount] = useState("pure_sale")
  const [selectNumberPurchase , setSelectNumberPurchase] = useState("sale_factor_count")
  const [isRemoveOutliers , setIsRemoveOutliers] = useState(0)
  const [numCustomerCategories , setNumCustomerCategories] = useState(11)
  const [isScoringMethod , setIsScoringMethod] = useState(false)
  useEffect(() => {
    if(dataAnalysisSettings){
      setIsRemoveOutliers(dataAnalysisSettings.results.outlayer)
      setNumCustomerCategories(dataAnalysisSettings.results.segment)
      setSelectPurchaseAmount(dataAnalysisSettings.results.recency_type)
      setSelectNumberPurchase(dataAnalysisSettings.results.frequncy_type)
    }
  },[dataAnalysisSettings])
  const {isPending ,  mutateAsync: mutateDataAnalysisSettings } = useMutation({mutationFn: UpdateDataAnalysisSettings});
  const CustomerSegmentationSettingsHandler = async(data : any) => {
    let formData = new FormData();
    formData.append("outlayer", isRemoveOutliers.toString());
    formData.append("segment", numCustomerCategories.toString());
    formData.append("recency1", data.recency20);
    formData.append("recency2", data.recency40);
    formData.append("recency3", data.recency60);
    formData.append("recency4", data.recency80);
    formData.append("frequency1", data.frequency20);
    formData.append("frequency2", data.frequency40);
    formData.append("frequency3", data.frequency60);
    formData.append("frequency4", data.frequency80);
    formData.append("monetary1", data.monetary20);
    formData.append("monetary2", data.monetary40);
    formData.append("monetary3", data.monetary60);
    formData.append("monetary4", data.monetary80);
    formData.append("recency_type", selectPurchaseAmount);
    formData.append("frequncy_type", selectNumberPurchase);
      try{
        const {error} = await mutateDataAnalysisSettings(formData)
        if(!error.hasError){
          toast.success("تنظیمات با موفقیت ثبت شد")
          console.log()
          queryClient.invalidateQueries({ queryKey: ["getUpdateDataAnalysisSettings"] });
        }
      }catch (error) {
        toast.error("خطایی رخ داده است")
      }
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
  <ScoringMethod handler={CustomerSegmentationSettingsHandler} setIsScoringMethod={setIsScoringMethod} dataAnalysisSettings={dataAnalysisSettings}>
  <div className='w-full flex justify-end items-center gap-x-2 my-3'>
    <Button color="primary" variant="bordered" onPress={() => setIsOpenSingleAccordion(false)}>انصراف </Button>
     <Button type='submit' onClick={CustomerSegmentationSettingsHandler} color="primary" disabled={(selectPurchaseAmount === dataAnalysisSettings?.results?.recency_type && selectNumberPurchase === dataAnalysisSettings?.results?.frequncy_type && isRemoveOutliers == dataAnalysisSettings?.results?.outlayer && numCustomerCategories == dataAnalysisSettings?.results?.segment && !isScoringMethod && !isPending) && true} startContent={<LiaSave className='size-4'/>}>
       {
        isPending ? <Spinner color='white' size='md'/> : <span>ذخیره تنظیمات</span> 
       }
      </Button>
    </div>
    </ScoringMethod>
</SingleAccordion>
  )
}

export default CustomerSegmentationSettings