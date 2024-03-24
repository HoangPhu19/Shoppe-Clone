<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { StoreApp } from "../cart/services/store";

import { ProductReviewSold } from "../../assets/data";
import ModalProductImages from "./components/ModalProductImages.vue";
import ModalAddress from "./components/ModalAddress.vue";
import { isLogin } from "../../services/utils/localStorage";

const router = useRouter();
const toast = useToast();
const STORE_APP = StoreApp();

const selectedImg = ref(router.currentRoute.value.query.thumbnail);

const onToggleBorder = ref(selectedImg.value);

const indexSelectImg = ref(0);

const onSelectImg = (image) => {
  selectedImg.value = image;
  onToggleBorder.value = image;

  indexSelectImg.value = router.currentRoute.value.query.images.indexOf(image);
};

const onShowStar1 = ref(false);
const onShowStar2 = ref(false);
const onShowStar3 = ref(false);
const onShowStar4 = ref(false);
const onShowStar5 = ref(false);

const rating = parseFloat(router.currentRoute.value.query.rating);
if (rating >= 1 || rating < 1.5) {
  onShowStar1.value = true;
} else {
  onShowStar1.value = false;
}

if (rating >= 1.5 || rating < 2.5) {
  onShowStar2.value = true;
} else {
  onShowStar2.value = false;
}

if (rating >= 2.5 || rating < 3.5) {
  onShowStar3.value = true;
} else {
  onShowStar3.value = false;
}

if (rating >= 3.5 || rating < 4.5) {
  onShowStar4.value = true;
} else {
  onShowStar4.value = false;
}

if (rating >= 4.5 || rating === 5) {
  onShowStar5.value = true;
} else {
  onShowStar5.value = false;
}

const onShuflleData = () => {
  ProductReviewSold.sort(() => Math.random() - 0.5);
};

const priceProduct = ref(router.currentRoute.value.query.price);

const saleForProduct = ref(router.currentRoute.value.query.sale);

saleForProduct.value = Math.round(saleForProduct.value);

const discounted = ref(0);

discounted.value = Math.round(
  priceProduct.value - (priceProduct.value * saleForProduct.value) / 100
);

const openModalProduct = ref(false);

const openModalAddress = ref(false);

const onOpenModal = (modalName) => {
  if (modalName === "product") {
    openModalProduct.value = true;
  } else if (modalName === "address") {
    openModalAddress.value = true;
  }

  onToggleBody(true);
};

const onHandleCloseModal = () => {
  openModalProduct.value = false;
  openModalAddress.value = false;
  onToggleBody(false);
};

const onToggleBody = (value) => {
  document.body.style.overflow = value ? "hidden" : "auto";
};

const numberOfProducts = ref(1);

const stockProducts = parseInt(router.currentRoute.value.query.stock);

const onAddProducts = () => {
  numberOfProducts.value = parseInt(numberOfProducts.value) + 1;

  if (numberOfProducts.value > stockProducts) {
    numberOfProducts.value = stockProducts;
  }
};

const onReduceProducts = () => {
  numberOfProducts.value = parseInt(numberOfProducts.value) - 1;

  if (numberOfProducts.value < 1) {
    numberOfProducts.value = 1;
  }
};

const onInputChange = () => {
  const inputNumber = parseInt(numberOfProducts.value);

  if (inputNumber > stockProducts) {
    numberOfProducts.value = stockProducts;
  }
};

const notify = () => {
  if (!isLogin.value) {
    router.push({ name: "SignIn" });

    return;
  }

  toast.success("Sản phẩm đã được thêm vào Giỏ Hàng!", {
    timeout: 1000,
  });

  const product = {
    id: router.currentRoute.value.query.id,
    price: discounted.value,
    description: router.currentRoute.value.query.description,
    image: router.currentRoute.value.query.thumbnail,
    quantity: numberOfProducts.value,
    checked: false,
    brand: router.currentRoute.value.query.brand,
    currentPrice: priceProduct.value,
  };
  STORE_APP.actionAddToCart(product);
};

onMounted(() => {
  onShuflleData();
  console.log(router.currentRoute.value.query.id);
});
</script>

