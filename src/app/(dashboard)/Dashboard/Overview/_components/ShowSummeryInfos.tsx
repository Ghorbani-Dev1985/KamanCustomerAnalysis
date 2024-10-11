'use client';
import HelpTooltip from '@/common/HelpTooltip';
import { ShowSummeryInfosItems } from '@/constants/SelectItems';
import { FactorInfoType, ProductInfoType } from '@/types/infosType';
import { Chip, Select, SelectItem } from '@nextui-org/react'
import { useGetFactorInfo } from 'hooks/useGetInfo'
import React, { ChangeEvent, useReducer } from 'react'
import LoadingSkelton from './LoadingSkelton';

const initialState = {
  selects: [
    { key: 'sum_discount', data: 0, percentage: 0 },
    { key: 'factor_amount_product_average', data: 0, percentage: 0 },
    { key: 'pure_product_count', data: 0, percentage: 0 },
    { key: 'users_count', data: 0, percentage: 0 },
    { key: 'factor_product_average', data: 0, percentage: 0 },
    { key: 'old_users_count', data: 0, percentage: 0 },
    { key: 'gross_sale', data: 0, percentage: 0 },
    { key: 'sale_factor_count', data: 0, percentage: 0 },
    { key: 'factor_amount_average', data: 0, percentage: 0 },
    { key: 'rejected_factor_count', data: 0, percentage: 0 },
    { key: 'factor_rows_average', data: 0, percentage: 0 },
    { key: 'customer_income_average', data: 0, percentage: 0 },
    { key: 'factor_product_count', data: 0, percentage: 0 },
    { key: 'factor_product_weight', data: 0, percentage: 0 },
    { key: 'factor_commisions', data: 0, percentage: 0 },
    { key: 'pure_factor_counts', data: 0, percentage: 0 },
    { key: 'pure_gross_sale', data: 0, percentage: 0 },
    { key: 'gross_rejected', data: 0, percentage: 0 },
    { key: 'pure_sale', data: 0, percentage: 0 },
    { key: 'rejected_product_count', data: 0, percentage: 0 },
    { key: 'rejedted_product_weight', data: 0, percentage: 0 },
    { key: 'pure_product_weight', data: 0, percentage: 0 },
    { key: 'new_users_count', data: 0, percentage: 0 },
    { key: 'percent_users', data: 0, percentage: 0 },
    { key: 'percent_rejected_count', data: 0, percentage: 0 },
    { key: 'percent_rejected_amount', data: 0, percentage: 0 },
    { key: 'gross_new_users', data: 0, percentage: 0 },
  ],
};
function reducer(state: { selects: Array<{ key: string; data: any; percentage: number }> }, action: { type: string; index?: number; key?: string; data?: any; percentage?: number }) {
  switch (action.type) {
    case 'UPDATE_SELECT':
      return {
        ...state,
        selects: state.selects.map((select, index) =>
          index === action.index
            ? { ...select, key: action.key!, data: action.data!, percentage: action.percentage! }
            : select
        ),
      };
    default:
      return state;
  }
}
function ShowSummeryInfos({getFactorInfo} : {getFactorInfo : {date1: FactorInfoType , percentage: ProductInfoType}}) {
  const {isPending} = useGetFactorInfo()
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const key = e.target.value;
    const selectedData = getFactorInfo.date1 ? getFactorInfo.date1[key as keyof FactorInfoType] : 0;
    const selectedPercentage = getFactorInfo.percentage ? getFactorInfo.percentage[key as keyof ProductInfoType] : 0;
    dispatch({
      type: 'UPDATE_SELECT',
      index,
      key,
      data: selectedData,
      percentage: selectedPercentage,
    });
  };
    return (
    <section className='grid grid-cols-4 grid-rows-2 gap-5 my-5'>
      {
        isPending ? 
        Array(8).fill(0).map((_, index) => (
          <div key={index} className='overview-box'><LoadingSkelton /></div>
        )) : 
        state.selects.slice(0 , 8).map((selectedState , index) => (
          <>
         <div className='overview-box'>
          <div className='flex-center gap-x-1'>
        <Select
          size="sm"
          items={ShowSummeryInfosItems}
          aria-label="مشاهده اطلاعات"
          defaultSelectedKeys={[selectedState.key]}
          placeholder='یکی از موارد را انتخاب نمایید'
          onChange={(e) => handleSelectChange(e, index)}
          variant="underlined"
          classNames={{selectorIcon: "rtl:left-0"}}
        >
          {(ShowSummeryInfosItem) => (
              <SelectItem
                key={ShowSummeryInfosItem.id}
                value={ShowSummeryInfosItem.title}
              >
                {ShowSummeryInfosItem.title}
              </SelectItem>
            )}
        </Select>
         <HelpTooltip content='اطلاعات مورد نظر را انتخاب نمایید' />
          </div>
        <div className="flex-between">
          <div className='flex flex-col'>
            <p className='flex-center gap-x-1 text-lg font-bold'>{selectedState.data > 0 ? selectedState.data.toFixed(2) : selectedState.data}{selectedState.data > 0 && <span className='text-sm font-normal text-gray-400'>ریال</span>}</p>
             {
              selectedState.data > 0 && <HelpTooltip content={`${selectedState.data.toFixed(2)} ریال`} placement='bottom'/>
             }
          </div>
            {
              selectedState.percentage > 0 &&
              <Chip color="default" variant="flat" size='md' className='min-w-14 text-center rounded-md'>
                {selectedState.percentage}%
                </Chip>
            }
          </div>
      </div>
            </>
        ))
      }
    </section>
  )
}
export default ShowSummeryInfos
