import React, { Key, useCallback, useMemo, useState } from 'react'
import { UploadedFileRowsTable } from '@/constants/TablesRow'
import { Pagination, Selection, SortDescriptor, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useGetUploadFileList } from 'hooks/useGetUploadFileList'
type User = typeof users[0];
const UploadedFileTable = () => {
    const {data: uploadedFiles , isPending} = useGetUploadFileList()
    console.log(uploadedFiles && uploadedFiles)
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({  column: "age",
      direction: "ascending",
    });
    const pages = Math.ceil(uploadedFiles.length / rowsPerPage);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return uploadedFiles.slice(start, end);
    }, [page, uploadedFiles, rowsPerPage]);
    const sortedItems = useMemo(() => {
      return [...items].sort((a: User, b: User) => {
        const first = a[sortDescriptor.column as keyof User] as number;
        const second = b[sortDescriptor.column as keyof User] as number;
        const cmp = first < second ? -1 : first > second ? 1 : 0;
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }, [sortDescriptor, items]);


  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);
  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="flex w-[30%] justify-end gap-2">
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
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);
  const renderCell = useCallback((user: User, columnKey: Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
         ققث
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          سی
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
          
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
        <Table
      aria-label="Data Table"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
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
      <TableBody emptyContent={"اطلاعاتی موجود نمی باشد"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  )
}

export default UploadedFileTable