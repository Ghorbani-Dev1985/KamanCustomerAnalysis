import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import Http from "./HttpServices";
export async function GetCustomerSegmentationSettings(){
    const token = await GetAccessTokenFromCookie()
    return Http.get("/get_config/" , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}
export async function GetScoringMethodScore(){
    const token = await GetAccessTokenFromCookie()
    return Http.get("/get_score_update_config/" , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}
export async function GetBasicAnalysisSettings(){
    const token = await GetAccessTokenFromCookie()
    return Http.get("/get_display_config/" , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}

export async function UpdateDataAnalysisSettingsApi(data: object){
        const token = await GetAccessTokenFromCookie()
        return Http.post("/update_config/" , data , {
            headers : {
                Authorization : `Bearer ${token}`
            }}).then(({data}) => data)
    }