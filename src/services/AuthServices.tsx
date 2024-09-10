import { LoginWhitEmailType } from "@/types/loginRegisterFormType";
import Http from "./HttpServices";

export function LoginWithEmailFN(data: LoginWhitEmailType){
    return Http.post("/user_login" , data).then(({data}) => data);
}