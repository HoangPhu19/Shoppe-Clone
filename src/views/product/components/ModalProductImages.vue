<script setup>
import { ref } from "vue";

const props = defineProps({
  currentModalImg: String,
  images: Array,
  currentIndexImage: Number,
});

const onToggleBorder = ref(props.currentModalImg);

const selectedModalImg = ref(props.currentModalImg);

const imageProduct = ref(props.images);

const currentIndex = ref(props.currentIndexImage);

const onSelectModalImg = (image) => {
  selectedModalImg.value = image;
  currentIndex.value = imageProduct.value.indexOf(image);
  onToggleBorder.value = image;
};

const nextModalImg = () => {
  currentIndex.value = currentIndex.value + 1;
  if (currentIndex.value > imageProduct.value.length - 1) {
    currentIndex.value = 0;
  }
  selectedModalImg.value = imageProduct.value[currentIndex.value];
  onToggleBorder.value = selectedModalImg.value;
};

const prevModalImg = () => {
  currentIndex.value =
    (currentIndex.value + (imageProduct.value.length - 1)) %
    imageProduct.value.length;
  selectedModalImg.value = imageProduct.value[currentIndex.value];
  onToggleBorder.value = selectedModalImg.value;
};

const handleOutsideClick = (event) => {
  if (!event.target.closest(".modal-container")) {
    onCloseModal();
  }
};

const emits = defineEmits(["closeModal"]);

const onCloseModal = () => {
  emits("closeModal");
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20"
    @click="handleOutsideClick"
  >
    <div class="modal-container w-7/12 h-4/5 bg-white rounded shadow-2xl">
      <div class="flex w-full h-full">
        <div class="w-3/5 m-4 relative">
          <img class="h-full px-12" :src="selectedModalImg" />

          <div
            class="flex justify-center items-center w-10 h-20 bg-gray-500 absolute right-0 top-[40%] cursor-pointer"
            @click="nextModalImg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </div>

          <div
            class="flex justify-center items-center w-10 h-20 bg-gray-500 absolute left-0 top-[40%] cursor-pointer"
            @click="prevModalImg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-left"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </div>
        </div>

        <div class="w-2/5">
          <div class="pt-10 pl-4 line-clamp-2 overflow-hidden text-[17px]">
            {{ $route.query.description }}
          </div>

          <div class="w-full">
            <div class="grid grid-cols-3 gap-2 px-4 py-4">
              <div
                class="w-[90px] h-[90px] cursor-pointer"
                v-for="img in $route.query.images"
                @click="onSelectModalImg(img)"
              >
                <img
                  class="w-full h-full object-fit px-2 hover:opacity-75"
                  :src="img"
                  :class="{
                    'border-2 border-orange-600': onToggleBorder === img,
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
