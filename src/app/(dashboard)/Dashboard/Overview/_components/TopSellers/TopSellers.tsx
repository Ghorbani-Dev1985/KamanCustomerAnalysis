import React from 'react'
import TopSellersGrossSalesRight from './TopSellersGrossSalesRight'
import TopSellersGrossSalesLeft from './TopSellersGrossSalesLeft'

const TopSellers = () => {
  return (
    <section className='flex-between gap-5'>
      <TopSellersGrossSalesRight />
      <TopSellersGrossSalesLeft />
    </section>
  )
}

export default TopSellers
