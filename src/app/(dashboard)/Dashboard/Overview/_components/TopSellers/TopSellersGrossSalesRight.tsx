import ShowStartEndDates from '@/common/ShowStartEndDates'
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'

const TopSellersGrossSalesRight = () => {
  
  return (
    <section className='flex flex-1 flex-col overflow-hidden shadow-md rounded-lg'>
      <div className='box-header'>
           <p className='text-zinc-700 text-sm'>برترین‌های فروش من براساس فروش ناخالص چگونه بوده است؟</p>
           <ShowStartEndDates />
      </div>
      <div className='bg-white min-h-96 px-3 py-5'>
      <div className="flex w-full flex-col">
      <Tabs  
        aria-label="TopSellersGrossSalesRightOptions" 
        color="primary" 
        variant="underlined"  classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          tab: "max-w-fit px-0 h-12",
          cursor: "w-full"
        }}>
        <Tab
          key="productCategories"
          title="دسته‌بندی محصولات"
        >
        h
        </Tab>
        <Tab
          key="brand"
          title="برند"
        >
        f
        </Tab>
      </Tabs>
      </div>
      </div>
    </section>
  )
}

export default TopSellersGrossSalesRight
