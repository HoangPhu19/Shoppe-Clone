<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useToast } from "vue-toastification";

import { userData, appLocalStorage } from "../../services/utils/localStorage";

const toast = useToast();

const iShowUserProfile = ref(false);

const username = ref(`${userData.value.firstName} ${userData.value.lastName}`);

const userImage = ref(userData.value.image);

const onInputChangeName = (event) => {
  username.value = event.target.value;
};

const onChangeImage = (event) => {
  const input = event.target;

  if (input.files.length > 0) {
    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      userImage.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
};

const onSave = () => {
  const [newFirstName, newLastName] = username.value.split(" ");

  appLocalStorage.value.userData.firstName = newFirstName;
  appLocalStorage.value.userData.lastName = newLastName;
  appLocalStorage.value.userData.image = userImage.value;

  toast.success("Cật Nhật Hồ Sơ");
};

onMounted(() => {
  iShowUserProfile.value = true;
});
</script>

<template>
  <div class="w-[1200px] h-screen mx-auto">
    <div class="w-full h-[550px] flex mt-4">
      <!-- SideBar -->
      <div class="w-1/6 flex flex-col p-4 text-sm">
        <!-- Username -->
        <div class="flex h-1/6 items-center gap-4 pb-4 border-b">
          <img :src="userData.image" class="w-2/6 rounded-[50%]" />

          <div class="w-4/6 text-sm">
            <div class="font-bold">
              {{ userData.firstName }} {{ userData.lastName }}
            </div>

            <div class="text-gray-400">Sửa Hồ Sơ</div>
          </div>
        </div>

        <!-- My information -->
        <div class="mt-4 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user text-blue-600"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>

          <div class="flex flex-col gap-4">
            <div
              class="hover:text-orange-600 hover:cursor-pointer"
              @click="iShowUserProfile = !iShowUserProfile"
            >
              Tài Khoản Của Tôi
            </div>

            <Transition>
              <div
                class="text-gray-600 flex flex-col gap-4"
                v-if="iShowUserProfile"
              >
                <div class="hover:text-orange-600 hover:cursor-pointer">
                  Hồ Sơ
                </div>

                <div class="hover:text-orange-600 hover:cursor-pointer">
                  Ngân Hàng
                </div>

                <div class="hover:text-orange-600 hover:cursor-pointer">
                  Địa Chỉ
                </div>

                <div class="hover:text-orange-600 hover:cursor-pointer">
                  Đổi Mật Khẩu
                </div>

                <div class="hover:text-orange-600 hover:cursor-pointer">
                  Cài Đặt Thông Báo
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Purchase Order -->
        <div class="flex gap-2 mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-clipboard-text text-blue-600"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
            />
            <path
              d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
            />
            <path d="M9 12h6" />
            <path d="M9 16h6" />
          </svg>

          <div class="hover:text-orange-600 hover:cursor-pointer">Đơn Mua</div>
        </div>

        <!-- Notification -->
        <div class="flex gap-2 mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-bell text-orange-600"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
            />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>

          <div class="hover:text-orange-600 hover:cursor-pointer">
            Thông Báo
          </div>
        </div>

        <!-- Voucher -->
        <div class="flex gap-2 mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-gift-card text-red-600"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
            />
            <path d="M7 16l3 -3l3 3" />
            <path
              d="M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z"
            />
          </svg>

          <div class="hover:text-orange-600 hover:cursor-pointer">Voucher</div>
        </div>

        <!-- Shop Cash -->
        <div class="flex gap-2 mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-premium-rights text-yellow-600"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path
              d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"
            />
            <path d="M12 7v2" />
            <path d="M12 15v2" />
          </svg>

          <div class="hover:text-orange-600 hover:cursor-pointer">
            Shoppe Xu
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="w-5/6 bg-white border rounded px-6 pt-4">
        <!-- Title -->
        <div class="border-b h-1/6">
          <div>Hồ Sơ Của Tôi</div>

          <div class="text-gray-500 text-sm">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </div>
        </div>

        <!-- Content -->
        <div class="w-full flex h-5/6 py-6 text-sm">
          <!-- Left -->
          <div class="flex pl-16 w-4/6 flex-col gap-8">
            <div class="flex items-center gap-4">
              <div class="w-1/6 text-end text-gray-600">Tên đăng nhập</div>

              <div class="text-black">{{ userData.username }}</div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-1/6 text-end text-gray-600">Tên</div>

              <input
                type="text"
                class="w-4/6 h-10 outline-none pl-2 border"
                v-model="username"
                @input="onInputChangeName"
              />
            </div>

            <div class="flex items-center gap-4">
              <div class="w-1/6 text-end text-gray-600">Email</div>

              <div>{{ userData.email }}</div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-1/6 text-end text-gray-600">Số điện thoại</div>

              <div>{{ userData.phone }}</div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-1/6 text-end text-gray-600">Giới tính</div>

              <div class="flex items-center gap-2">
                <input type="checkbox" />

                <span>Nam</span>

                <input type="checkbox" />

                <span>Nữ</span>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-1/6"></div>

              <div
                class="px-5 py-2 rounded-sm bg-orange-600 text-white hover:opacity-90 hover:cursor-pointer"
                @click="onSave"
              >
                Lưu
              </div>
            </div>
          </div>

          <!-- Right -->
          <div class="flex flex-col items-center w-2/6 h-3/4 gap-4 border-l">
            <img :src="userImage" class="w-2/6 rounded-[50%]" />

            <label
              for="imageInput"
              class="px-4 py-2 border hover:bg-gray-50 hover:cursor-pointer"
              >Chọn Ảnh</label
            >
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              class="hidden"
              @input="onChangeImage"
            />

            <div class="w-3/6 text-gray-400 text-xs">
              Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
