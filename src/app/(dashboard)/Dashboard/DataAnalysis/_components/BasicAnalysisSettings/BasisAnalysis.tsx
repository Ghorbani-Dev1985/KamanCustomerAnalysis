'use client';
import Fieldset from '@/common/Fieldset'
import { BasicAnalysisItems } from '@/constants/BasicAnalysisItems';
import { Accordion, AccordionItem, Input, Select, SelectItem } from '@nextui-org/react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const BasisAnalysis = () => {
     
  return (
     <Fieldset title='پایه تحلیل'>
        <p className='my-8'>در این بخش می توانید بازه زمانی تحلیل را براساس فیلترهای مورد نیاز اعمال نمایید. این اعمال تغییرات در نتیجه کل تحلیل در صفحات نمای کلی، بخش بندی مشتریان، جابجایی مشتریان، ارزش طول عمر مشتریان، خوشه بندی مشتریان، تحلیل سبد مشتریان تاثیر دارد. </p>
        <Accordion variant="splitted" className='!px-0'>
       {
        BasicAnalysisItems.map(({id, title , inputName}) => {
          return ( 
      <AccordionItem key={id} aria-label={title} title={title} classNames={{base: "shadow-sm border px-0 overflow-hidden my-2" , heading : "px-1 bg-gray-100 rtl:data-[open=true]:border-b", title : "text-zinc-700 text-base" , content : "px-2 py-10" , indicator : "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
                    <div className='flex-between gap-x-2.5'>
                       <Select 
            variant="bordered"
            labelPlacement='outside'
            label="انتخاب کنید" 
            className="max-w-44"
            defaultSelectedKeys="1"
            size='md'
            classNames={{base : "data-[has-label=true]:mt-0",innerWrapper : "group-data-[has-label=true]:pt-0", label: "text-zinc-700 group-data-[filled=true]:text-zinc-700 group-data-[filled=true]:-translate-y-[calc(10%_+_theme(fontSize.small)/2_+_20px)] rtl:group-data-[filled=true]:right-2 px-1.5 bg-white"}} 
            >
              <SelectItem key="1" value="1">
                 برابر است با
              </SelectItem>
              <SelectItem key="2" value="2">
                 برابر نیست با
              </SelectItem>
          </Select>
                       <div className='flex-1 '> <Input placeholder='جستجو کنید' variant="bordered" classNames={{input: "text-zinc-600 placeholder:text-gray-300"}} name={inputName}  /></div>
                    </div>
      </AccordionItem>
            )
          })
        }
        </Accordion>
     
     </Fieldset>
  )
}

export default BasisAnalysis
