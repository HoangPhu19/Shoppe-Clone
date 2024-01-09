<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  fetch("https://provinces.open-api.vn/api/?depth=3")
    .then((res) => res.json())
    .then((data) => {
      listAddress.value = data;
    });
});

const closeModalAddress = () => {
  onCloseModal();
};

const emits = defineEmits(["closeModal"]);

const onCloseModal = () => {
  emits("closeModal");
};

const searchQuery = ref("");

const searchResults = ref([]);

const searchAddress = () => {
  const searchTerm = searchQuery.value.toLowerCase().trim();
  if (searchTerm.length >= 1) {
    const matchedResults = [];

    listAddress.value.forEach((province) => {
      const districts = province.districts;

      districts.forEach((district) => {
        const wards = district.wards;

        wards.forEach((ward) => {
          const addressInfo =
            `${ward.name} ${district.name} ${province.name}`.toLowerCase();

          if (addressInfo.includes(searchTerm)) {
            matchedResults.push({
              province: province.name,
              district: district.name,
              ward: ward.name,
            });
          }
        });
      });
    });

    searchResults.value = matchedResults.slice(0, 5);
  } else {
    searchResults.value = [];
  }

  iShow.value = false;
};

const toggleButton = ref(false);

const iShow = ref(true);

const onSelectedAddress = (address) => {
  searchQuery.value = `${address.ward}, ${address.district}, ${address.province}`;

  searchResults.value = [];

  toggleButton.value = true;

  iShow.value = true;
};

const onDeleteSearching = () => {
  searchQuery.value = "";

  searchResults.value = [];

  toggleButton.value = false;

  iShow.value = true;
};

const listAddress = ref([]);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20"
  >
    <div class="modal-container w-4/12 h-2/5 bg-white shadow-2xl">
      <div class="flex h-auto items-center justify-between p-4 border-b">
        <div>Địa chỉ nhận hàng</div>

        <div @click="closeModalAddress" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      </div>

      <div class="w-full flex justify-between p-4 whitespace-nowrap">
        <div class="w-full h-11">
          <div class="flex items-center">
            <input
              type="text"
              class="w-11/12 p-3 text-sm border border-gray-400 transition duration-200 ease-in-out focus:outline-none focus:border-gray-900 focus:shadow"
              placeholder="Tìm Thành Phố, Quận/Huyện"
              v-model="searchQuery"
              @input="searchAddress"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-xbox-x text-white translate-x-[-25px] cursor-pointer"
              v-if="searchQuery"
              @click="onDeleteSearching"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"
              />
              <path d="M9 8l6 8" />
              <path d="M15 8l-6 8" />
            </svg>
          </div>

          <div
            class="w-11/12 h-24 border rounded-sm mt-1 shadow overflow-auto"
            v-if="searchResults.length > 0"
          >
            <div
              class="text-sm p-3 hover:bg-gray-100 flex flex-wrap gap-2 text-gray-500 cursor-pointer"
              v-for="address in searchResults"
              :key="address.id"
              @click="onSelectedAddress(address)"
            >
              <span class="text-black"> {{ address.ward }} </span>

              <span> {{ address.district }} </span>

              <span> {{ address.province }}</span>
            </div>
          </div>
        </div>

        <div>
          <button
            :class="[
              'h-11 bg-orange-600 py-3 px-4 rounded-sm text-white text-sm',
              toggleButton
                ? 'cursor-pointer hover:opacity-95	'
                : 'cursor-not-allowed opacity-50',
            ]"
          >
            Sử Dụng
          </button>
        </div>
      </div>

      <div
        class="w-full px-4 py-3 text-sm font-thin text-gray-800"
        v-if="iShow"
      >
        Địa chỉ của tôi
      </div>

      <div
        class="w-full px-4 text-sm font-thin text-gray-800 flex gap-1"
        v-if="iShow"
      >
        <div class="text-blue-600 cursor-pointer">Đăng Nhập</div>

        <div>chọn địa chỉ nhận hàng</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
