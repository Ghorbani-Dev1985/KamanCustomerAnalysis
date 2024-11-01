import React from 'react'
import { Control, UseFormRegister, useWatch } from 'react-hook-form'
import ScoringMethodInput from './ScoringMethodInput'
import ArrowLine from './ArrowLine'
import ScoringMethodResultBox from './ScoringMethodResultBox'

function Monetary({register,control}: {
    register: UseFormRegister<any>
    control: Control<any>
  }) {
    const watchValues = useWatch({
      control,
      name: ['monetary1', 'monetary2', 'monetary3', 'monetary4']
    })
  return (
    <>
       <p>در این قسمت می توانید بازه تقسیم‌بندی (شاخص مبلغ خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
        <div className='flex-center gap-x-2.5'>
         <ScoringMethodInput register={register} name='monetary100' value={100} disabled/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary4' value={80}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary3' value={60}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary2' value={40}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary1' value={20}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary0' value={0} disabled/>
         </div>
         <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
             <ScoringMethodResultBox startPercent={watchValues[3]} endPercent={100} sectionScore={5} countResult={220} percentResult={6}/>
             <ScoringMethodResultBox startPercent={watchValues[2]} endPercent={watchValues[3]} sectionScore={4} countResult={36} percentResult={19}/>
             <ScoringMethodResultBox startPercent={watchValues[1]} endPercent={watchValues[2]} sectionScore={3} countResult={3658} percentResult={75}/>
             <ScoringMethodResultBox startPercent={watchValues[0]} endPercent={watchValues[1]} sectionScore={2} countResult={22} percentResult={1}/>
             <ScoringMethodResultBox startPercent={0} endPercent={watchValues[0]} sectionScore={1} countResult={2564} percentResult={80}/>
         </div>
    </>
  )
}

export default Monetary
