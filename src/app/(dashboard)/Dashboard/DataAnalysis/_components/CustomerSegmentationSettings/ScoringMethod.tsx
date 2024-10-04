import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import Fieldset from '@/common/Fieldset'
import { Accordion, AccordionItem} from '@nextui-org/react'
import { useForm, UseFormRegister } from 'react-hook-form'
import { HiMiniChevronLeft, HiMiniMinus } from 'react-icons/hi2'
import { MdOutlinePercent } from 'react-icons/md'
const ScoringMethod = ({children , handler , setIsScoringMethod , dataAnalysisSettings} : {children : ReactNode , handler : (data : any) => void , setIsScoringMethod : Dispatch<SetStateAction<boolean>> , dataAnalysisSettings : any}) => {
  console.log(dataAnalysisSettings?.results.recency1)
  const {register,handleSubmit , getValues , watch, setValue} = useForm({
    defaultValues: {
      recency100: 100,
      recency80: 80,
      recency60: 60,
      recency40: 40,
      recency20: 20,
      recency0: 0,
      frequency100: 100,
      frequency80: 80,
      frequency60: 60,
      frequency40: 40,
      frequency20: 20,
      frequency0: 0,
      monetary100: 100,
      monetary80: 80,
      monetary60: 60,
      monetary40: 40,
      monetary20: 20,
      monetary0: 0,
    }
  });
  useEffect(() => {
    if(dataAnalysisSettings){
      setValue("recency20", dataAnalysisSettings?.results.recency1)
      setValue("recency40", dataAnalysisSettings?.results.recency2)
      setValue("recency60", dataAnalysisSettings?.results.recency3)
      setValue("recency80", dataAnalysisSettings?.results.recency4)
      setValue("frequency20", dataAnalysisSettings?.results.frequency1)
      setValue("frequency40", dataAnalysisSettings?.results.frequency2)
      setValue("frequency60", dataAnalysisSettings?.results.frequency3)
      setValue("frequency80", dataAnalysisSettings?.results.frequency4)
      setValue("monetary20", dataAnalysisSettings?.results.monetary1)
      setValue("monetary40", dataAnalysisSettings?.results.monetary2)
      setValue("monetary60", dataAnalysisSettings?.results.monetary3)
      setValue("monetary80", dataAnalysisSettings?.results.monetary4)
    }
  },[dataAnalysisSettings])
  if(watch("recency80") != 80 || watch("recency60") != 60 || watch("recency40") != 40 || watch("recency20") != 20 || watch("frequency80") != 80 || watch("frequency60") != 60 || watch("frequency40") != 40 || watch("frequency20") != 20 || watch("monetary80") != 80 || watch("monetary60") != 60 || watch("monetary40") != 40 || watch("monetary20") != 20){
    setIsScoringMethod(true)
  }else{
    setIsScoringMethod(false)
  }
  return (
    <Fieldset title="شیوه امتیازدهی">
       <p>در این قسمت می توانید بازه‌های پیش‌فرض امتیازدهی Frequency, Recency و Monetary را که در محاسبه نهایی تحلیل RFM استفاده می شوند را به دلخواه خود، تغییر دهید.</p>
         <form onSubmit={handleSubmit(handler)}>
       <Accordion variant="splitted" className='!px-0'>
       <AccordionItem key="r" aria-label="Recency (R)" title="Recency (R)" subtitle="شیوه امتیازدهی تازگی مشتری" classNames={{base: "shadow-sm border px-0 overflow-hidden my-2" , heading : "px-1 bg-gray-100 rtl:data-[open=true]:border-b", title : "text-zinc-700 text-base" , content : "px-2 py-10" , indicator : "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
         <p className='mb-5'>در این قسمت می توانید بازه تقسیم‌بندی (شاخص تازگی خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
         <div className='flex-center gap-x-2.5'>
         <ScoringMethodInput register={register} name='recency100' value={100}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='recency80' value={80}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='recency60' value={60}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='recency40' value={40}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='recency20' value={20}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='recency0' value={0}/>
         </div>
         <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
             <ScoringMethodResultBox startPercent={getValues('recency80')} endPercent={getValues('recency100')} sectionScore={5} countResult={302} percentResult={15}/>
             <ScoringMethodResultBox startPercent={getValues('recency60')} endPercent={getValues('recency80')} sectionScore={4} countResult={789} percentResult={20}/>
             <ScoringMethodResultBox startPercent={getValues('recency40')} endPercent={getValues('recency60')} sectionScore={3} countResult={715} percentResult={18}/>
             <ScoringMethodResultBox startPercent={getValues('recency20')} endPercent={getValues('recency40')} sectionScore={2} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('recency0')} endPercent={getValues('recency20')} sectionScore={1} countResult={1709} percentResult={44}/>
         </div>
        </AccordionItem>
        <AccordionItem key="f" aria-label="Frequency (F)" title="Frequency (F)" subtitle="شیوه امتیازدهی میانگین سفارشات مشتری" classNames={{base: "shadow-sm border px-0 overflow-hidden my-2" , heading : "px-1 bg-gray-100 rtl:data-[open=true]:border-b", title : "text-zinc-700 text-base" , content : "px-2 py-10" , indicator : "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
        <p>در این قسمت می توانید بازه تقسیم‌بندی (شاخص تعداد خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
        <div className='flex-center gap-x-2.5'>
         <ScoringMethodInput register={register} name='frequency100' value={100}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency80' value={80}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency60' value={60}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency40' value={40}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency20' value={20}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency0' value={0}/>
         </div>
         <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
             <ScoringMethodResultBox startPercent={getValues('frequency80')} endPercent={getValues('frequency100')} sectionScore={5} countResult={220} percentResult={6}/>
             <ScoringMethodResultBox startPercent={getValues('frequency60')} endPercent={getValues('frequency80')} sectionScore={4} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('frequency40')} endPercent={getValues('frequency60')} sectionScore={3} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('frequency20')} endPercent={getValues('frequency40')} sectionScore={2} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('frequency0')} endPercent={getValues('frequency20')} sectionScore={1} countResult={3684} percentResult={94}/>
         </div>
        </AccordionItem>
        <AccordionItem key="m" aria-label="Monetary (M)" title="Monetary (M)" subtitle="شیوه امتیازدهی میانگین درآمد مشتری" classNames={{base: "shadow-sm border px-0 overflow-hidden my-2" , heading : "px-1 bg-gray-100 rtl:data-[open=true]:border-b", title : "text-zinc-700 text-base" , content : "px-2 py-10" , indicator : "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
        <p>در این قسمت می توانید بازه تقسیم‌بندی (شاخص مبلغ خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
        <div className='flex-center gap-x-2.5'>
         <ScoringMethodInput register={register} name='monetary100' value={100}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary80' value={80}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary60' value={60}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary40' value={40}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary20' value={20}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary0' value={0}/>
         </div>
         <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
             <ScoringMethodResultBox startPercent={getValues('monetary80')} endPercent={getValues('monetary100')} sectionScore={5} countResult={220} percentResult={6}/>
             <ScoringMethodResultBox startPercent={getValues('monetary60')} endPercent={getValues('monetary80')} sectionScore={4} countResult={36} percentResult={19}/>
             <ScoringMethodResultBox startPercent={getValues('monetary40')} endPercent={getValues('monetary60')} sectionScore={3} countResult={3658} percentResult={75}/>
             <ScoringMethodResultBox startPercent={getValues('monetary20')} endPercent={getValues('monetary40')} sectionScore={2} countResult={22} percentResult={1}/>
             <ScoringMethodResultBox startPercent={getValues('monetary0')} endPercent={getValues('monetary20')} sectionScore={1} countResult={2564} percentResult={80}/>
         </div>
        </AccordionItem>
        </Accordion>
        {children}
         </form>
    </Fieldset>
  )
}

export default ScoringMethod

type FieldValues = any
export const ScoringMethodInput = ({register, name , value } : {register: UseFormRegister<FieldValues>, name : string , value : number}) => {
  return (
    <div className="relative">
           <input {...register(name)}  type="number" min={0} max={100} className="bg-gray-50 border outline-none border-gray-300 text-zinc-700
           rounded-lg focus:border-primary block lg:max-w-20 xl:max-w-28 text-center ps-10 p-2.5"
            placeholder={value.toString()} />
         <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <MdOutlinePercent className='size-4'/>
            </div>
           </div>
  )
}
export const ArrowLine = () => {
  return(
    <div className='flex flex-col'>
     <HiMiniChevronLeft className='size-6'/>
     <HiMiniMinus className='-mt-2 w-6'/>
    </div>
  )
}
export const ScoringMethodResultBox = ({startPercent , endPercent , sectionScore , countResult, percentResult} : {startPercent : number , endPercent : number , sectionScore : number , countResult : number , percentResult : number}) => {
  return (
    <div className='flex flex-col items-center text-zinc-700 gap-y-3 border rounded-md'>
    <div className='flex flex-col items-center gap-y-3 p-3'>
      <p className='font-bold dir-ltr'>{startPercent}% - {endPercent}%</p>
      <span className='text-sm text-gray-500'>بازه برابر است با امتیاز</span>
      <span className='text-primary font-extrabold text-3xl'>{sectionScore}</span>
    </div>
          <div className='w-full flex flex-col min-h-28 bg-gray-200 items-center gap-y-3 py-6'>
                 <span className='text-zinc-500'>تعداد مشتریان این بخش</span>
                 <span className='dir-ltr font-bold'>{countResult.toLocaleString()} ({percentResult}%)</span>
            </div>
  </div>
  )
}