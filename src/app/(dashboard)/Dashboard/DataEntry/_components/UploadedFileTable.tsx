import React, { Key, useCallback, useMemo, useState } from 'react'
import { UploadedFileRowsTable } from '@/constants/TablesRow'
import { Pagination, Selection, SortDescriptor, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useGetUploadFileList } from 'hooks/useGetUploadFileList'
import { DataEntryType } from '@/types/dataEnteryType'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

const UploadedFileTable = () => {
    const {data: uploadedFiles , isPending} = useGetUploadFileList()
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({  column: "age",
      direction: "ascending",
    });
    let uploadedFilesArray: DataEntryType[] = [];
    for(let i in uploadedFiles){
      uploadedFilesArray.push(uploadedFiles[i])
    }
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
    const renderCell = useCallback((dataList: DataEntryType, columnKey: Key) => {
      const cellValue = dataList[columnKey as keyof DataEntryType];
      switch (columnKey) {
        case "time":
          return new DateObject(dataList.time , { calendar: persian, locale: persian_fa }).format("YYYY/MM/DD HH:mm:ss");
        case "fileName":
          return <></>;
        case "fileName":
          return <></>;
        case "fileType":
          return <></>
          case "count":
            return dataList.count.toLocaleString()
            case "act":
              return (
                <div className="relative flex justify-end items-center gap-2">
                
                </div>
              );
        default:
          return cellValue;
      }
    }, []);
  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
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
 console.log(sortedItems)
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
    </>
  )
}

export default UploadedFileTable