import axios from "axios";

axios.defaults.headers.common["Content-Type"] = 'multipart/form-data';
axios.defaults.headers.common.Accept = 'application/json'

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  
});


Api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

Api.interceptors.response.use(
  (res) => res,
  // async (err) => {
  //   const originalConfig = err.config;
  //   if (err.response.status === 401 && !originalConfig._retry) {
  //     originalConfig._retry = true;
  //     try {
  //       const { data } = await axios.post(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/token/refresh`,
  //         { withCredentials: true }
  //       );
  //       if (data) return Api(originalConfig);
  //     } catch (error) {
  //       return Promise.reject(error);
  //     }
  //   }
  //   return Promise.reject(err);
  // }
);

const Http = {
  get: Api.get,
  post: Api.post,
  delete: Api.delete,
  put: Api.put,
  patch: Api.patch,
};


export default Http;
