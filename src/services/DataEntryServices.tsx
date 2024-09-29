import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import Http from "./HttpServices";
import { AxiosProgressEvent } from "axios";
export async function GetSampleFile(){
    const token = await GetAccessTokenFromCookie()
    return Http.post("/sample_file/" , {
        headers : {
            Authorization : `Bearer ${token}`
        }}).then(({data}) => data)
    }
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
export const GetUploadedFileList = async () => {
    let formData = new FormData()
    const token = await GetAccessTokenFromCookie()
    return Http.post("/list_imports/", formData ,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(({data}) => data.results)
}

export const DeleteUploadedFile = async (data : FormData) => {
    const token = await GetAccessTokenFromCookie()
    return Http.post("/remove_excel/", data , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(({data}) => data)
}
export const DownloadUploadedFile = async (data : FormData) => {
    const token = await GetAccessTokenFromCookie()
    return Http.post("/download_excel/", data , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(({data}) => data)
}