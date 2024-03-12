<script setup>
import { computed } from "vue";

import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import { order } from "../../../services/utils/localStorage";

const reversedOrder = computed(() => [...order.value].reverse());

const transportationFee = 10;
</script>

<template>
  <!-- Wrapper -->
  <div class="flex flex-col gap-3 w-5/6">
    <!-- Paginations -->
    <div class="bg-white flex items-center rounded-sm hover:cursor-pointer">
      <div
        class="w-2/6 text-center py-3 hover:border-b-2 hover:border-orange-600"
      >
        <span class="hover:text-orange-600">Tất cả</span>
      </div>

      <div
        class="w-2/6 text-center py-3 hover:border-b-2 hover:border-orange-600"
      >
        <span class="hover:text-orange-600">Hoàn Thành</span>
      </div>

      <div
        class="w-2/6 text-center py-3 hover:border-b-2 hover:border-orange-600"
      >
        <span class="hover:text-orange-600">Đã Hủy</span>
      </div>
    </div>
    <!-- Search -->
    <input
      type="text"
      class="w-full bg-neutral-200 outline-none py-3 px-6 rounded-sm text-sm"
      placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
    />
    <!-- Orderd Products -->
    <div class="bg-white" v-for="product in reversedOrder">
      <!-- Header -->
      <div class="flex items-center justify-between mx-4 pt-6 pb-3 border-b">
        <!-- Header left -->
        <div class="text-xs flex items-center gap-2">
          <span class="text-white font-bold rounded-sm bg-orange-600 px-1"
            >Yêu thích</span
          >

          <span class="font-bold">{{ product.brand }}</span>

          <span
            class="py-1 px-3 rounded-sm bg-orange-600 text-white font-medium"
            >Chat</span
          >

          <span class="py-1 px-3 border text-gray-600">Xem Shop</span>
        </div>
        <!-- Header right -->
        <div class="text-orange-600 text-sm">HOÀN THÀNH</div>
      </div>
      <!-- Body -->
      <div
        class="px-4 py-2 border-b border-dotted flex items-center justify-between"
      >
        <!-- Body left -->
        <div class="flex gap-2 w-5/6">
          <img :src="product.image" class="w-20 h-20" />

          <div>
            <div>{{ product.description }}</div>

            <div class="text-sm">x{{ product.quantity }}</div>
          </div>
        </div>

        <!-- Body right -->
        <div>
          <span class="text-gray-300 text-sm line-through"
            >{{ product.currentPrice * product.quantity }} dollars</span
          >

          <span class="text-orange-600 text-sm ml-1"
            >{{ product.price * product.quantity }} dollars</span
          >
        </div>
      </div>

      <!-- Fotter -->
      <div class="px-4 bg-[#fffefb] border-b">
        <!-- Header -->
        <div class="text-end py-6 w-full">
          <span class="">Thành tiền:</span>

          <span class="ml-4 text-orange-600 text-xl"
            >{{
              product.price * product.quantity + transportationFee
            }}
            dollars</span
          >
        </div>
        <!-- Body -->
        <div class="flex justify-end gap-2 pb-5">
          <div
            class="bg-orange-600 text-white text-sm rounded-sm py-2 px-12 cursor-pointer hover:bg-orange-700"
          >
            Mua Lại
          </div>

          <div
            class="text-sm text-gray-500 border rounded-sm py-2 px-4 cursor-pointer hover:bg-gray-100"
          >
            Liên Hệ Người Bán
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
