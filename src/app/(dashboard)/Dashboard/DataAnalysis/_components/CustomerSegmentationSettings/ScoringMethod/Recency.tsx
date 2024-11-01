import React from 'react'
import { Control, UseFormRegister, useWatch } from 'react-hook-form';
import ScoringMethodInput from './ScoringMethodInput';
import ArrowLine from './ArrowLine';
import ScoringMethodResultBox from './ScoringMethodResultBox';

function Recency({register, control}: {
  register: UseFormRegister<any>
  control: Control<any>
}) {
  const watchValues = useWatch({
    control,
    name: ['recency1', 'recency2', 'recency3', 'recency4']
  })

  return (
    <>
    <p className='mb-5'>در این قسمت می توانید بازه تقسیم‌بندی (شاخص تازگی خرید) مشتریان را به دلخواه خود و متناسب با نیاز، تغییر دهید</p>
    <div className='flex-center gap-x-2.5'>
    <ScoringMethodInput register={register} name='recency100' value={100} disabled/>
    <ArrowLine />
    <ScoringMethodInput register={register} name='recency4' value={80}/>
    <ArrowLine />
    <ScoringMethodInput register={register} name='recency3' value={60}/>
    <ArrowLine />
    <ScoringMethodInput register={register} name='recency2' value={40}/>
    <ArrowLine />
    <ScoringMethodInput register={register} name='recency1' value={20}/>
    <ArrowLine />
    <ScoringMethodInput register={register} name='recency0' value={0} disabled/>
    </div>
    <p className='my-2'> جدول امتیازات مشتریان بر اساس مقادیری که در بالا مشخص کرده‌اید به شکل زیر خواهد بود:</p>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4'>
        <ScoringMethodResultBox startPercent={watchValues[3]} endPercent={100} sectionScore={5} countResult={302} percentResult={15}/>
        <ScoringMethodResultBox startPercent={watchValues[2]} endPercent={watchValues[3]} sectionScore={4} countResult={789} percentResult={20}/>
        <ScoringMethodResultBox startPercent={watchValues[1]} endPercent={watchValues[2]} sectionScore={3} countResult={715} percentResult={18}/>
        <ScoringMethodResultBox startPercent={watchValues[0]} endPercent={watchValues[1]} sectionScore={2} countResult={0} percentResult={0}/>
        <ScoringMethodResultBox startPercent={0} endPercent={watchValues[0]} sectionScore={1} countResult={1709} percentResult={44}/>
    </div>
    </>
  )
}
export default Recency
