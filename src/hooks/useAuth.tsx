import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import { useQuery } from "@tanstack/react-query";
import { GetUser } from "services/AuthServices";


export const useGetUser = () => {
  useQuery({
    queryKey: ["getUser"],
    queryFn: async () => {
      const token = await GetAccessTokenFromCookie()
     return GetUser(token)
    }
  });

}