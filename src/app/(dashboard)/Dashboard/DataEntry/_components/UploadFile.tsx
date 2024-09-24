"use client";
import Fieldset from "@/common/Fieldset";
import { Button, Chip, Divider, Progress } from "@nextui-org/react";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { IoWarningOutline } from "react-icons/io5";
import { MdDownload, MdOutlineCloudUpload } from "react-icons/md";
import { UploadFileType } from "@/types/uploadFileType";
import { useMutation } from "@tanstack/react-query";
import { GetSampleFile, UploadUserFile } from "services/DataEntryServices";
import toast from "react-hot-toast";
import { AxiosProgressEvent } from "axios";


function UploadFile() {
  const [isUploadFile, setIsUploadFile] = useState(false);
  const [uploadCSVfile , seUploadCSVfile] = useState<UploadFileType>();
  const [uploadFileProgress, setUploadFileProgress] = useState(0);
  const {mutateAsync: mutateGetSampleFile} = useMutation({mutationFn : GetSampleFile })
  const {mutateAsync : userFileUploadMutation} = useMutation({
    mutationFn: (data: FormData) => {
      return UploadUserFile(data, (progress: number) => {
        setUploadFileProgress(progress);
      });
    }
  })
  const GetSampleFileHandler = async() => {
    try {
     const sampleFile = await mutateGetSampleFile()
     console.log(sampleFile)
    if(!sampleFile.error.hasError){
       const link = document.createElement("a");
       link.href =  process.env.NEXT_PUBLIC_BASE_URL + sampleFile.results.link;
       link.setAttribute("download", sampleFile.file_name);
       link.setAttribute("target", "_blank");
       document.body.appendChild(link);
       link.click();
    }else{
      toast.error("دریافت فایل با خطا مواجه شد")
    }
    
   } catch (error) {
    console.log("خطایی رخ داده است")
   }
  };
  const UploadUserFileHandler = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files![0];
    try {
      seUploadCSVfile(uploadedFile)
      const formData = new FormData();
      formData.append("file", uploadedFile);
      const {error} = await userFileUploadMutation(formData);
      if (!error.hasError) {
        toast.success("فایل با موفقیت آپلود شد");
        setIsUploadFile(false);
        seUploadCSVfile(undefined)
        setUploadFileProgress(0);
      } else {
        toast.error("در آپلود فایل خطا رخ داده است");
      }
    }
  catch (error) {
      console.log("خطایی رخ داده است");
      console.log(error)
    }
  };
  console.log(uploadFileProgress)
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
              <Button
                color="primary"
                variant="bordered"
                startContent={<MdDownload className="size-5" />}
                onPress={GetSampleFileHandler}
              >
                دانلود قالب نمونه
              </Button>
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
          <div className={`${isUploadFile ? "flex-center" : "hidden"}  w-full`}>
            <label
              htmlFor="kamanUploadFile"
              className="flex-center flex-col w-full relative h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex-center flex-col pt-5 pb-6">
                <MdOutlineCloudUpload className="size-8 mb-4 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">برای آپلود کلیک نمایید</span>
                  یا فایل را بکشید و اینجا رها نمایید
                </p>
                <p className="text-xs text-gray-500">xlsx , xls , csv , zip</p>
                <p className="text-gray-500 font-bold mt-4">{uploadCSVfile?.name}</p>
              </div>
              <input
                id="kamanUploadFile"
                name="kamanUploadFile"
                type="file"
                accept=".xlsx,.xls,.csv,.zip"
                className="absolute w-full h-full opacity-0"
                onChange={(e) => UploadUserFileHandler(e)}
              />
            </label>
          </div>
          {
            uploadFileProgress > 0 &&  <Progress
            aria-label="در حال بارگزاری فایل ..."
            label="در حال بارگزاری فایل ..."
            radius="lg"
            size="sm"
            value={uploadFileProgress}
            color="success"
            showValueLabel={true}
            className="my-3"
          />
          }
          <Progress
            aria-label="در حال بارگزاری فایل ..."
            label="در حال بارگزاری فایل ..."
            radius="lg"
            size="sm"
            value={50}
            color="success"
            showValueLabel={true}
            className="my-3 text-emerald-500"
            
          />
          <Divider className="my-8" />
        </Fieldset>
      </div>
    </>
  );
}

export default UploadFile;
