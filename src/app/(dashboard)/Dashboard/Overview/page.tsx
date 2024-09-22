import DatesSubHeader from '@/common/SelectDatesHeader/DatesSubHeader'
import React from 'react'
import ShowSummeryInfos from './_components/ShowSummeryInfos'

const Overview = () => {
  return (
    <section className='flex flex-col'>
       <DatesSubHeader />
       <ShowSummeryInfos />
    </section>
  )
}

export default Overview
