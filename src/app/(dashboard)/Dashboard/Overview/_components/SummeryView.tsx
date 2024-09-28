import DatesSubHeader from '@/common/SelectDatesHeader/DatesSubHeader'
import React, { useState } from 'react'
import ShowSummeryInfos from './ShowSummeryInfos'

const SummeryView = () => {
    const [factorInfos , setFactorInfos] = useState([])
    const [productInfos , setProductInfos] = useState([])
  return (
    <>
       <DatesSubHeader setFactorInfos={setFactorInfos} setProductInfos={setProductInfos} />
       <ShowSummeryInfos factorInfos={factorInfos} productInfos={productInfos} />
    </>
  )
}

export default SummeryView
