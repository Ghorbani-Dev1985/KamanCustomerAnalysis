'use client';
import Fieldset from '@/common/Fieldset'
import { BasicAnalysisItems } from '@/constants/BasicAnalysisItems';
import { Accordion, AccordionItem, Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useBasicAnalysisSettings } from 'hooks/useDataAnalysisSettings';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import toast from 'react-hot-toast';
import { LiaSave } from 'react-icons/lia';
import { UpdateDataAnalysisSettings } from 'services/DataAnalysisServics';

const BasisAnalysis = ({setIsOpenSingleAccordion} : {setIsOpenSingleAccordion: Dispatch<SetStateAction<boolean>>}) => {
      const {data: dataBasicAnalysisSettings} = useBasicAnalysisSettings()
      const queryClient = useQueryClient(); 
      const {isPending ,  mutateAsync: mutateDataAnalysisSettings } = useMutation({mutationFn: UpdateDataAnalysisSettings});
      console.log(dataBasicAnalysisSettings && dataBasicAnalysisSettings)
      const [basicAnalysisFormData, setBasicAnalysisFormData] = useState<{[key:string]: any}>({})
      const [equalSelect, setEqualSelect] = useState<{[key:string]:boolean}>({})
      const ChangeEqualSelectHandler = (key: string, value: boolean , select: string) => {
       setBasicAnalysisFormData(prev => ({ ...prev, [key]: { ...prev[key], equalSelect: value , selectName: select} }));
       setEqualSelect(prev => ({ ...prev, [key]: value }));
      }
      const ChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
       setBasicAnalysisFormData(prev => ({ ...prev, [name]: { ...prev[name], value } }));
     };
     const BasisAnalysisSettingsHandler = async () => {
       console.log(basicAnalysisFormData)
       try {
          let formData = new FormData();
         Object.entries(basicAnalysisFormData).map(([key, value]) => {
            const data = {
              inputName: key,
              value: value.value,
              equalSelect: value.equalSelect,
              selectName: value.selectName,
            };
            formData.append(data.inputName, JSON.stringify(data.value));
            if(data.equalSelect){
               formData.append(data.selectName, JSON.stringify(data.equalSelect));
            }
            return data;
          });
          const res = await mutateDataAnalysisSettings(formData)
          console.log(res)
      //   if(!error.hasError){
      //     toast.success("تنظیمات با موفقیت ثبت شد")
      //     queryClient.invalidateQueries({ queryKey: ["getUpdateDataAnalysisSettings"] });
      //   }       
       } catch (error) {
         toast.error("خطایی رخ داده است")
       }
     }

   return (
    <>
      <Fieldset title='پایه تحلیل'>
         <p className='my-8'>در این بخش می توانید بازه زمانی تحلیل را براساس فیلترهای مورد نیاز اعمال نمایید. این اعمال تغییرات در نتیجه کل تحلیل در صفحات نمای کلی، بخش بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، خوشه بندی مشتریان، تحلیل سبد مشتریان تاثیر دارد. </p>
         <Accordion variant="splitted" className='!px-0'>
        {
         BasicAnalysisItems.map(({id, title , selectName , inputName}) => {
           return ( 
       <AccordionItem key={id} aria-label={title} title={title} classNames={{base: "shadow-sm border px-0 overflow-hidden my-2" , heading : "px-1 bg-gray-100 rtl:data-[open=true]:border-b", title : "text-zinc-700 text-base" , content : "px-2 py-10" , indicator : "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
                     <div className='flex-between gap-x-2.5'>
                        <Select 
             variant="bordered"
             labelPlacement='outside'
             label="انتخاب کنید" 
             className="max-w-44"
             defaultSelectedKeys={["true"]}
             onChange={(e) => ChangeEqualSelectHandler(inputName, e.target.value === "true" , selectName)}
             size='md'
             classNames={{base : "data-[has-label=true]:mt-0",innerWrapper : "group-data-[has-label=true]:pt-0", label: "text-zinc-700 group-data-[filled=true]:text-zinc-700 group-data-[filled=true]:-translate-y-[calc(10%_+_theme(fontSize.small)/2_+_20px)] rtl:group-data-[filled=true]:right-2 px-1.5 bg-white"}} 
             >
               <SelectItem key="true" value="true">
                  برابر است با
               </SelectItem>
               <SelectItem key="false" value="false">
                  برابر نیست با
               </SelectItem>
           </Select>
                        <div className='flex-1 '> <Input placeholder=' لطفا مقداز مورد نظر خود را وارد نمایید' variant="bordered" classNames={{input: "text-zinc-600 placeholder:text-gray-300"}} name={inputName}  onChange={ChangeInputHandler}  /></div>
                     </div>
       </AccordionItem>
             )
          })
       }
         </Accordion>
      </Fieldset>
      <div className='w-full flex justify-end items-center gap-x-2'>
     <Button color="primary" variant="bordered" onPress={() => setIsOpenSingleAccordion(false)}>انصراف </Button>
      <Button color="primary" 
    //  disabled={(selectTimePeriod === "365" && selectComparisonTimePeriod === "none") && true} 
      startContent={<LiaSave className='size-4'/>} onPress={BasisAnalysisSettingsHandler}> ذخیره تنظیمات </Button>
     </div>
       </>
   )
}
export default BasisAnalysis
