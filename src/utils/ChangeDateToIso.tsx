import { DateObject } from "react-multi-date-picker";
export default function ChangeDateToIso(date : string){
    return new DateObject(date).format("YYYY-MM-DDTHH:mm:ss")
}
