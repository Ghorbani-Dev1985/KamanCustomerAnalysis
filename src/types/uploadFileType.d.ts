export interface UploadFileType {
    lastModified?: number,
    lastModifiedDate?: object,
    name: string,
    size: number,
    type: string,
    webkitRelativePath?: string,
}
export interface UploadFileResponse {
    error: {
        hasError: boolean,
        message: string,
    }
}