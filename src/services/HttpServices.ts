import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
});


Api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

Api.interceptors.response.use(
  (res) => res,
 
);

const Http = {
  get: Api.get,
  post: Api.post,
  delete: Api.delete,
  put: Api.put,
  patch: Api.patch,
};


export default Http;
