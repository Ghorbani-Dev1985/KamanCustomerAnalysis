import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import Http from "./HttpServices";
export async function GetUser(){
    const token = await GetAccessTokenFromCookie()
    return Http.get("/user_info/" , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}
export function RegisterUser(data: object){
    return Http.post("/add_user/" , data).then(({data}) => data)
}
export function LoginWithEmailFN(data : object){
    return Http.post("/user_login/" , data).then(({data}) => data);
}
export function ChangePassword(data: object){
    return Http.post("/change_password/" , data).then(({data}) => data);
}
export async function LogoutUser(){
    const token = await GetAccessTokenFromCookie()
    return Http.get("/user_logout/", {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
}