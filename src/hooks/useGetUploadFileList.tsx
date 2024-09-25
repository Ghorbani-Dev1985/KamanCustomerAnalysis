import { useQuery } from "@tanstack/react-query";
import { GetUploadedFileList, } from "services/DataEntryServices";

export const useGetUploadFileList = () =>
    useQuery({
      queryKey: ["getUploadFileList"],
      queryFn: GetUploadedFileList,
    });