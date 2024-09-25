import React, { ReactNode } from 'react'

function Fieldset({children , title} : {children: ReactNode , title: string}) {
  return (
    <fieldset className='w-full flex flex-col gap-y-6 min-h-8 border border-gray-200 rounded-lg p-5 mb-8'>
      <legend className='font-medium px-5'>{title}</legend>
      {children}
    </fieldset>
  )
}

export default Fieldset