<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

import {
  userData,
  appLocalStorage,
} from "../../../../../services/utils/localStorage";

const toast = useToast();

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

  toast.success("Cật Nhật Hồ Sơ", {
    timeout: 1000,
  });
};
</script>

<template>
  <!-- Title -->
  <div class="border-b h-1/6 flex flex-col mx-6 py-6">
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
</template>

<style scoped></style>
