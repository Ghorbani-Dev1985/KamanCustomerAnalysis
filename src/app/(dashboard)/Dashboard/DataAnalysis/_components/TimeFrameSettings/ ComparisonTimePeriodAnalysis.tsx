import Fieldset from '@/common/Fieldset'
import { Radio, RadioGroup } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'

const  ComparisonTimePeriodAnalysis = ({setSelectComparisonTimePeriod} : {setSelectComparisonTimePeriod : Dispatch<SetStateAction<string>>}) => {
  return (
    <Fieldset title=' مقایسه دوره زمانی تحلیل '>
        <p>در این بخش می توانید بازه زمانی مورد نظر جهت مقایسه با دوره زمانی تحلیل را انتخاب نمایید.</p>
        <RadioGroup
      orientation="horizontal"
      classNames={{base: "" , wrapper: "gap-x-12"}}
      onChange={(e) => setSelectComparisonTimePeriod(e.target.value)}
      defaultValue={"none"}
    >
      <Radio value="none"> هیچکدام</Radio>
      <Radio value="lastMonth"> ماه قبل</Radio>
      <Radio value="lastYear"> سال قبل </Radio>
    </RadioGroup>    
        </Fieldset>
  )
}

export default  ComparisonTimePeriodAnalysis
