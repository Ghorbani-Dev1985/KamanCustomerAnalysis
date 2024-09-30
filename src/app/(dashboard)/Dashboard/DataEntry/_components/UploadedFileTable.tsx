import React, { Key, useCallback, useState } from 'react'
import { UploadedFileRowsTable } from '@/constants/TablesRow'
import { Button,  SortDescriptor, Spinner } from '@nextui-org/react'
import { DataEntryType } from '@/types/dataEnteryType'
import { HiOutlineTrash } from 'react-icons/hi2'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeleteUploadedFile, DownloadUploadedFile } from 'services/DataEntryServices'
import CustomModal from '@/common/Modal'
import toast from 'react-hot-toast'
import DataListTable from '@/common/DataListTable'
import { DateChangeToPersian } from '@/utils/TodayLocaleDate'

const UploadedFileTable = ({uploadedFilesArray , isPendingUploadedFile} : {uploadedFilesArray : DataEntryType[] , isPendingUploadedFile : boolean}) => {
    const queryClient = useQueryClient();
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({  column: "time",
      direction: "descending",
    });
    const { mutateAsync: mutateDownloadUploadedFile } = useMutation({mutationFn: DownloadUploadedFile});
    const { mutateAsync: mutateDeleteUploadedFile } = useMutation({mutationFn: DeleteUploadedFile});
    const [deleteUploadedFileID, setDeleteUploadedFileID] = useState<string>("-1");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const DownloadUploadedFileHandler =  useCallback(async(id: string) => {
      let formData = new FormData()
       formData.append("excel_id", id)
      try {
       const {results , error} = await mutateDownloadUploadedFile(formData)
        if(!error.hasError){
          const link = document.createElement("a");
          link.href =  process.env.NEXT_PUBLIC_MAIN_PATH + results.csv_path;
          link.setAttribute("download", results.csv_path);
          link.setAttribute("target", "_blank");
          document.body.appendChild(link);
          link.click();
       }else{
         toast.error("دریافت فایل با خطا مواجه شد")
       }
      } catch (error) {
        toast.error("خطایی رخ داده است")
      }
    }, [mutateDownloadUploadedFile]);
    const HandleDeleteFile = async () => {
      let formData = new FormData()
      formData.append("excel_id", deleteUploadedFileID)
      try {
        const {error} = await mutateDeleteUploadedFile(formData)
        if(!error.hasError){
          setIsModalOpen(false)
          toast.success("فایل با موفقیت حذف شد")
          queryClient.invalidateQueries({ queryKey: ["getUploadFileList"] });
        }else{
          toast.error("خطا در حذف فایل")
        }
      } catch (error) {
        toast.error("خطایی رخ داده است")
      }
    }
      const renderCellDataListUploaded = useCallback((dataList: DataEntryType, columnKey: Key) => {
      const cellValue = dataList[columnKey as keyof DataEntryType];
      switch (columnKey) {
        case "time":    
          return <div className='dir-ltr'>{DateChangeToPersian(dataList.time)}</div>
        case "fileName":
          return <></>;
        case "fileType":
          return <></>
          case "count":
            return dataList.count.toLocaleString()
            case "act":
              return (
                <div className='flex-center gap-x-3'>
               <Button onPress={() => DownloadUploadedFileHandler(dataList.id!)} isIconOnly color="primary" className='border-none bg-transparent hover:bg-gray-200 rounded-xl' variant="faded" aria-label="delete file">
               <MdOutlineCloudUpload className="size-5" />
              </Button>
                <Button onPress={() => {
                  setIsModalOpen(true)
                  setDeleteUploadedFileID(dataList.id!.toString())
                }} isIconOnly color="danger" className='border-none bg-transparent hover:bg-gray-200 rounded-xl' variant="faded" aria-label="delete file">
                  <HiOutlineTrash className='size-5'/>
              </Button>
                </div>
              );
        default:
          return cellValue;
      }
    }, [DownloadUploadedFileHandler]);
  return (
    <>
    {
    isPendingUploadedFile ? <Spinner color='primary' size='lg'/> : 
      <DataListTable dataList={uploadedFilesArray} renderCellFN={(item, columnKey) => renderCellDataListUploaded(item, columnKey)} sortDescriptor={sortDescriptor} setSortDescriptor={setSortDescriptor} tableColsItems={UploadedFileRowsTable}></DataListTable>
    }
    <CustomModal
          containerClasses="!block md:!flex"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <CustomModal.Header
            titleClass="h7-semibold"
            containerClass="!bg-muted-400 px-5 py-4"
            onClose={() => setIsModalOpen(false)}
          >
            آیا برای حذف فایل اطمینان دارید؟
          </CustomModal.Header>
          <CustomModal.Body containerClass="p-3 bg-muted-100">
            <div className="flex justify-end items-center">
              <div className="flex-center gap-x-2">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => setIsModalOpen(false)}
                >
                  انصراف
                </Button>
                <Button color="primary" onPress={HandleDeleteFile}>
                  تایید
                </Button>
              </div>
            </div>
          </CustomModal.Body>
        </CustomModal>
    </>
  )
}
export default UploadedFileTable