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
import { useDataAnalysisSettings } from 'hooks/useDataAnalysisSettings';

const CustomerSegmentationSettings = () => {
  const {data: dataAnalysisSettings } = useDataAnalysisSettings()
  const queryClient = useQueryClient(); 
  const [isOpenSingleAccordion, setIsOpenSingleAccordion] = useState(false)
  const [selectPurchaseAmount , setSelectPurchaseAmount] = useState("grossSales")
  const [selectNumberPurchase , setSelectNumberPurchase] = useState("numberSalesInvoices")
  const [isRemoveOutliers , setIsRemoveOutliers] = useState(0)
  const [numCustomerCategories , setNumCustomerCategories] = useState(11)
  const  [isScoringMethod , setIsScoringMethod] = useState(false)
  console.log(dataAnalysisSettings && dataAnalysisSettings)
  useEffect(() => {
    if(dataAnalysisSettings){
      setIsRemoveOutliers(dataAnalysisSettings.results.outlayer)
      setNumCustomerCategories(dataAnalysisSettings.results.segment)
    }
  },[dataAnalysisSettings])
  const {isPending ,  mutateAsync: mutateUpdateDataAnalysisSettings } = useMutation({mutationFn: UpdateDataAnalysisSettings});
  const CustomerSegmentationSettingsHandler = async(data : any) => {
   
    let formData = new FormData();
    formData.append("outlayer", isRemoveOutliers.toString());
    formData.append("segments", numCustomerCategories.toString());
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
      try {
        const {error} = await mutateUpdateDataAnalysisSettings(formData)
        if(!error.hasError){
          toast.success("تنظیمات با موفقیت ثبت شد")
          console.log()
          queryClient.invalidateQueries({ queryKey: ["getDataAnalysisSettings"] });
        }
      } catch (error) {
        toast.error("خطایی رخ داده است")
        console.log(error)
      }
  }
  return (
  <SingleAccordion
  isOpenSingleAccordion={isOpenSingleAccordion} setIsOpenSingleAccordion={setIsOpenSingleAccordion}
  title="تنظیمات بخش بندی مشتریان(RFM)"
  subTitle="(نمای کلی، بخش‌بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، تحلیل سبد مشتریان)">
  <SelectPurchaseAmountIndex setSelectPurchaseAmount={setSelectPurchaseAmount}/>
  <SelectNumberPurchaseIndex setSelectNumberPurchase={setSelectNumberPurchase}/>
  <RemoveOutliers isRemoveOutliers={isRemoveOutliers} setIsRemoveOutliers={setIsRemoveOutliers}/>
  <ChooseNumberCustomerCategories numCustomerCategories={numCustomerCategories} setNumCustomerCategories={setNumCustomerCategories}/>
  <ScoringMethod handler={CustomerSegmentationSettingsHandler} setIsScoringMethod={setIsScoringMethod} dataAnalysisSettings={dataAnalysisSettings}>
  <div className='w-full flex justify-end items-center gap-x-2'>
    <Button color="primary" variant="bordered" onPress={() => setIsOpenSingleAccordion(false)}>انصراف </Button>
     <Button type='submit' onClick={CustomerSegmentationSettingsHandler} color="primary" disabled={(selectPurchaseAmount === "grossSales" && selectNumberPurchase === "numberSalesInvoices" && !isRemoveOutliers && numCustomerCategories === 11 && !isScoringMethod && isPending) && true} startContent={<LiaSave className='size-4'/>}>
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