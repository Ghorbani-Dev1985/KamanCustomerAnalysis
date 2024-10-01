import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'

const SingleAccordion = ({children , title , subTitle} : {children : React.ReactNode , title : string , subTitle : string}) => {
  return (
    <Accordion variant="splitted" className='my-6 shadow-sm !px-0 rounded-lg'>
    <AccordionItem key="1" aria-label={title} title={title} subtitle={subTitle} classNames={{base: "shadow-none rounded-lg px-0 overflow-hidden" ,heading: "bg-gray-100 px-2 rtl:data-[open=true]:border-b border-gray-300", content: "px-2 py-10" ,subtitle: "text-gray-400 text-sm" , indicator: "rtl:-rotate-90 rtl:data-[open=true]:rotate-90"}}>
      {children}
    </AccordionItem>
  </Accordion>
  )
}

export default SingleAccordion
