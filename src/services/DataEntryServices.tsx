import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import Http from "./HttpServices";
import { AxiosProgressEvent, AxiosPromise } from "axios";
import { UploadFileResponse } from "@/types/uploadFileType";
export async function GetSampleFile(){
    const token = await GetAccessTokenFromCookie()
    return Http.post("/sample_file/" , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
    }
//     export async const UploadUserFile(data: object , setUploadFileProgress: (progress: number) => void) : => {
//     const token = await GetAccessTokenFromCookie()
   
//     return Http.post("/import_excel/", data, {
        
//             onUploadProgress: (progressEvent: AxiosProgressEvent) => {
//               const progress = Math.round(
//                 (progressEvent.loaded * 100) / progressEvent.total!
//               );
//               setUploadFileProgress(progress);
//             },
          
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }).then(({data}) => data)
// }
export const UploadUserFile = async (data: FormData , onUploadProgress: (progress: number) => void) => {
    const token = await GetAccessTokenFromCookie()
    return Http.post("/import_excel/", data, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total!
          );
          onUploadProgress(progress);
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(({data}) => data)
}