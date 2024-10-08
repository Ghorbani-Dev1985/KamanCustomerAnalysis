import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import Http from "./HttpServices";
export async function GetDataAnalysisSettings(){
    const token = await GetAccessTokenFromCookie()
    let formData = new FormData();
    return Http.post("/get_config/" , formData , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}

export async function UpdateDataAnalysisSettings(data: object){
    const token = await GetAccessTokenFromCookie()
    return Http.post("/update_config/" , data , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}