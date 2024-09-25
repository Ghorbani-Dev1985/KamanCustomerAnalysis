'use client'
import Fieldset from '@/common/Fieldset'
import { Button, Chip, Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { IoWarningOutline } from 'react-icons/io5'
import { SiTicktick } from 'react-icons/si'
import SampleFile from './SampleFile'
import { MdOutlineCloudUpload } from 'react-icons/md'
import UploadFile from './UploadFile'

const DateEntryView = () => {
    const [isUploadFile, setIsUploadFile] = useState(false);
  return (
    <>
      <div className="w-full bg-white/50 flex-between px-5 py-6 rounded-tr-lg rounded-tl-lg border-b border-gray-100">
        <p>مدیریت داده‌های کسب و کار</p>
        <Chip
          variant="flat"
          className="bg-emerald-50 text-zinc-700 px-3 py-6"
          radius="lg"
          startContent={<SiTicktick className="size-4 text-emerald-500" />}
        >
          آخرین زمان ورود داده :
        </Chip>
      </div>
      <div className="bg-white px-5 py-8 shadow-sm rounded-br-lg rounded-bl-lg">
        <Fieldset title="ورود داده">
          <p>
            در این بخش می توانید داده‌های خود را در قالب یک فایل xlsx , xls ,
            csv و یا در یک فایل فشرده zip آپلود کنید قالب نمونه را دانلود کنید و
            داده‌های خود را مطابق با قالب نمونه آماده کرده و سپس آپلود نمایید.
          </p>
          <div className="flex-between my-8">
            <Chip
              variant="flat"
              className="bg-orange-100 text-orange-700 px-3 py-6"
              radius="lg"
              startContent={
                <IoWarningOutline className="size-5 text-orange-500" />
              }
            >
              داده‌های فایل جدید، در محاسبات بعدی تحلیل‌ها اعمال خواهد شد.
            </Chip>
            <div className="flex-center gap-x-2">
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
        </Fieldset>
      </div>
    </>
  )
}

export default DateEntryView