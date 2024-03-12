<script setup>
import { onMounted, ref, reactive, computed, watchEffect } from "vue";
import Dialog from "primevue/dialog";

onMounted(() => {
  fetch(
    "https://raw.githubusercontent.com/daohoangson/dvhcvn/master/data/dvhcvn.json"
  )
    .then((res) => res.json())
    .then((data) => {
      addressData.provinces = data.data;
    });
});

const ishowPopUp = ref(false);

const ishowAdress = ref(false);

const onHandleClickPopUp = (event) => {
  if (!event.target.closest(".popup-address")) {
    ishowAdress.value = false;
  }
};

const addressData = reactive({
  currentState: "Provinces",
  provinces: [],
  districts: [],
  wards: [],
  selectedProvince: "",
  selectedDistrict: "",
  selectedWard: "",
});

const selectProvince = (province) => {
  addressData.districts = province.level2s;
  addressData.selectedProvince = province.name;
  addressData.currentState = "Districts";
  addressData.selectedDistrict = "";
  addressData.selectedWard = "";
};

const selectDistrict = (district) => {
  addressData.wards = district.level3s;
  addressData.selectedDistrict = district.name;
  addressData.currentState = "Wards";
};

const selectWard = (ward) => {
  addressData.selectedWard = ward.name;
  ishowAdress.value = false;
  addressData.currentState = "Provinces";
};

const searchQuery = ref("");

function getAddressUser() {
  let address = "";
  if (addressData.selectedProvince) {
    address += addressData.selectedProvince;
  }
  if (addressData.selectedDistrict) {
    address += `, ${addressData.selectedDistrict}`;
  }
  if (addressData.selectedWard) {
    address += `, ${addressData.selectedWard}`;
  }
  return address;
}

watchEffect(() => {
  const address = getAddressUser();
  searchQuery.value = address;
});

const deleteAddress = () => {
  addressData.selectedProvince = "";
  addressData.selectedDistrict = "";
  addressData.selectedWard = "";
  searchQuery.value = "";
  addressData.currentState = "Provinces";
};

//  Toggle CSS Button
const iStyleButtonHome = ref(false);
const iStyleButtonOffice = ref(false);

const toggleButtonHome = () => {
  if (!iStyleButtonHome.value) {
    iStyleButtonHome.value = true;
    iStyleButtonOffice.value = false;
  } else {
    iStyleButtonHome.value = false;
  }
};

const toggleButtonOffice = () => {
  if (!iStyleButtonOffice.value) {
    iStyleButtonOffice.value = true;
    iStyleButtonHome.value = false;
  } else {
    iStyleButtonOffice.value = false;
  }
};
</script>

