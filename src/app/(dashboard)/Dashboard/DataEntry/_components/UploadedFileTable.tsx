import React, { ChangeEvent, Key, useCallback, useMemo, useState } from 'react'
import { UploadedFileRowsTable } from '@/constants/TablesRow'
import { Button, Pagination, Selection, SortDescriptor, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useGetUploadFileList } from 'hooks/useGetUploadFileList'
import { DataEntryType } from '@/types/dataEnteryType'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { HiOutlineTrash } from 'react-icons/hi2'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeleteUploadedFile, DownloadUploadedFile } from 'services/DataEntryServices'
import CustomModal from '@/common/Modal'
import toast from 'react-hot-toast'

const UploadedFileTable = () => {
    const {data: uploadedFiles , isPending} = useGetUploadFileList()
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({  column: "age",
      direction: "ascending",
    });
    const { mutateAsync: mutateDownloadUploadedFile } = useMutation({mutationFn: DownloadUploadedFile});
    const { mutateAsync: mutateDeleteUploadedFile } = useMutation({mutationFn: DeleteUploadedFile});
    const [deleteUploadedFileID, setDeleteUploadedFileID] = useState<string>("-1");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const obj = Object.keys(uploadedFiles || [])
   let uploadedFilesArray: DataEntryType[] = [];
obj.map((item) => {
  uploadedFilesArray.push({
    ...uploadedFiles[item],
    id: item
  })
})
    const pages = Math.ceil(Number(uploadedFilesArray?.length) / rowsPerPage);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return uploadedFilesArray.slice(start, end);
    }, [page, uploadedFilesArray , rowsPerPage]);
    const sortedItems = useMemo(() => {
      return [...items].sort((a: DataEntryType, b: DataEntryType) => {
        const first = a[sortDescriptor.column as keyof DataEntryType] as number;
        const second = b[sortDescriptor.column as keyof DataEntryType] as number;
        const cmp = first < second ? -1 : first > second ? 1 : 0;
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }, [sortDescriptor, items]);
    const DownloadUploadedFileHandler = async (id: number) => {
      let formData = new FormData()
       formData.append("excel_id", id.toString())
      try {
       const {results , error} = await mutateDownloadUploadedFile(formData)
         
        if(!error.hasError){
          const link = document.createElement("a");
          link.href =  process.env.NEXT_PUBLIC_BASE_URL + results.csv_path;
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
    }
    const HandleDeleteFile = async () => {
      let formData = new FormData()
      formData.append("excel_id", deleteUploadedFileID)
      try {
        const {error} = await mutateDeleteUploadedFile(formData)
        console.log(error)
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
    
      const renderCell = useCallback((dataList: DataEntryType, columnKey: Key) => {
      const cellValue = dataList[columnKey as keyof DataEntryType];
      switch (columnKey) {
        case "time":
          const date = new DateObject(dataList.time).convert(persian, persian_fa)
          const time = dataList.time.toString().slice(11 , 19)      
          return <div className='dir-ltr'>{date.format("YYYY/MM/DD")} - {time}</div>
        case "fileName":
          return <></>;
        case "fileType":
          return <></>
          case "count":
            return dataList.count.toLocaleString()
            case "act":
              return (
                <div className='flex-center gap-x-3'>
               <Button onPress={() => DownloadUploadedFileHandler(dataList.id!)} isIconOnly color="primary" className='border-gray-100 hover:bg-gray-200 rounded-xl' variant="faded" aria-label="delete file">
               <MdOutlineCloudUpload className="size-5" />
              </Button>
                <Button onPress={() => {
                  setIsModalOpen(true)
                  setDeleteUploadedFileID(dataList.id!.toString())
                }} isIconOnly color="danger" className='border-gray-100 hover:bg-gray-200 rounded-xl' variant="faded" aria-label="delete file">
                  <HiOutlineTrash className='size-5'/>
              </Button>
                </div>
              );
        default:
          return cellValue;
      }
    }, []);
  const onRowsPerPageChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);
  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <div className="flex w-[30%] gap-2">
          <label className="flex items-center text-default-400 text-small">
          نمایش در هر صفحه
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
       
        </div>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [selectedKeys, items.length , page, pages ]);
  return (
    <>
        <Table
      aria-label="Data Table"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      selectedKeys={selectedKeys}
      sortDescriptor={sortDescriptor}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={UploadedFileRowsTable}>
        {(column) => (
          <TableColumn
            key={column.id}
            align="center"
          >
            {column.title}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"اطلاعاتی موجود نمی باشد"} items={sortedItems && sortedItems}>
        {(item) => (
          <TableRow key={item.time}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
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
            آیا برای خروج مطمعن هستید؟
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