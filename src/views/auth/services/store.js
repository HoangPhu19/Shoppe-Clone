import { defineStore } from "pinia";
import { API_AUTH } from "../../../services/api";
import { accessToken, appLocalStorage } from "../../../services/utils";

export const StoreAuth = defineStore("StoreAuth", {
  state: () => ({}),
  getters: {},
  actions: {
    async actionLogin(username, password) {
      return API_AUTH.apiSignIn(username, password)
        .then((res) => res.data)
        .then(async (res) => {
          if (res.token) {
            appLocalStorage.value.accessToken = `Bearer ${res.token}`;

            return this.actionGetUserData();
          } else {
            throw "Lỗi đăng nhập";
          }
        })
        .catch((error) => {
          throw Error(error);
        });
    },

    async actionGetUserData() {
      return API_AUTH.apiGetUser()
        .then((res) => res.data)
        .then((res) => {
          if (res.id) {
            appLocalStorage.value.userData = res;

            return res;
          } else {
            throw "Lỗi tải dữ liệu người dùng";
          }
        })
        .catch((error) => {
          throw Error(error);
        });
    },
  },
});