<template>
  <!-- Header -->
  <div class="h-1/6 flex items-center justify-between px-6 border-b">
    <div class="text-xl">Địa chỉ của tôi</div>

    <div
      class="flex items-center gap-1 text-white bg-orange-600 px-4 py-2 rounded-sm text-sm hover:opacity-90 cursor-pointer"
      @click="ishowPopUp = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-plus"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>

      <div>Thêm địa chỉ mới</div>
    </div>
  </div>
  <!-- Body -->
  <div class="h-5/6 flex flex-col justify-center items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-map-pin-question text-gray-500"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path
        d="M14.997 19.317l-1.583 1.583a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.657 -5.584"
      />
      <path d="M19 22v.01" />
      <path
        d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
      />
    </svg>

    <span class="text-gray-500">Bạn chưa có địa chỉ.</span>
  </div>
  <!-- PopUpAddress -->
  <Dialog
    v-model:visible="ishowPopUp"
    modal
    header="Header"
    :style="{ width: '35rem' }"
    @click="onHandleClickPopUp"
  >
    <!-- Header -->
    <template #header>
      <div class="text-xl text-gray-800">Địa chỉ mới</div>
    </template>
    <!-- Name and Number -->
    <div class="flex items-center gap-4 text-sm">
      <input
        class="outline-none border w-1/2 h-10 rounded-sm px-2 placeholder:text-[#bbbbbb] focus:border-black focus:shadow-md"
        type="text"
        placeholder="Họ và tên"
      />

      <input
        class="outline-none border w-1/2 h-10 rounded-sm px-2 placeholder:text-[#bbbbbb] focus:border-black focus:shadow-md"
        type="text"
        placeholder="Số điện thoại"
      />
    </div>
    <!-- Choose Provinces,District,Ward -->
    <div class="popup-address">
      <div
        class="flex items-center justify-between w-full relative mt-6 group"
        @click="ishowAdress = true"
      >
        <input
          class="text-sm outline-none border w-full h-10 rounded-sm pl-2 pr-12 placeholder:text-[#bbbbbb] focus:border-black focus:shadow-md"
          type="text"
          placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã"
          v-model="searchQuery"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-caret-down-filled text-[#bbbbbb] absolute right-2"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-square-x absolute right-6 cursor-pointer"
          v-if="ishowAdress === true"
          @click="deleteAddress"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"
          />
          <path d="M9 9l6 6m0 -6l-6 6" />
        </svg>
      </div>
      <!-- Popup to choose address -->
      <div class="w-full border mt-2" v-if="ishowAdress">
        <!-- Header -->
        <div class="flex items-center border-b text-sm font-medium">
          <div
            :class="[
              'w-2/6',
              'py-4',
              'text-center',
              'cursor-pointer',
              addressData.currentState === 'Provinces'
                ? 'border-b-2 border-orange-600 text-orange-600'
                : '',
            ]"
            @click="
              addressData.selectedProvince
                ? (addressData.currentState = 'Provinces')
                : null
            "
          >
            Tỉnh/Thành Phố
          </div>

          <div
            :class="[
              'w-2/6',
              'py-4',
              'text-center',

              !addressData.selectedProvince
                ? 'cursor-not-allowed'
                : 'cursor-pointer',
              addressData.currentState === 'Districts'
                ? 'border-b-2 border-orange-600 text-orange-600 '
                : '',
            ]"
            @click="
              addressData.selectedProvince
                ? (addressData.currentState = 'Districts')
                : null
            "
          >
            Quận/Huyện
          </div>

          <div
            :class="[
              'w-2/6',
              'py-4',
              'text-center',
              !addressData.selectedDistrict
                ? 'cursor-not-allowed'
                : 'cursor-pointer',
              addressData.currentState === 'Wards'
                ? 'border-b-2 border-orange-600 text-orange-600'
                : '',
            ]"
            @click="
              addressData.selectedDistrict
                ? (addressData.currentState = 'Wards')
                : null
            "
          >
            Phường/Xã
          </div>
        </div>
        <!-- Body -->
        <div class="w-full h-56 overflow-auto">
          <!-- Provinces -->
          <div
            :class="[
              'hover:bg-gray-100 p-2 cursor-pointer',
              province.name === addressData.selectedProvince
                ? 'text-orange-600'
                : '',
            ]"
            v-for="province in addressData.provinces"
            @click="selectProvince(province)"
            v-show="addressData.currentState === 'Provinces'"
          >
            {{ province.name }}
          </div>
          <!-- Districts -->
          <div
            :class="[
              'hover:bg-gray-100 p-2 cursor-pointer',
              district.name === addressData.selectedDistrict
                ? 'text-orange-600'
                : '',
            ]"
            v-for="district in addressData.districts"
            @click="selectDistrict(district)"
            v-show="addressData.currentState === 'Districts'"
          >
            {{ district.name }}
          </div>
          <!-- Wards -->
          <div
            :class="[
              'hover:bg-gray-100 p-2 cursor-pointer',
              ward.name === addressData.selectedWard ? 'text-orange-600' : '',
            ]"
            v-for="ward in addressData.wards"
            @click="selectWard(ward)"
            v-show="addressData.currentState === 'Wards'"
          >
            {{ ward.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- Address Type -->
    <div class="text-sm text-gray-500 mt-2">Loại địa chỉ:</div>
    <div class="flex items-center gap-2 mt-2 text-sm text-gray-600">
      <button
        :class="[
          'p-2 border',
          iStyleButtonHome ? 'border-orange-600 text-orange-600' : '',
        ]"
        @click="toggleButtonHome"
      >
        Nhà Riêng
      </button>

      <button
        :class="[
          'p-2 border',
          iStyleButtonOffice ? 'border-orange-600 text-orange-600' : '',
        ]"
        @click="toggleButtonOffice"
      >
        Văn Phòng
      </button>
    </div>
    <template #footer>
      <button
        class="text-sm text-white px-8 py-2 bg-orange-600 rounded-sm hover:opacity-90"
      >
        Hoàn Thành
      </button>
    </template>
  </Dialog>
</template>

<style scoped lang="scss"></style>
