import Fieldset from '@/common/Fieldset'
import {Switch } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'

const RemoveOutliers = ({isRemoveOutliers , setIsRemoveOutliers} : {isRemoveOutliers: number , setIsRemoveOutliers : Dispatch<SetStateAction<number>>}) => {
  return (
    <Fieldset title=" حذف داده‌های پرت">
       <p>با انتخاب این گزینه مشتریانی که رفتار خرید آن‌ها، با میانگین رفتار خرید سایر مشتریان تفاوت دارد، از محاسبات تحلیل RFM خارج شده و در انتها، به عنوان دو دسته مجزا، به کل مشتریان در دسته بندی افزوده خواهند شد.</p>
       <Switch color="primary" size='md' isSelected={isRemoveOutliers === 1} onValueChange={(checked) => setIsRemoveOutliers(checked ? 1 : 0)}>حذف داده‌ها</Switch>
    </Fieldset>
  )
}

export default RemoveOutliers
