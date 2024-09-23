'use client';
import Fieldset from '@/common/Fieldset'
import { Button, Chip, Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { SiTicktick } from "react-icons/si";
import { IoWarningOutline } from "react-icons/io5";
import { MdDownload, MdOutlineCloudUpload } from 'react-icons/md';

function UploadFile() {
    const [isUploadFile , setIsUploadFile] = useState(false)
  return (
    <>
     <div className='w-full bg-white/50 flex-between px-5 py-6 rounded-tr-lg rounded-tl-lg border-b border-gray-100'>
     <p>مدیریت داده‌های کسب و کار</p>
     <Chip variant='flat' className='bg-emerald-50 text-zinc-700 px-3 py-6' radius='lg' startContent={<SiTicktick className='size-4 text-emerald-500'/>}>
       آخرین زمان ورود داده : 
     </Chip>
     </div>
     <div className='bg-white px-5 py-8 shadow-sm'>
       <Fieldset title='ورود داده'>
        <p>در این بخش می توانید داده‌های خود را در قالب یک فایل xlsx , xls , csv و یا در یک فایل فشرده zip آپلود کنید قالب نمونه را دانلود کنید و داده‌های خود را مطابق با قالب نمونه آماده کرده و سپس آپلود نمایید.</p>
        <div className='flex-between my-8'>
        <Chip variant='flat' className='bg-orange-100 text-orange-700 px-3 py-6' radius='lg' startContent={<IoWarningOutline className='size-5 text-orange-500'/>}>
        داده‌های فایل جدید، در محاسبات بعدی تحلیل‌ها اعمال خواهد شد.
     </Chip>
     <div className='flex-center gap-x-2'>
     <Button
                color="primary"
                variant="bordered"
                startContent={<MdDownload className='size-5'/>}
                //onPress={() => setShowDatePicker(false)}
              >
                دانلود قالب نمونه
              </Button>
              <Button
                color="primary"
                variant="solid"
                startContent={<MdOutlineCloudUpload className='size-5'/>}
                onPress={() => setIsUploadFile((prev) => !prev)}
              >
                آپلود فایل داده‌ها
              </Button>

        </div>

     </div>
<div className={`${isUploadFile ? "flex-center" : "hidden"}  w-full`}>
    <label htmlFor="#kamanUploadFile" className="flex-center flex-col w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <MdOutlineCloudUpload className='size-8 mb-4 text-gray-500'/>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">برای آپلود کلیک نمایید</span> یا فایل را بکشید و اینجا رها نمایید</p>
            <p className="text-xs text-gray-500">xlsx , xls , csv , zip</p>
        </div>
        <input id="kamanUploadFile" type="file" accept='.xlsx,.xls,.csv,.zip' className="" />
    </label>
</div> 
        <Divider className='my-8'/>
       </Fieldset>
      </div>  
    </>
  )
}

export default UploadFile