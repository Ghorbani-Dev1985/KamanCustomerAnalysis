import React from 'react'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'
import ScoringMethodInput from './ScoringMethodInput'
import ArrowLine from './ArrowLine'
import ScoringMethodResultBox from './ScoringMethodResultBox'

function Frequency({register, getValues}: {
    register: UseFormRegister<any>
    getValues: UseFormGetValues<any>
  }) {
  return (
    <>
      <p>در این قسمت می توانید بازه تقسیم‌بندی (شاخص تعداد خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
        <div className='flex-center gap-x-2.5'>
         <ScoringMethodInput register={register} name='frequency100' value={100} disabled/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency80' value={80}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency60' value={60}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency40' value={40}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency20' value={20}/>
         <ArrowLine />
         <ScoringMethodInput register={register} name='frequency0' value={0} disabled/>
         </div>
         <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
             <ScoringMethodResultBox startPercent={getValues('frequency80')} endPercent={getValues('frequency100')} sectionScore={5} countResult={220} percentResult={6}/>
             <ScoringMethodResultBox startPercent={getValues('frequency60')} endPercent={getValues('frequency80')} sectionScore={4} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('frequency40')} endPercent={getValues('frequency60')} sectionScore={3} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('frequency20')} endPercent={getValues('frequency40')} sectionScore={2} countResult={0} percentResult={0}/>
             <ScoringMethodResultBox startPercent={getValues('frequency0')} endPercent={getValues('frequency20')} sectionScore={1} countResult={3684} percentResult={94}/>
         </div> 
    </>
  )
}

export default Frequency
