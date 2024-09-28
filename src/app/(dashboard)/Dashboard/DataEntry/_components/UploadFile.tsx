"use client";
import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { UploadFileType } from "@/types/uploadFileType";
import { useMutation } from "@tanstack/react-query";
import { UploadUserFile } from "services/DataEntryServices";
import toast from "react-hot-toast";
import LabelProgress from "@/common/LabelProgress";
import { useGetUploadFileList } from "hooks/useGetUploadFileList";

function UploadFile({
  isUploadFile,
  setIsUploadFile,
}: {
  isUploadFile: boolean;
  setIsUploadFile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [uploadCSVfile, seUploadCSVfile] = useState<UploadFileType>();
  const [uploadFileProgress, setUploadFileProgress] = useState(0);
  const {data: uploadedFiles , isPending} = useGetUploadFileList()
  console.log(uploadedFiles)
  const { mutateAsync: userFileUploadMutation } = useMutation({
    mutationFn: (data: FormData) => {
      return UploadUserFile(data, (progress: number) => {
        setUploadFileProgress(progress);
      });
    },
  });
  const UploadUserFileHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = e.target.files![0];
    try {
      seUploadCSVfile(uploadedFile);
      const formData = new FormData();
      formData.append("file", uploadedFile);
      const { error } = await userFileUploadMutation(formData);
      if (!error.hasError) {
        toast.success("فایل با موفقیت آپلود شد");
        setIsUploadFile(false);
        seUploadCSVfile(undefined);
        setUploadFileProgress(0);
      } else {
        toast.error("در آپلود فایل خطا رخ داده است");
      }
    } catch (error) {
      console.log("خطایی رخ داده است");
    }
  };
  return (
    <>
      <div className={`${isUploadFile ? "flex-center" : "hidden"} w-full`}>
        <label
          htmlFor="kamanUploadFile"
          className="flex-center flex-col w-full relative h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center pt-5 pb-6">
            <MdOutlineCloudUpload className="size-8 mb-4 text-gray-500" />
            <p className="mb-2 text-sm text-gray-500 px-1">
              <span className="font-semibold">برای آپلود کلیک نمایید</span>
              یا فایل را بکشید و اینجا رها نمایید
            </p>
            <p className="text-xs text-gray-500">xlsx , xls , csv , zip</p>
            <p className="text-gray-500 font-bold mt-4">
              {uploadCSVfile?.name}
            </p>
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
      {uploadFileProgress > 0 && <LabelProgress label="در حال آپلود فایل" progress={uploadFileProgress} />}
    </>
  );
}

export default UploadFile;
