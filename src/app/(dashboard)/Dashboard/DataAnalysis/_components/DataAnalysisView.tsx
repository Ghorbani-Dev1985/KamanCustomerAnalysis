import React from 'react'
import TimeFrameSettings from './TimeFrameSettings/TimeFrameSettings'
import BasicAnalysisSettings from './BasicAnalysisSettings/BasicAnalysisSettings'
import CustomerSegmentationSettings from './CustomerSegmentationSettings/CustomerSegmentationSettings'
import SubHeader from '@/common/SelectDatesHeader/SubHeader'

const DataAnalysisView = () => {
  return (
    <>
      <SubHeader></SubHeader>
      <TimeFrameSettings />
      <BasicAnalysisSettings />
      <CustomerSegmentationSettings />
    </>
  )
}

export default DataAnalysisView
