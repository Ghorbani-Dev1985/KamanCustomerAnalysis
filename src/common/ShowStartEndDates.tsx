import { useDates } from "@/context/DatesContext";
import React from "react";

const ShowStartEndDates = () => {
    const {startUserDate , endUserDate , SplitDesiredDatePeriod , isEnterUserDate} = useDates();
  return (
    <div className="flex items-center gap-x-1 text-gray-500 text-xs">
      <span>{isEnterUserDate ? startUserDate : SplitDesiredDatePeriod[0]}</span>
      <span>-</span>
      <span>{isEnterUserDate ? endUserDate : SplitDesiredDatePeriod[1]}</span>
    </div>
  );
};

export default ShowStartEndDates;
