import Fieldset from '@/common/Fieldset'
import HelpTooltip from '@/common/HelpTooltip'
import { purchaseAmountIndexRadioItems } from '@/constants/RadioItems'
import { Radio, RadioGroup } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'

const SelectPurchaseAmountIndex = ({selectPurchaseAmount ,setSelectPurchaseAmount} : {selectPurchaseAmount: string ,setSelectPurchaseAmount : Dispatch<SetStateAction<string>>}) => {
  return (
    <Fieldset title="انتخاب شاخص مبلغ خرید ">
       <p>از این بخش می توانید بجای شاخص پیشفرض میانگین درآمد مشتری (Monetary) شاخص های دیگری به نسبت کسب و کار خود برای محاسبه تحلیل RFM انتخاب کنید.</p>
       <p>شاخص تازگی سفارش (Recency) قابل تغییر نیست.</p>
       <RadioGroup
      orientation="horizontal"
      classNames={{base: "w-full" , wrapper: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}}
      onChange={(e) => setSelectPurchaseAmount(e.target.value)}
      value={selectPurchaseAmount}
    >
        {
            purchaseAmountIndexRadioItems.map(({id , label , value , tooltip}) => (
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

export default SelectPurchaseAmountIndex
