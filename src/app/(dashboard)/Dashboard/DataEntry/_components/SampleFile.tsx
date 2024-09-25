import React from 'react'
import { Button } from '@nextui-org/react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { MdDownload } from 'react-icons/md'
import { GetSampleFile } from "services/DataEntryServices";
const SampleFile = () => {
    const {mutateAsync: mutateGetSampleFile} = useMutation({mutationFn : GetSampleFile })

    const GetSampleFileHandler = async() => {
        try {
         const sampleFile = await mutateGetSampleFile()
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
  return (
        <Button
        color="primary"
        variant="bordered"
        startContent={<MdDownload className="size-5" />}
        onPress={GetSampleFileHandler}>
                  دانلود قالب نمونه
                </Button>
  )
}

export default SampleFile
