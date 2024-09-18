import { DeleteCookies } from "@/utils/DeleteCookies";
import { GetAccessTokenFromCookie } from "@/utils/GetAccessTokenFromCookie";
import { GetRefreshTokenFromCookie } from "@/utils/GetRefreshTokenFromCookie";
import { StoreTokenInCookie } from "@/utils/StoreTokenInCookie";
import axios from "axios";

axios.defaults.headers.common["Content-Type"] = 'multipart/form-data';
axios.defaults.headers.common.Accept = 'application/json'

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});


Api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

Api.interceptors.response.use(
  (res) => res,
 
  async (err) => {
    const refreshToken = await GetRefreshTokenFromCookie();
    const token = await GetAccessTokenFromCookie();
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        let formData = new FormData();
        refreshToken && formData.append("refresh", refreshToken);
        const result = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/token/refresh/`,
          formData,
          {
            headers : {
                Authorization : `Bearer ${token}`
            }}
        );
        const {access , refresh} = result.data
        await StoreTokenInCookie(access , refresh)
        axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
        return Api(originalConfig);
      } catch (error) {
       await DeleteCookies();
      window.location.href = "/";
       return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const Http = {
  get: Api.get,
  post: Api.post,
  delete: Api.delete,
  put: Api.put,
  patch: Api.patch,
};


export default Http;
