import { LoginWhitEmailType } from "@/types/loginRegisterFormType";
import Http from "./HttpServices";

export function SendOtp(data){
    return Http.post("/get-otp" , data).then(({data}) => data.data)
}

export function CheckOtp(data){
    return Http.post("/check-otp" , data).then(({data}) => data.data)
}
export function RegisterUser(data){
    return Http.post("/user_register" , data).then(({data}) => data.data)
}
export function LoginWithEmailFN(data: LoginWhitEmailType){
    return Http.post("/user_login" , data).then(({data}) => data);
}

export function LogoutUser(){
    return Http.post("/user_logout").then(({data}) => data.data)
}