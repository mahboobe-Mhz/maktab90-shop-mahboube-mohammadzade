import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = 'http://127.0.0.1:8000/api';

export const request = axios.create({
    baseURL,
})



///////

request.interceptors.request.use((config) => {


    //get-new-token => refresh token
    if (config.url !== "/get-new-token") {
      const accessToken = localStorage.getItem("accessToken");
      config.headers.Authorization = accessToken;
    }
    return config;
  });
  
  request.interceptors.response.use(
    (response) => {
      return response;
    },
  
    // 401
  
    (error) => {
      const config = error.config;
      console.log("config", config)
      if (error.response.status === 401 && !config.sent) {
        config.sent = true;
        if (config.url !== "/get-new-token") {
          const refreshToken = localStorage.getItem("refreshToken");
          request
            .post(
              "/get-new-token",
              {},
              {
                headers: {
                  Authorization: refreshToken,
                },
              }
            )
            .then((res) => {
              const accessToken = res.data.accessToken;
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", res.data.refreshToken);
              config.headers.Authorization = accessToken;
              return request(config);
            });
        } else if (config.url === "/get-new-token") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          location.href = "/login";
        }
      }
    }
  );
  