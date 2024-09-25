import { useGetUploadFileList } from 'hooks/useGetUploadFileList'
import React from 'react'

const UploadedFileTable = () => {
    const {data: uploadedFiles , isPending} = useGetUploadFileList()
    console.log(uploadedFiles && uploadedFiles , isPending)
  return (
    <div>
      
    </div>
  )
}

export default UploadedFileTable