<template>
  <div class="w-[1200px] mx-auto mt-5">
    <div class="flex items-center text-[#0055aa] text-sm">
      <router-link to="/">
        <div>Shoppe</div>
      </router-link>

      <div class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right w-[18px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.75"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </div>

      <div class="whitespace-nowrap">{{ $route.query.category }}</div>

      <div class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right w-[18px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.75"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </div>

      <div class="whitespace-nowrap">{{ $route.query.brand }}</div>

      <div class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right w-[18px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.75"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </div>

      <div class="whitespace-nowrap">{{ $route.query.title }}</div>

      <div class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right w-[18px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.75"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </div>

      <div class="text-gray-800">{{ $route.query.description }}</div>
    </div>
  </div>

  <div class="w-[1200px] bg-white mx-auto mt-5">
    <div class="flex p-4 gap-8 h-full w-full">
      <div class="flex flex-col w-2/5">
        <div
          class="w-full h-[500px] bg-gray-50 cursor-pointer"
          @click="onOpenModal('product')"
        >
          <img :src="selectedImg" class="w-full h-full object-fit px-8" />
        </div>

        <div class="flex gap-2 w-full h-24 mt-2">
          <div
            class="w-1/2 cursor-pointer"
            v-for="image in $route.query.images"
            @mouseover="onSelectImg(image)"
            @click="onOpenModal('product')"
          >
            <img
              :src="image"
              class="w-full h-full object-cover px-2"
              :class="{
                'border-2 border-orange-600': onToggleBorder === image,
              }"
            />
          </div>
        </div>
      </div>

      <Teleport to="body">
        <ModalProductImages
          v-if="openModalProduct"
          :currentModalImg="selectedImg"
          :images="$route.query.images"
          :currentIndexImage="indexSelectImg"
          @close-modal="onHandleCloseModal"
        />
      </Teleport>

      <div class="w-3/5">
        <div class="w-full h-auto">
          <div class="line-clamp-2 overflow-hidden text-xl">
            {{ $route.query.description }}
          </div>

          <div class="flex items-center justify-between">
            <div class="flex py-2">
              <div class="flex gap-1 border-r border-gray-300 py-1 pr-4">
                <div class="border-b border-orange-600 text-orange-600">
                  {{ $route.query.rating }}
                </div>

                <div class="flex text-orange-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        onShowStar1 ? 'fill-orange-600' : 'fill-none',
                        'icon',
                        'icon-tabler',
                        'icon-tabler-star',
                      ]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        onShowStar2 ? 'fill-orange-600' : 'fill-none',
                        'icon',
                        'icon-tabler',
                        'icon-tabler-star',
                      ]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        onShowStar3 ? 'fill-orange-600' : 'fill-none',
                        'icon',
                        'icon-tabler',
                        'icon-tabler-star',
                      ]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        onShowStar4 ? 'fill-orange-600' : 'fill-none',
                        'icon',
                        'icon-tabler',
                        'icon-tabler-star',
                      ]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        onShowStar5 ? 'fill-orange-600' : 'fill-none',
                        'icon',
                        'icon-tabler',
                        'icon-tabler-star',
                      ]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                class="flex items-center gap-1 border-r border-gray-300 py-1 px-4"
              >
                <div class="border-b border-black">
                  {{ $route.query.review }}
                </div>
                <div class="text-gray-500 text-sm">Đánh Giá</div>
              </div>

              <div class="flex gap-1 py-1 pl-4 items-center">
                <div>{{ $route.query.sold }}</div>
                <div class="text-gray-500 text-sm">Đã Bán</div>
              </div>
            </div>

            <div class="py-1 text-sm text-gray-500">Tố cáo</div>
          </div>
        </div>

        <div class="w-full h-auto bg-gray-100">
          <div class="flex w-full h-auto items-center pl-5 py-4 gap-4">
            <div class="text-gray-400 line-through flex items-center">
              <div>
                {{ $route.query.price }}
              </div>

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

            <div class="text-orange-600 flex">
              <div class="text-3xl">{{ discounted }}</div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-dollar"
                  width="24"
                  height="24"
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

            <div
              class="bg-orange-600 text-xs text-white font-bold rounded-sm flex justify-center items-center px-1"
            >
              {{ saleForProduct }}% GIẢM
            </div>
          </div>
        </div>

        <div
          class="w-auto h-auto mt-6 ml-5 text-sm"
          v-if="$route.query.saleShop"
        >
          <div class="flex gap-3 items-center">
            <div class="text-gray-600 w-24">Mã Giảm Giá Của Shop</div>

            <div class="bg-red-100 px-1 text-orange-600 flex rounded">
              <div>Giảm {{ $route.query.saleShop }}</div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-cent"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a6 6 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4 -1.536"
                  />
                  <path d="M12 20v-2" />
                  <path d="M12 6v-2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="w-auto h-auto mt-6 text-sm text-gray-600 pb-8 border-b">
          <div class="flex gap-8 pl-5">
            <div class="w-24">Vận Chuyển</div>

            <div>
              <div class="flex gap-2">
                <div class="w-6 h-6">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                  />
                </div>

                <div class="text-black">Miễn phí vận chuyển</div>
              </div>

              <div class="flex gap-2">
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-truck"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path
                      d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"
                    />
                  </svg>
                </div>

                <div class="text-gray-600">
                  <div class="py-1 flex items-center gap-4">
                    <div>Vận Chuyển Tới</div>

                    <div
                      class="flex items-center gap-1 cursor-pointer"
                      @click="onOpenModal('address')"
                    >
                      <div class="text-black">Thành Phố Hà Nội</div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-down"
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
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      </div>
                      <Teleport to="body">
                        <ModalAddress
                          v-if="openModalAddress"
                          @close-modal="onHandleCloseModal"
                        />
                      </Teleport>
                    </div>
                  </div>

                  <div class="py-1">Phí Vận Chuyển</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-8 mt-4 items-center text-gray-600 pl-5">
            <div class="w-24">Số Lượng</div>

            <div class="flex border text-lg">
              <div
                class="border-r px-4 cursor-pointer"
                @click="onReduceProducts"
              >
                -
              </div>

              <input
                type="text"
                class="w-16 border-r text-center text-black"
                v-model="numberOfProducts"
                @input="onInputChange"
              />

              <div class="px-4 cursor-pointer" @click="onAddProducts">+</div>
            </div>

            <div>{{ $route.query.stock }} sản phẩm có sẵn</div>
          </div>

          <div class="flex mt-8 gap-4 pl-5">
            <div
              class="flex items-center text-orange-600 gap-2 p-3 bg-red-50 border border-orange-600 rounded-sm hover:bg-white cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-cart-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M12.5 17h-6.5v-14h-2" />
                  <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                </svg>
              </div>

              <div @click="notify">Thêm Vào Giỏ Hàng</div>
            </div>

            <div
              class="flex items-center text-white gap-2 py-3 px-14 bg-orange-600 border border-orange-600 rounded-sm hover:opacity-90 cursor-pointer"
            >
              Mua Ngay
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
