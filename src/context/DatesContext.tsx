import { createContext, Dispatch, ReactNode, useContext, useState } from "react";
import persian from "react-date-object/calendars/persian";
import { DateObject } from "react-multi-date-picker";

type DatesContextType<T> = {
  startUserDate: T;
  setStartUserDate: Dispatch<React.SetStateAction<T>>;
  endUserDate: T;
  setEndUserDate: Dispatch<React.SetStateAction<T>>;
  startCompareUserDate: T;
  setStartCompareUserDate: Dispatch<React.SetStateAction<T>>;
  endCompareUserDate: T;
  setEndCompareUserDate: Dispatch<React.SetStateAction<T>>;
  desiredDatePeriod: T;
  setDesiredDatePeriod: Dispatch<React.SetStateAction<T>>;
  compareDatePeriod: T;
  setCompareDatePeriod: Dispatch<React.SetStateAction<T>>;
  SplitDesiredDatePeriod: T;
  SplitCompareDatePeriod: T;
};
const DatesContext = createContext<DatesContextType<any>>(undefined as any);

export const DatesProvider = ({ children }: { children: ReactNode }) => {
  const [startUserDate, setStartUserDate] = useState<string>(
    new DateObject({ calendar: persian }).subtract(1, "day").toString()
  );
  const [endUserDate, setEndUserDate] = useState(
    new DateObject({ calendar: persian }).toString()
  );
  const [startCompareUserDate, setStartCompareUserDate] = useState(
    new DateObject({ calendar: persian }).subtract(1, "day").toString()
  );
  const [endCompareUserDate, setEndCompareUserDate] = useState(
    new DateObject({ calendar: persian }).toString()
  );
  const [desiredDatePeriod, setDesiredDatePeriod] = useState([
    new DateObject({ calendar: persian }).toFirstOfWeek(),
    new DateObject({ calendar: persian }).toLastOfWeek(),
  ]);
  const [compareDatePeriod, setCompareDatePeriod] = useState([
    new DateObject({ calendar: persian }),
    new DateObject({ calendar: persian }),
  ]);
  const SplitDesiredDatePeriod = desiredDatePeriod.toString().split(",");
  const SplitCompareDatePeriod = compareDatePeriod.toString().split(",");
  return (
    <DatesContext.Provider
      value={{
        startUserDate,
        setStartUserDate,
        endUserDate,
        setEndUserDate,
        startCompareUserDate,
        setStartCompareUserDate,
        endCompareUserDate,
        setEndCompareUserDate,
        desiredDatePeriod,
        setDesiredDatePeriod,
        compareDatePeriod,
        setCompareDatePeriod,
        SplitDesiredDatePeriod,
        SplitCompareDatePeriod,
      }}
    >
      {children}
    </DatesContext.Provider>
  );
};

export const useDates = () => useContext(DatesContext);
