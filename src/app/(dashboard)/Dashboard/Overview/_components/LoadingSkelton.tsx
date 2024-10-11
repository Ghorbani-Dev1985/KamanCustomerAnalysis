import { Skeleton } from '@nextui-org/react'
import React from 'react'

const LoadingSkelton = () => {
  return (
    <>
    <Skeleton className="w-3/5 rounded-lg">
    <div className="h-2.5 w-3/5 rounded-lg bg-gray-50"></div>
  </Skeleton>
  <div className='flex-between'>
  <Skeleton className="w-2/5 rounded-lg">  
    <div className="h-2.5 w-2/5 rounded-lg bg-gray-50"></div>
  </Skeleton>
  <Skeleton className="w-1/5 rounded-lg">  
    <div className="h-2.5 w-1/5 rounded-lg bg-gray-50"></div>
  </Skeleton>
  </div>
    </>
  )
}

export default LoadingSkelton
