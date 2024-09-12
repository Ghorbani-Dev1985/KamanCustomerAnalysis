
import { UserPassType , RegisterType} from "@/types/loginRegisterFormType";
import Http from "./HttpServices";

// export function SendOtp(data){
//     return Http.post("/get-otp" , data).then(({data}) => data.data)
// }

// export function CheckOtp(data){
//     return Http.post("/check-otp" , data).then(({data}) => data.data)
// }
export function RegisterUser(data: RegisterType){
    return Http.post("/add_user/" , data).then(({data}) => data.data)
}
export function LoginWithEmailFN(data: UserPassType){
    return Http.post("/user_login/" , data).then(({data}) => data);
}

export function LogoutUser(){
    return Http.get("/user_logout").then(({data}) => data.data)
}