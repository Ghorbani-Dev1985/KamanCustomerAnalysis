import React, { ReactNode } from 'react'

function Fieldset({children , title} : {children: ReactNode , title: string}) {
  return (
    <section className='relative w-full flex flex-col gap-y-6 min-h-8 border border-gray-200 rounded-lg p-5 mb-14'>
      <div className='absolute -top-3 right-10 bg-white text-sm md:text-base font-medium px-5'>{title}</div>
      {children}
    </section>
  )
}

export default Fieldset