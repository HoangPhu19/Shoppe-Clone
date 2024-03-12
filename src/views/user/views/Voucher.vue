<script setup></script>

<template>
  <div class="w-5/6 bg-white shadow-sm">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4">
      <div class="text-xl">Kho Voucher</div>

      <div class="flex items-center gap-2 text-sm">
        <div class="text-orange-600">Tìm thêm voucher</div>

        <div class="text-orange-600 border-gray-300 border-l border-r px-2">
          xem lịch sử voucher
        </div>

        <div class="text-gray-500">Tìm hiểu</div>
      </div>
    </div>
    <!-- Input Voucher -->
    <div class="bg-gray-100 py-8 mx-6 flex justify-center items-center gap-3">
      <div>Mã Voucher</div>

      <input
        type="text"
        class="outline-none border h-10 w-96 p-4 text-sm"
        placeholder="Nhập mã voucher tại đây"
      />

      <div
        class="h-10 w-24 text-white text-sm rounded-sm flex justify-center items-center bg-gray-300"
      >
        Lưu
      </div>
    </div>
  </div>
</template>

<style scoped></style>
