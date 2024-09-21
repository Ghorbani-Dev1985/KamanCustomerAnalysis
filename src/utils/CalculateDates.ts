import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar, DateObject } from "react-multi-date-picker";
let startDesiredTimePeriod, endDesiredTimePeriod;
export const CalculateYesterday = ({startDate , endDate} : {startDate?: DateObject , endDate?: DateObject}) => {
    const startDesiredTimePeriod = startDate ? new DateObject(startDate).subtract(1, "day") : undefined;
    const endDesiredTimePeriod = endDate ? new DateObject(endDate).subtract(1, "day") : undefined;
    return [startDesiredTimePeriod, endDesiredTimePeriod];
};