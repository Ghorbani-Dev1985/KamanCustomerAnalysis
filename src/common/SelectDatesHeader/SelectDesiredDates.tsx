'use client';
import { SelectDateItems } from '@/constants/SelectItems'
import { useDates } from '@/context/DatesContext';
import { Input, Select, SelectItem } from '@nextui-org/react'
import React, { ChangeEvent, Dispatch } from 'react'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

function SelectDesiredDates({isEnterUserDate , setIsEnterUserDate} : {isEnterUserDate : boolean , setIsEnterUserDate : Dispatch<React.SetStateAction<boolean>>}) {
   
    const {startUserDate} = useDates()
    const {setStartUserDate} = useDates()
    const {endUserDate} = useDates()
    const {setEndUserDate} = useDates()
    const {desiredDatePeriod} = useDates()
    const {setDesiredDatePeriod} = useDates()
    const {SplitDesiredDatePeriod} = useDates()
    let startDesiredDatePeriod, endDesiredDatePeriod;
    const SelectDatePeriodHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const SelectId = e.target.value;
        setIsEnterUserDate(false);
        switch (SelectId) {
          case "1":
            setIsEnterUserDate(true);
            return;
          case "2":
            startDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(2,"day");
            endDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(1,"day");
            setDesiredDatePeriod([startDesiredDatePeriod, endDesiredDatePeriod]);
            return;
          case "3":
            let dayOfWeek = new DateObject({ calendar: persian }).weekDay.index;
            let startOfThisWeek = new DateObject({ calendar: persian }).subtract(dayOfWeek,"days");
            let endOfThisWeek = new DateObject({ calendar: persian }).subtract(dayOfWeek, "days");
            startDesiredDatePeriod = startOfThisWeek.subtract(7, "days");
            endDesiredDatePeriod = endOfThisWeek.subtract(1, "days");
            setDesiredDatePeriod([startDesiredDatePeriod, endDesiredDatePeriod]);
            return;
          case "4":
            let startLastMonthDate = new DateObject({ calendar: persian }).subtract(1,"month");
            let endLastMonthDate = new DateObject({ calendar: persian }).subtract(1,"month");
            startDesiredDatePeriod = startLastMonthDate.setDay(1);
            endDesiredDatePeriod = endLastMonthDate.add(1, "month").setDay(1);
            setDesiredDatePeriod([startDesiredDatePeriod, endDesiredDatePeriod]);
            return;
          case "5":
            startDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(7,"days");
            endDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(1,"day");
            setDesiredDatePeriod([startDesiredDatePeriod, endDesiredDatePeriod]);
            return;
          case "6":
            startDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(30,"days");
            endDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(1,"day");
            setDesiredDatePeriod([startDesiredDatePeriod, endDesiredDatePeriod]);
            return;
          case "7":
            startDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(365,"days");
            endDesiredDatePeriod = new DateObject({ calendar: persian }).subtract(1,"day");
            setDesiredDatePeriod([startDesiredDatePeriod, endDesiredDatePeriod]);
            return;
          default:
            break;
        }
      };
      const StartUserDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setStartUserDate(inputValue);
        startDesiredDatePeriod = new DateObject({
          calendar: persian,
          locale: persian_fa,
          format: "YYYY/MM/DD",
          date: startUserDate,
        });
      };
      const EndUserDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setEndUserDate(inputValue);
        endDesiredDatePeriod = new DateObject({
          calendar: persian,
          locale: persian_fa,
          format: "YYYY/MM/DD",
          date: endUserDate,
        });
      };
      
  return (
    <>
           <Select
                  size="lg"
                  items={SelectDateItems}
                  aria-label="انتخاب بازه زمانی"
                  aria-labelledby="انتخاب بازه زمانی"
                  defaultSelectedKeys="1"
                  onChange={SelectDatePeriodHandler}
                  variant="bordered"        
                  classNames={{ base: "my-5" }}
                >
                  {(SelectDateItem) => (
                    <SelectItem
                      key={SelectDateItem.id}
                      value={SelectDateItem.title}
                    >
                      {SelectDateItem.title}
                    </SelectItem>
                  )}
                </Select>
                <div className="flex-between gap-x-4 mt-6">
                  {isEnterUserDate ? (
                    <>
                      <Input
                        size="lg"
                        variant="bordered"
                        placeholder="تاریخ متعبر: ۱۴۰۱/۰۱/۰۱"
                        value={startUserDate.toString()}
                        onChange={StartUserDateHandler}
                        classNames={{
                          inputWrapper:
                            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                          input: "text-center text-base placeholder:text-xs",
                        }}
                      />
                      <span>تا</span>
                      <Input
                        size="lg"
                        variant="bordered"
                        placeholder="تاریخ متعبر: ۱۴۰۱/۰۲/۰۲"
                        value={endUserDate.toString()}
                        onChange={EndUserDateHandler}
                        classNames={{
                          inputWrapper:
                            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                          input: "text-center text-base placeholder:text-xs",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Input
                        size="lg"
                        variant="bordered"
                        value={SplitDesiredDatePeriod[0]}
                        classNames={{
                          inputWrapper:
                            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                          input: "text-center text-base",
                        }}
                      />
                      <span>تا</span>
                      <Input
                        size="lg"
                        variant="bordered"
                        value={SplitDesiredDatePeriod[1]}
                        classNames={{
                          inputWrapper:
                            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                          input: "text-center text-base",
                        }}
                      />
                    </>
                  )}
     </div>
    </>
  )
}

export default SelectDesiredDates