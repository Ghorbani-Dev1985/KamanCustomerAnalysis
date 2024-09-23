
import Fieldset from '@/common/Fieldset'
import { Chip } from '@nextui-org/react'
import React from 'react'
import { SiTicktick } from "react-icons/si";


const DataEntry = () => {
  return (
    <>
     <div className='w-full bg-white/50 flex-between px-5 py-8 rounded-tr-lg rounded-tl-lg border-b border-gray-100'>
     <p>مدیریت داده‌های کسب و کار</p>
     <Chip variant='flat' className='bg-emerald-50 text-zinc-700 px-3 py-5' radius='lg' startContent={<SiTicktick className='size-4 text-emerald-500'/>}>
       آخرین زمان ورود داده : 
     </Chip>
     </div>
     <div className='bg-white px-5 py-8 shadow-sm'>
       <Fieldset title='ورود داده'>
        <p>در این بخش می توانید داده‌های خود را در قالب یک فایل xlsx , xls , csv و یا در یک فایل فشرده zip آپلود کنید قالب نمونه را دانلود کنید و داده‌های خود را مطابق با قالب نمونه آماده کرده و سپس آپلود نمایید.</p>
       </Fieldset>
      </div>  
    </>
  )
}

export default DataEntry