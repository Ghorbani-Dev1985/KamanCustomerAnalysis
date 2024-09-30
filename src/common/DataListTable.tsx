'use client';
import { DataEntryColsType } from '@/types/dataEnteryType';
import { Pagination, Selection, SortDescriptor, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React, { ChangeEvent, Key, ReactNode, useCallback, useMemo, useState } from 'react'

function DataListTable({dataList , renderCellFN , sortDescriptor , setSortDescriptor , tableColsItems } : {
    dataList : any ,
    renderCellFN : (item: any, columnKey: Key) => ReactNode,
    sortDescriptor : SortDescriptor , 
    setSortDescriptor : (sortDescriptor : object) => void , 
    tableColsItems : DataEntryColsType[]
}) {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
    const pages = Math.ceil(Number(dataList?.length) / rowsPerPage);
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return dataList.slice(start, end);
    }, [page, dataList , rowsPerPage]);
    const sortedItems = useMemo(() => {
      return [...items].sort((a: any, b: any) => {
        const first = a[sortDescriptor.column as keyof any] as number;
        const second = b[sortDescriptor.column as keyof any] as number;
        const cmp = first < second ? -1 : first > second ? 1 : 0;
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }, [sortDescriptor, items]);
    const onRowsPerPageChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);
    const bottomContent = useMemo(() => {
        return (
          <div className="py-2 flex flex-col items-center gap-y-6 md:flex-row md:flex-between">
            <div className="flex-center w-full md:w-[30%] gap-2">
              <label className="flex items-center text-default-400 text-small">
              نمایش در هر صفحه :
                <select
                  className="bg-transparent outline-none border rounded-md px-1.5 mr-1 text-default-400 text-small"
                  value={rowsPerPage}
                  onChange={onRowsPerPageChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </label>
           
            </div>
            {
              pages > 1 &&
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              initialPage={page}
              total={pages}
              onChange={setPage}
              classNames={{
                prev: "rounded-l-none !rounded-r-md child:rotate-180",
                next: "rounded-r-none !rounded-l-md child:rotate-0",
              }}
            />
            }
          </div>
        );
      }, [page, pages , rowsPerPage , onRowsPerPageChange]);
  return (
    <>
       <Table
      isStriped
      aria-label="Data Table"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      selectedKeys={selectedKeys}
      sortDescriptor={sortDescriptor}
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
      classNames={{wrapper: ""}}
    >
      <TableHeader columns={tableColsItems}>
        {(column) => (
          <TableColumn
            key={column.id}
            align="center"
            allowsSorting={column.id !== "act"}
          >
            {column.title}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"اطلاعاتی موجود نمی باشد"} items={sortedItems && sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCellFN(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table> 
    </>
  )
}export default DataListTable
