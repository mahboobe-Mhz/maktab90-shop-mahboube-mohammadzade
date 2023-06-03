import axios from "axios";
import Cookies from "universal-cookie";

const baseURL = 'http://127.0.0.1:8000/api';
const cookies = new Cookies();
export const instance = axios.create({
    baseURL,
})

instance.interceptors.request.use((config) => {

    if (config.url !== "/auth/token") {
      const accessToken = cookies.get("accessToken")
      config.headers.Authorization = "Bearer " + accessToken
    }
    return config;
  });
  
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
  
    // 401
  
    (error) => {
      const config = error.config;
      console.log("config", config)
      if (error.response.status === 401 && !config.sent) {
        config.sent = true;
        if (config.url !==  "/auth/token" && config.url !== "/auth/login") {
          const refreshToken = cookies.get("refreshToken")
          instance
            .post(
              "/auth/token",
              {refreshToken},
            
            )
            .then((res) => {
              const accessToken = res.data.token.accessToken;
         
             // cookies.set("refreshToken",res.data.token.refreshToken, { path: "/" });
             cookies.set("accessToken", accessToken, { path: "/" });
              config.headers.Authorization = "Bearer " + accessToken
              return instance(config);
            });
        } else if (config.url === " /auth/token") {
          cookies.remove("accessToken");
          cookies.remove("refreshToken");
          location.href = "auth/login";
        }
      }
    }
  );
  