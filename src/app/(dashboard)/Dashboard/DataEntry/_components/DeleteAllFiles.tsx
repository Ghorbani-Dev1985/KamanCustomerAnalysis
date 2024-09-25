import Fieldset from '@/common/Fieldset'
import { Button } from '@nextui-org/react'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

const DeleteAllFiles = () => {
    const DeleteAllFilesHandler = () => {

    }
  return (
    <Fieldset title='حذف داده های کسب و کار'>
      <p>در صورت نیاز می توانید داده های فروش و فاکتور‌های خود در پلتفرم را حذف نمایید.</p>
       <Button color='danger' className='border-1 max-w-full md:max-w-56' variant='bordered' onPress={DeleteAllFilesHandler} startContent={<HiOutlineTrash className='size-5'/>}>حذف همه داده‌ها</Button>
    </Fieldset>
  )
}

export default DeleteAllFiles
