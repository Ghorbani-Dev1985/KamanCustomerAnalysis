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
  desiredTimePeriod: T;
  setDesiredTimePeriod: Dispatch<React.SetStateAction<T>>;
  compareTimePeriod: T;
  setCompareTimePeriod: Dispatch<React.SetStateAction<T>>;
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
  const [desiredTimePeriod, setDesiredTimePeriod] = useState([
    new DateObject({ calendar: persian }).toFirstOfWeek(),
    new DateObject({ calendar: persian }).toLastOfWeek(),
  ]);
  const [compareTimePeriod, setCompareTimePeriod] = useState([
    new DateObject({ calendar: persian }),
    new DateObject({ calendar: persian }),
  ]);
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
        desiredTimePeriod,
        setDesiredTimePeriod,
        compareTimePeriod,
        setCompareTimePeriod,
      }}
    >
      {children}
    </DatesContext.Provider>
  );
};

export const useDates = () => useContext(DatesContext);
