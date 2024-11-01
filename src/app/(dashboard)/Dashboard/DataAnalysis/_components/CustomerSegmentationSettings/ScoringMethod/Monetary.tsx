import React from 'react'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'
import ScoringMethodInput from './ScoringMethodInput'
import ArrowLine from './ArrowLine'
import ScoringMethodResultBox from './ScoringMethodResultBox'

function Monetary({register, getValues}: {
    register: UseFormRegister<any>
    getValues: UseFormGetValues<any>
  }) {
  return (
    <>
       <p>در این قسمت می توانید بازه تقسیم‌بندی (شاخص مبلغ خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
        <div className='flex-center gap-x-2.5'>
         <ScoringMethodInput register={register} name='monetary100' value={100} disabled/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary80' value={80}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary60' value={60}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary40' value={40}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary20' value={20}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='monetary0' value={0} disabled/>
         </div>
         <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
             <ScoringMethodResultBox startPercent={getValues('monetary80')} endPercent={getValues('monetary100')} sectionScore={5} countResult={220} percentResult={6}/>
             <ScoringMethodResultBox startPercent={getValues('monetary60')} endPercent={getValues('monetary80')} sectionScore={4} countResult={36} percentResult={19}/>
             <ScoringMethodResultBox startPercent={getValues('monetary40')} endPercent={getValues('monetary60')} sectionScore={3} countResult={3658} percentResult={75}/>
             <ScoringMethodResultBox startPercent={getValues('monetary20')} endPercent={getValues('monetary40')} sectionScore={2} countResult={22} percentResult={1}/>
             <ScoringMethodResultBox startPercent={getValues('monetary0')} endPercent={getValues('monetary20')} sectionScore={1} countResult={2564} percentResult={80}/>
         </div>
    </>
  )
}

export default Monetary
