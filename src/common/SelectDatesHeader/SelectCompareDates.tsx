import { CompareDateItems } from '@/constants/SelectItems'
import { useDates } from '@/context/DatesContext'
import { Input, Select, SelectItem } from '@nextui-org/react'
import React, { ChangeEvent, useState } from 'react'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

const SelectCompareDates = ({isCompare} : {isCompare : boolean}) => {
    const {startCompareUserDate} = useDates()
    const {endCompareUserDate} = useDates()
    const {desiredDatePeriod} = useDates()
    const {setCompareDatePeriod} = useDates()
    const {setStartCompareUserDate} = useDates()
    const {setEndCompareUserDate} = useDates()
    const {SplitCompareDatePeriod} = useDates()
    const [isEnterUserDate, setIsEnterUserDate] = useState(true);
    let startCompareDatePeriod, endCompareDatePeriod;
    const SelectCompareDatePeriodHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const SelectId = e.target.value;
         setIsEnterUserDate(false);
        switch (SelectId) {
          case "1":
            setIsEnterUserDate(true);
            return;
          case "2":
            let startCompareLastMonthDate = new DateObject(desiredDatePeriod[0]).subtract(1, "month");
            let endCompareLastMonthDate = new DateObject(desiredDatePeriod[1]).subtract(1, "month");
            startCompareDatePeriod = startCompareLastMonthDate.setDay(1);
            endCompareDatePeriod = endCompareLastMonthDate.add(1, "month").setDay(1);
             setCompareDatePeriod([startCompareDatePeriod , endCompareDatePeriod]);
              return;
          
           case "3":
             let startCompareLastYearDate = new DateObject(desiredDatePeriod[0]).subtract(1, "year");
             let endCompareLastYearDate = new DateObject(desiredDatePeriod[1]).subtract(1, "year");
             startCompareDatePeriod = startCompareLastYearDate.setDay(1);
             endCompareDatePeriod = endCompareLastYearDate.add(1, "year").setDay(1);
             setCompareDatePeriod([startCompareDatePeriod , endCompareDatePeriod]);
            return;
          default:
            break;
        }
      };
    const StartCompareUserDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setStartCompareUserDate(inputValue);
        startCompareDatePeriod = new DateObject({
          calendar: persian,
          locale: persian_fa,
          format: "YYYY/MM/DD",
          date: startCompareUserDate,
        });
      };
      const EndCompareUserDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setEndCompareUserDate(inputValue);
        endCompareDatePeriod = new DateObject({
          calendar: persian,
          locale: persian_fa,
          format: "YYYY/MM/DD",
          date: endCompareUserDate,
        });
      };
      return (
    <>
         <Select
                  isDisabled={!isCompare && true}
                  size="lg"
                  items={CompareDateItems}
                  aria-label=" مقایسه با "
                  aria-labelledby="مقایسه با"
                  placeholder='یکی از موارد را انتخاب نمایید'
                  defaultSelectedKeys="1"
                  onChange={SelectCompareDatePeriodHandler}
                  variant="bordered"
                  classNames={{ base: "my-5" }}
                >
                  {(CompareDateItem) => (
                    <SelectItem
                      key={CompareDateItem.id}
                      value={CompareDateItem.title}
                    >
                      {CompareDateItem.title}
                    </SelectItem>
                  )}
                </Select>
                <div className="flex-between gap-x-4 my-5">
                  {isEnterUserDate ? (
                    <>
                      <Input
                        isDisabled={!isCompare && true}
                        size="lg"
                        variant="bordered"
                        placeholder="تاریخ متعبر: ۱۴۰۱/۰۱/۰۱"
                        value={startCompareUserDate.toString()}
                        onChange={StartCompareUserDateHandler}
                        classNames={{
                          inputWrapper:
                            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                          input: "text-center text-base placeholder:text-xs",
                        }}
                      />
                      <span
                        className={`${
                          !isCompare ? "opacity-50" : "opacity-100"
                        }`}
                      >
                        تا
                      </span>
                      <Input
                        isDisabled={!isCompare && true}
                        size="lg"
                        variant="bordered"
                        placeholder="تاریخ متعبر: ۱۴۰۱/۰۲/۰۲"
                        value={endCompareUserDate.toString()}
                        onChange={EndCompareUserDateHandler}
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
                        isDisabled={!isCompare && true}
                        size="lg"
                        variant="bordered"
                        value={SplitCompareDatePeriod[0]}
                        classNames={{
                          inputWrapper:
                            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                          input: "text-center text-base",
                        }}
                      />
                      <span
                        className={`${
                          !isCompare ? "opacity-50" : "opacity-100"
                        }`}
                      >
                        تا
                      </span>
                      <Input
                        isDisabled={!isCompare && true}
                        size="lg"
                        variant="bordered"
                        value={SplitCompareDatePeriod[1]}
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

export default SelectCompareDates
