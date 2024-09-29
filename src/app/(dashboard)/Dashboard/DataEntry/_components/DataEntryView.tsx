'use client'
import Fieldset from '@/common/Fieldset'
import { Button, Chip, Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { IoWarningOutline } from 'react-icons/io5'
import { SiTicktick } from 'react-icons/si'
import SampleFile from './SampleFile'
import { MdOutlineCloudUpload } from 'react-icons/md'
import UploadFile from './UploadFile'
import UploadedFileTable from './UploadedFileTable'
import DeleteAllFiles from './DeleteAllFiles'
import { useGetUploadFileList } from 'hooks/useGetUploadFileList'
import { DataEntryType } from '@/types/dataEnteryType'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
const DateEntryView = () => {
    const [isUploadFile, setIsUploadFile] = useState(false);
    const {data: uploadedFiles , isPending : isPendingUploadedFile} = useGetUploadFileList()
    const getUploadedFilesId = Object.keys(uploadedFiles || [])
    let uploadedFilesArray: DataEntryType[] = [];
    getUploadedFilesId.map((item : any) => {
       uploadedFilesArray.push({
         ...uploadedFiles[item],
         id: item
       })
     })
     uploadedFilesArray.sort((dateA, dateB) => {
       return new Date(dateB.time).getTime() - new Date(dateA.time).getTime();
     });
     const date = new DateObject(uploadedFilesArray[0]?.time).convert(persian, persian_fa)
      const time = uploadedFilesArray[0]?.time.toString().slice(11 , 19)  
    console.log(uploadedFilesArray)
  return (
    <>
      <div className="w-full bg-white/50 flex flex-col items-center gap-y-5 md:flex-row md:flex-between px-5 py-6 rounded-tr-lg rounded-tl-lg border-b border-gray-100">
        <p>مدیریت داده‌های کسب و کار</p>
        <Chip
          variant="flat"
          className="bg-emerald-50 text-zinc-700 px-3 py-6"
          radius="lg"
          startContent={<SiTicktick className="size-4 text-emerald-500" />}
        >
          <div className='flex-center gap-x-1'>
          <p> آخرین زمان ورود داده :</p>
          <p className='dir-ltr'>{date.format("YYYY/MM/DD")} - {time}</p>
          </div>
        </Chip>
      </div>
      <div className="bg-white px-5 py-8 shadow-sm rounded-br-lg rounded-bl-lg">
        <Fieldset title="ورود داده">
           <p className='text-justify'>
            در این بخش می توانید داده‌های خود را در قالب یک فایل xlsx , xls ,
            csv و یا در یک فایل فشرده zip آپلود کنید قالب نمونه را دانلود کنید و
            داده‌های خود را مطابق با قالب نمونه آماده کرده و سپس آپلود نمایید.
          </p>
         <div className="flex flex-col items-center lg:flex-row lg:flex-between my-8">
            <Chip
              variant="flat"
              className="bg-orange-100 whitespace-pre-wrap h-auto leading-6 mb-3 lg:mb-0 text-orange-700 px-1 md:px-3 py-1.5 md:py-3"
              radius="lg"
              startContent={
                <IoWarningOutline className="size-5 text-orange-500" />
              }
            >
              داده‌های فایل جدید، در محاسبات بعدی تحلیل‌ها اعمال خواهد شد.
            </Chip>
            <div className="flex flex-col md:flex-row md:flex-center gap-2.5">
              <SampleFile />
              <Button
                color="primary"
                variant="solid"
                startContent={<MdOutlineCloudUpload className="size-5" />}
                onPress={() => setIsUploadFile((prev) => !prev)}
              >
                آپلود فایل داده‌ها
              </Button>
            </div>
          </div>
          <UploadFile setIsUploadFile={setIsUploadFile} isUploadFile={isUploadFile} />
          <Divider className="my-8" />
          <UploadedFileTable uploadedFilesArray={uploadedFilesArray} isPendingUploadedFile={isPendingUploadedFile} />
        </Fieldset>
        <DeleteAllFiles />
      </div>
    </>
  )
}

export default DateEntryView