import React from 'react'

const LabelProgress = ({label , progress} : {label : string , progress : number}) => {
  return (
    <>
    <div className="flex justify-between mb-1">
    <span className="text-sm text-emerald-600">{label}</span>
    <span className="text-sm font-medium text-emerald-600">{progress}%</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-1.5">
    <div className="bg-gradient-to-r from-emerald-700 to-emerald-200 h-1.5 rounded-full" style={{width : `${progress}%`}}></div>
  </div>
    </>
  )
}

export default LabelProgress
