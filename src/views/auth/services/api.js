// Import AxiosInstance và lưu trữ token khi đăng nhập thành công
import { AxiosInstance } from "../../../services/api";

class ApiAuth {
  apiSignIn = (username, password) => {
    return AxiosInstance({
      method: "post",
      url: "/auth/login",
      data: {
        username,
        password,
      },
    });
  };

  apiGetUser = async () => {
    return AxiosInstance({
      method: "get",
      url: "/auth/me",
    });
  };
}

export const API_AUTH = new ApiAuth();
