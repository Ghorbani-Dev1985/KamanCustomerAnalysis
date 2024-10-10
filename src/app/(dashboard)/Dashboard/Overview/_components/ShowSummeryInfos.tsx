'use client';
import { ShowSummeryInfosItems } from '@/constants/SelectItems';
import { FactorInfoType, ProductInfoType } from '@/types/infosType';
import { Select, SelectItem, Skeleton } from '@nextui-org/react'
import { useGetFactorInfo } from 'hooks/useGetInfo'
import React, { ChangeEvent, useState } from 'react'

function ShowSummeryInfos({getFactorInfo} : {getFactorInfo : {date1: FactorInfoType , percentage: ProductInfoType}}) {
  const {isPending} = useGetFactorInfo()
  const [saleFactorCount , setSaleFactorCount] = useState({data: getFactorInfo.date1?.sale_factor_count , percentage: getFactorInfo.percentage?.sale_factor_count})
  const [rejectedFactorCount , setRejectedFactorCount] = useState({data: getFactorInfo.date1?.rejected_factor_count , percentage: getFactorInfo.percentage?.rejected_factor_count})
  const [factorProductAverage , setFactorProductAverage] = useState({data: getFactorInfo.date1?.factor_product_average , percentage: getFactorInfo.percentage?.factor_product_average})
  const [factorRowsAverage , setFactorRowsAverage] = useState({data: getFactorInfo.date1?.factor_rows_average , percentage: getFactorInfo.percentage?.factor_rows_average})
  const [factorAmountAverage , setFactorAmountAverage] = useState({data: getFactorInfo.date1?.factor_amount_average , percentage: getFactorInfo.percentage?.factor_amount_average})
  const [factorAmountProductAverage , setFactorAmountProductAverage] = useState({data: getFactorInfo.date1?.factor_amount_product_average , percentage: getFactorInfo.percentage?.factor_amount_product_average})
  const [customerIncomeAverage , setCustomerIncomeAverage] = useState({data: getFactorInfo.date1?.factor_amount_product_average , percentage: getFactorInfo.percentage?.factor_amount_product_average})
 const [grossSale , setGrossSale] = useState({data: getFactorInfo.date1?.gross_sale , percentage: getFactorInfo.percentage?.gross_sale})
 const [factorProductCount , setFactorProductCount] = useState({data: getFactorInfo.date1?.factor_product_count , percentage: getFactorInfo.percentage?.factor_product_count})
 const [factorProductWeight , setFactorProductWeight] = useState({data: getFactorInfo.date1?.factor_product_weight , percentage: getFactorInfo.percentage?.factor_product_weight})
 const [factorCommisions , setFactorCommisions] = useState({data: getFactorInfo.date1?.factor_commisions , percentage: getFactorInfo.percentage?.factor_commisions})
 const [pureProductCount , setPureProductCount] = useState({data: getFactorInfo.date1?.pure_product_count , percentage: getFactorInfo.percentage?.pure_product_count})
 const [pureProductWeight , setPureProductWeight] = useState({data: getFactorInfo.date1?.pure_product_weight , percentage: getFactorInfo.percentage?.pure_product_weight})
 const [pureSale , setPureSale] = useState({data: getFactorInfo.date1?.pure_sale , percentage: getFactorInfo.percentage?.pure_sale})
 const [pureFactorCounts , setPureFactorCounts] = useState({data: getFactorInfo.date1?.pure_factor_counts , percentage: getFactorInfo.percentage?.pure_factor_counts})
 const [pureGrossSale , setPureGrossSale] = useState({data: getFactorInfo.date1?.pure_gross_sale , percentage: getFactorInfo.percentage?.pure_gross_sale})
 const [rejectedProductCount , setRejectedProductCount] = useState({data: getFactorInfo.date1?.rejected_product_count , percentage: getFactorInfo.percentage?.rejected_product_count})
 const [rejectedProductWeight , setRejectedProductWeight] = useState({data: getFactorInfo.date1?.rejedted_product_weight , percentage: getFactorInfo.percentage?.rejedted_product_weight})
 const [usersCount , setUsersCount] = useState({data: getFactorInfo.date1?.users_count , percentage: getFactorInfo.percentage?.users_count})
 const [newUsersCount , setNewUsersCount] = useState({data: getFactorInfo.date1?.new_users_count , percentage: getFactorInfo.percentage?.new_users_count})
 const [oldUsersCount , setOldUsersCount] = useState({data: getFactorInfo.date1?.old_users_count , percentage: getFactorInfo.percentage?.old_users_count})
 const [percentUsers , setPercentUsers] = useState({data: getFactorInfo.date1?.percent_users , percentage: getFactorInfo.percentage?.percent_users})
 const [percentRejectedCount , setPercentRejectedCount] = useState({data: getFactorInfo.date1?.percent_rejected_count , percentage: getFactorInfo.percentage?.percent_rejected_count})
 const [percentRejectedAmount , setPercentRejectedAmount] = useState({data: getFactorInfo.date1?.percent_rejected_amount , percentage: getFactorInfo.percentage?.percent_rejected_amount})
 const [sumDiscount , setSumDiscount] = useState({data: getFactorInfo.date1?.sum_discount , percentage: getFactorInfo.percentage?.sum_discount})
 const [grossNewUsers , setGrossNewUsers] = useState({data: getFactorInfo.date1?.gross_new_users , percentage: getFactorInfo.percentage?.gross_new_users})
  const SelectShowSummeryInfosHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "sale_factor_count":
        setSaleFactorCount({data: getFactorInfo.date1?.sale_factor_count , percentage: getFactorInfo.percentage?.sale_factor_count})
        break;
      case "rejected_factor_count":
        setRejectedFactorCount({data: getFactorInfo.date1?.rejected_factor_count , percentage: getFactorInfo.percentage?.rejected_factor_count})
        break;
      case "factor_product_average":
        setFactorProductAverage({data: getFactorInfo.date1?.factor_product_average , percentage: getFactorInfo.percentage?.factor_product_average})
        break;
      case "factor_rows_average":
        setFactorRowsAverage({data: getFactorInfo.date1?.factor_rows_average , percentage: getFactorInfo.percentage?.factor_rows_average})
        break;
      case "factor_amount_average":
        setFactorAmountAverage({data: getFactorInfo.date1?.factor_amount_average , percentage: getFactorInfo.percentage?.factor_amount_average})
        break;
      case "factor_amount_product_average":
        setFactorAmountProductAverage({data: getFactorInfo.date1?.factor_amount_product_average , percentage: getFactorInfo.percentage?.factor_amount_product_average})
        break;
      case "customer_income_average":
        setCustomerIncomeAverage({data: getFactorInfo.date1?.customer_income_average , percentage: getFactorInfo.percentage?.customer_income_average})
        break;
       case "gross_sale":
        setGrossSale({data: getFactorInfo.date1?.gross_sale , percentage: getFactorInfo.percentage?.gross_sale})
        break;
       case "factor_product_count":
        setFactorProductCount({data: getFactorInfo.date1?.factor_product_count , percentage: getFactorInfo.percentage?.factor_product_count})
        break;
       case "factor_product_weight":
        setFactorProductWeight({data: getFactorInfo.date1?.factor_product_weight , percentage: getFactorInfo.percentage?.factor_product_weight})
        break
        case "factor_commisions":
          setFactorCommisions({data: getFactorInfo.date1?.factor_commisions , percentage: getFactorInfo.percentage?.factor_commisions})
          break;
        case "pure_product_count":
          setPureProductCount({data: getFactorInfo.date1?.pure_product_count , percentage: getFactorInfo.percentage?.pure_product_count})
          break;
         case "pure_product_weight":
          setPureProductWeight({data: getFactorInfo.date1?.pure_product_weight , percentage: getFactorInfo.percentage?.pure_product_weight})
          break;
        case "pure_sale":
        setPureSale({data: getFactorInfo.date1?.pure_sale , percentage: getFactorInfo.percentage?.pure_sale})
        break;
         case "pure_factor_counts":
          setPureFactorCounts({data: getFactorInfo.date1?.pure_factor_counts , percentage: getFactorInfo.percentage?.pure_factor_counts})
          break;
        case "pure_gross_sale":
          setPureGrossSale({data: getFactorInfo.date1?.pure_gross_sale , percentage: getFactorInfo.percentage?.pure_gross_sale})
          break;
        case "rejected_product_count":
          setRejectedProductCount({data: getFactorInfo.date1?.rejected_product_count , percentage: getFactorInfo.percentage?.rejected_product_count})
          break;
        case "rejedted_product_weight":
          setRejectedProductWeight({data: getFactorInfo.date1?.rejedted_product_weight , percentage: getFactorInfo.percentage?.rejedted_product_weight})
          break;
        case "users_count":
          setUsersCount({data: getFactorInfo.date1?.users_count , percentage: getFactorInfo.percentage?.users_count})
          break;
        case "new_users_count":
          setNewUsersCount({data: getFactorInfo.date1?.new_users_count , percentage: getFactorInfo.percentage?.new_users_count})
          break;
        case "old_users_count":
          setOldUsersCount({data: getFactorInfo.date1?.old_users_count , percentage: getFactorInfo.percentage?.old_users_count})
          break;
        case "percent_users":
          setPercentUsers({data: getFactorInfo.date1?.percent_users , percentage: getFactorInfo.percentage?.percent_users})
          break;
        case "percent_rejected_count":
          setPercentRejectedCount({data: getFactorInfo.date1?.percent_rejected_count , percentage: getFactorInfo.percentage?.percent_rejected_count})
          break;
         case "percent_rejected_amount":
          setPercentRejectedAmount({data: getFactorInfo.date1?.percent_rejected_amount , percentage: getFactorInfo.percentage?.percent_rejected_amount})
          break;
        case "sum_discount":
          setSumDiscount({data: getFactorInfo.date1?.sum_discount , percentage: getFactorInfo.percentage?.sum_discount})
          break;
          case "gross_new_users":
            setGrossNewUsers({data: getFactorInfo.date1?.gross_new_users , percentage: getFactorInfo.percentage?.gross_new_users})
            break;
        default:
          break;
    }
  }
    return (
    <section className='grid grid-cols-4 grid-rows-2 gap-6 my-3'>
      
      {/* {[
        { key: "sum_discount", state: sumDiscount },
        { key: "factor_amount_product_average", state: factorAmountProductAverage },
        { key: "pure_product_count", state: pureProductCount },
        { key: "users_count", state: usersCount },
        { key: "factor_product_average", state: factorProductAverage },
        { key: "factor_amount_average", state: factorAmountAverage },
        { key: "old_users_count", state: oldUsersCount },
        { key: "gross_sale", state: grossSale },
        { key: "pure_product_weight", state: pureProductWeight },
        { key: "pure_sale", state: pureSale },
        { key: "pure_factor_counts", state: pureFactorCounts },
        { key: "pure_gross_sale", state: pureGrossSale },
        { key: "rejected_product_count", state: rejectedProductCount },
        { key: "rejedted_product_weight", state: rejectedProductWeight },
        { key: "new_users_count", state: newUsersCount },
        { key: "percent_users", state: percentUsers },
        { key: "percent_rejected_count", state: percentRejectedCount },
        { key: "percent_rejected_amount", state: percentRejectedAmount },
        { key: "gross_new_users", state: grossNewUsers },
        { key: "factor_rows_average", state: factorRowsAverage },
        { key: "factor_commisions", state: factorCommisions },
        { key: "factor_product_count", state: factorProductCount },
        { key: "factor_product_weight", state: factorProductWeight },
        { key: "sale_factor_count", state: saleFactorCount },
        { key: "rejected_factor_count", state: rejectedFactorCount },
        { key: "customer_income_average", state: customerIncomeAverage },
      ].slice(0, 8).map(({ key, state }) => (
        console.log(key , state),
        <div key={key} className='overview-box'>
          <Select
            size="sm"
            items={ShowSummeryInfosItems}
            aria-label="مشاهده اطلاعات"
            aria-labelledby="مشاهده اطلاعات"
            defaultSelectedKeys={[key]}
            placeholder='یکی از موارد را انتخاب نمایید'
            onChange={SelectShowSummeryInfosHandler}
            variant="underlined"
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
          <div className='flex-between'>
            <div>{state.data ?? 0}</div>
            <div>{state.percentage ?? 0}%</div>
          </div>
        </div>
      ))} */}
      <div className='overview-box'>
          <Select
            size="sm"
            items={ShowSummeryInfosItems}
            aria-label="مشاهده اطلاعات"
            aria-labelledby="مشاهده اطلاعات"
           
            placeholder='یکی از موارد را انتخاب نمایید'
            onChange={SelectShowSummeryInfosHandler}
            variant="underlined"
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
          <div className='flex-between'>
            {/* <div>{state.data ?? 0}</div>
            <div>{state.percentage ?? 0}%</div> */}
          </div>
        </div>
    </section>
  )
}
export default ShowSummeryInfos



export const ShowSkelton = () => {
  return(
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