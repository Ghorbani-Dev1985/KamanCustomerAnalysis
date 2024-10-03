import Fieldset from '@/common/Fieldset'
import HelpTooltip from '@/common/HelpTooltip'
import { NumberPurchaseIndexRadioItems } from '@/constants/RadioItems'
import { Radio, RadioGroup } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'

const SelectNumberPurchaseIndex = ({setSelectNumberPurchase} : {setSelectNumberPurchase : Dispatch<SetStateAction<string>>}) => {
  return (
    <Fieldset title="انتخاب شاخص تعداد خرید ">
       <p>از این بخش می توانید بجای شاخص پیشفرض تعداد خرید مشتری (Frequency) شاخص‌های دیگری به نسبت کسب و کار خود برای محاسبه تحلیل RFM انتخاب کنید.</p>
       
       <RadioGroup
      orientation="horizontal"
      classNames={{base: "w-full" , wrapper: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}}
      onChange={(e) => setSelectNumberPurchase(e.target.value)}
      defaultValue={"grossSales"}
    >
        {
            NumberPurchaseIndexRadioItems.map(({id , label , value , tooltip}) => (
              <Radio key={id} value={value}>
                <div className='flex-center gap-x-1.5'>
                <span>{label}</span>
                 <HelpTooltip content={tooltip}/>
                </div>
              </Radio>
            ))
        }
    </RadioGroup>    
    </Fieldset>
  )
}

export default SelectNumberPurchaseIndex
