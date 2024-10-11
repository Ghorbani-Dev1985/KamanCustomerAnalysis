'use client';
import DatesSubHeader from '@/common/SelectDatesHeader/DatesSubHeader'
import React, { useState } from 'react'
import ShowSummeryInfos from './ShowSummeryInfos'
import { FactorInfoType, ProductInfoType } from '@/types/infosType';

const OverviewSummeryView = () => {
   const [getFactorInfo, setGetFactorInfo] = useState<{ date1: FactorInfoType; percentage: ProductInfoType }>({ date1: {} as FactorInfoType, percentage: {} as ProductInfoType })
 return (
   <section className='flex flex-col'>
      <DatesSubHeader setGetFactorInfo={setGetFactorInfo}/>
      <ShowSummeryInfos getFactorInfo={getFactorInfo}/>
   </section>
 )
}

export default OverviewSummeryView
