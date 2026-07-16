import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/",
});

axiosInstance.interceptors.request.use(
  function (config) {
   
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response && error.response.status == 401){
  
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
