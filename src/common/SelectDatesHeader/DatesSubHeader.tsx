"use client";
import React, {Dispatch, SetStateAction, useState } from "react";
import {Button,Checkbox, Divider} from "@nextui-org/react";
import useClickOutside from "hooks/useClickOutside";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { HiCalendarDays, HiOutlineInformationCircle } from "react-icons/hi2";
import { Calendar } from "react-multi-date-picker";
import SelectDesiredDates from "./SelectDesiredDates";
import { useDates } from "@/context/DatesContext";
import SelectCompareDates from "./SelectCompareDates";
import '../../../public/styles/datePickerStyle.css'
import { useGetFactorInfo, useGetProductInfo } from "hooks/useGetInfo";
import ChangeDateToIso from "@/utils/ChangeDateToIso";
import toast from "react-hot-toast";
import { FactorInfoType, ProductInfoType } from "@/types/infosType";

const DatesSubHeader = ({setGetFactorInfo} : {setGetFactorInfo : Dispatch<SetStateAction<{
  date1: FactorInfoType,
  percentage: ProductInfoType
}>>}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useClickOutside(() => setShowDatePicker(false));
  const [isEnterUserDate, setIsEnterUserDate] = useState(true);
  const [isCompare, setIsCompare] = useState(false);
  const {startUserDate} = useDates()
  const {endUserDate} = useDates()
  const {desiredDatePeriod} = useDates()
  const {setDesiredDatePeriod} = useDates()
  const {startCompareUserDate} = useDates()
  const {endCompareUserDate} = useDates()
  const {compareDatePeriod} = useDates()
  const {setCompareDatePeriod} = useDates()
  const {SplitDesiredDatePeriod} = useDates()
  const {SplitCompareDatePeriod} = useDates()
  const {mutateAsync : GetFactorInfo} = useGetFactorInfo()
  const {isPending : isPendingGetProductInfo , mutateAsync : GetProductInfo} = useGetProductInfo()
  const HandleGetInfo = async () => {
    let formDataFactor = new FormData();
    let formDataProduct = new FormData();

    formDataFactor.append("start_date1", isEnterUserDate ? ChangeDateToIso(startUserDate) : ChangeDateToIso(SplitDesiredDatePeriod[0]))
    formDataFactor.append("end_date1", isEnterUserDate ? ChangeDateToIso(endUserDate) : ChangeDateToIso(SplitDesiredDatePeriod[1]))
    formDataProduct.append("start_date1", isEnterUserDate ? ChangeDateToIso(startUserDate) : ChangeDateToIso(SplitDesiredDatePeriod[0]))
    formDataProduct.append("end_date1", isEnterUserDate ? ChangeDateToIso(endUserDate) : ChangeDateToIso(SplitDesiredDatePeriod[1]))
    formDataProduct.append("export" , "0")
    if(isCompare){
      formDataFactor.append("start_date2", isEnterUserDate ? ChangeDateToIso(startCompareUserDate) : ChangeDateToIso(SplitCompareDatePeriod[0]))
      formDataFactor.append("end_date2", isEnterUserDate ? ChangeDateToIso(endCompareUserDate) : ChangeDateToIso(SplitCompareDatePeriod[1]))
    }
    try {
      const [FactorInfo, ProductInfo] = await Promise.all([
        GetFactorInfo(formDataFactor),
        GetProductInfo(formDataProduct)
      ]);
      console.log(FactorInfo, ProductInfo)
      if(!FactorInfo.error.hasError && !ProductInfo.error.hasError){
        setGetFactorInfo({date1: FactorInfo.results.date1, percentage: FactorInfo.results.percentage})
      }
      setShowDatePicker(false)
    } catch (error) {
       console.log(error)
       toast.error("خطا در دریافت اطلاعات")
    }
  }  
  return (
    <section className="relative w-full flex-between bg-white h-20 mb-3 rounded-lg shadow-sm">
      <div className="flex-center h-full">
        {/* Trigger Btn */}
        <Button
          color="primary"
          variant="light"
          onPress={() => setShowDatePicker((prev) => !prev)}
          className="hover:bg-primary-50 min-w-52 h-full px-1"
        >
          <div className="flex flex-col text-xs md:text-sm gap-y-2">
            <div className="flex-center gap-x-1">
              <HiCalendarDays className="size-4" />
              <span>
                {isEnterUserDate ? startUserDate : SplitDesiredDatePeriod[0]}
              </span>
              <span>تا</span>
              <span>
                {isEnterUserDate ? endUserDate : SplitDesiredDatePeriod[1]}
              </span>
            </div>
             <div className={`${isCompare ? "opacity-100 visible" : "opacity-0 invisible"} flex-center gap-x-1 transition-all ease-in-out duration-30`}>
                  <span>مقایسه با</span>
                  <span>{isEnterUserDate ? startCompareUserDate : SplitCompareDatePeriod[0]}</span>
                  <span>تا</span>
                  <span>{isEnterUserDate ? endCompareUserDate : SplitCompareDatePeriod[1]}</span> 
                  </div>
            </div>
        </Button>
        <Divider orientation="vertical" className="h-full w-px bg-gray-100" />
        <div
          ref={datePickerRef}
          className={`${
            showDatePicker ? "opacity-100 visible" : "opacity-0 invisible"
          } absolute z-50 w-full flex flex-col max-w-[65rem] right-0 top-20 rounded-lg bg-white overflow-hidden shadow-fullDark transition-all ease-in-out duration-300`}
        >
          {/* Main Container */}
          <div className="flex h-full min-h-[28rem]">
            {/* Left Side */}
            <div className="w-2/5 border-l border-gray-100 text-zinc-700">
               {/* Left Side Top */}
              <div className="h-1/2 border-r-4 border-r-primary overflow-hidden border-b border-b-gray-100 px-3 py-4">
                <p className="my-3">انتخاب بازه زمانی</p>
               <SelectDesiredDates isEnterUserDate={isEnterUserDate} setIsEnterUserDate={setIsEnterUserDate} />
              </div>
              {/* Left Side Bottom */}
              <div
                className={`${
                  isCompare && "border-r-4 border-r-amber-500"
                } h-1/2  text-zinc-700 overflow-hidden border-b border-b-gray-100 px-3 py-4`}
              >
                <Checkbox
                  isSelected={isCompare}
                  onChange={() => setIsCompare((prev) => !prev)}
                  color="primary"
                  radius="lg"
                  className="my-3"
                >
                  <span className="text-zinc-700">مقایسه با ...</span>
                </Checkbox>
                 <SelectCompareDates isCompare={isCompare} />
              </div>
            </div>
            {/* Right Side */}
            <div className="w-3/5 min-h-[23rem] px-3 py-4">
              <div className="flex-center">
                <Calendar
                  range
                  rangeHover
                  value={desiredDatePeriod}
                  calendar={persian}
                  locale={persian_fa}
                  onChange={setDesiredDatePeriod}
                  className="!shadow-none"
                />
                <Calendar
                  range
                  disabled={!isCompare && true}
                  rangeHover
                  value={compareDatePeriod}
                  onChange={setCompareDatePeriod}
                  calendar={persian}
                  locale={persian_fa}
                  className={`${isCompare ? "opacity-100" : "opacity-50"} !shadow-none kamanCalender`}
                  
                />
              </div>
            </div>
          </div>
          <Divider />
          {/* Buttons */}
          <div className="w-full flex justify-end items-center p-6">
            <div className="flex-center gap-x-4">
              <Button
                color="primary"
                variant="bordered"
                onPress={() => setShowDatePicker(false)}
              >
                انصراف
              </Button>
              <Button
                color="primary"
                variant="solid"
                onPress={HandleGetInfo}
              >
                اعمال
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center font-normal h-full gap-x-1 pl-1.5">
        <HiOutlineInformationCircle className="size-4" />
        <span>راهنما</span>
      </div>
    </section>
  );
};

export default DatesSubHeader;