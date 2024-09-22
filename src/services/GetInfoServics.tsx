import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import Http from "./HttpServices";
export async function GetFactorInfo(data: object){
    const token = await GetAccessTokenFromCookie()
    return Http.post("/factors_info/" , data , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}

export async function GetProductInfo(data: object){
    const token = await GetAccessTokenFromCookie()
    return Http.post("/products_info/" , data , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}