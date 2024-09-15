import Http from "./HttpServices";
export function GetUser(data : string | undefined){
    return Http.get("/user_info/" , {
        headers : {
            Authorization : `Bearer ${data}`
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
export function LogoutUser(data : string | undefined){
    return Http.get("/user_logout/" , {
        headers : {
            Accept : 'text/plain',
            Authorization : `Bearer ${data}`
        }}).then(({data}) => data)
}