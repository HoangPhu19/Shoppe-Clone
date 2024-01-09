<script setup>
const props = defineProps({
  data: {
    type: Object,
    require: true,
    default: () => {},
  },
});
</script>

<template>
  <router-link
    :to="{
      name: 'ProductDetails',
      query: {
        id: data.id,
        title: data.title,
        category: data.category,
        brand: data.brand,
        description: data.description,
        images: data.images,
        thumbnail: data.thumbnail,
        rating: data.rating,
        price: data.price,
        sale: data.discountPercentage,
        saleShop: data.discountCode,
        stock: data.stock,
      },
    }"
  >
    <div class="group relative">
      <div
        class="bg-white w-[190px] h-[294px] group-hover:border group-hover:border-orange-600"
      >
        <img :src="data.thumbnail" class="w-full h-[60%] object-fit" />

        <div class="h-auto p-[10px] text-sm">
          <div
            class="line-clamp-2 overflow-hidden line-height-1.25 text-gray-800"
          >
            {{ data.title }}
            {{ data.description }}
          </div>

          <div class="text-red-600 mt-[20%] flex items-center justify-center">
            <div>{{ data.price }}</div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-currency-dollar"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                />
                <path d="M12 3v3m0 12v3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-[-30 px] z-10 w-full text-center bg-[#ee4d2d] text-sm text-[white] p-[5px] transition-opacity duration-200 rounded-[1px] opacity-0 group-hover:opacity-100"
      >
        Tìm sản phẩm tương tự
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
