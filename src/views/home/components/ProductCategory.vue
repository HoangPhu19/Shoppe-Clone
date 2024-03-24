<script setup>
import { ref, onMounted } from "vue";
import { ProductCategories } from "../../../assets/data";
import axios from "axios";

const slidePosition = ref(0);

const changeSlides = () => {
  if (slidePosition.value > 1) {
    slidePosition.value = 1;
  } else if (slidePosition.value < 0) {
    slidePosition.value = 0;
  }
};

const nextSlides = () => {
  slidePosition.value = slidePosition.value + 1;
  changeSlides();
};
const prevSlides = () => {
  slidePosition.value = slidePosition.value - 1;
  changeSlides();
};
</script>

<template>
  <div class="bg-catalogueProduct">
    <div class="header-catalogueProduct">
      <div class="text-header__CTLProduct">DANH MỤC</div>
    </div>

    <div class="content-CTLProduct">
      <div
        class="slider"
        :style="{ transform: `translateX(${-(slidePosition * 480)}px)` }"
      >
        <div class="slide-1">
          <div class="wp-products">
            <div
              class="bg-products"
              v-for="item in ProductCategories.slice(0, 10)"
              :key="item.id"
            >
              <router-link
                :to="{
                  name: 'Category',
                  params: { name: item.title },
                }"
              >
                <div
                  class="w-full flex flex-col justify-center items-center h-full gap-3"
                >
                  <div class="image__products">
                    <img :src="item.productImgUrl" />
                  </div>

                  <div class="title__products">{{ item.title }}</div>
                </div>
              </router-link>
            </div>
          </div>

          <div class="wp-products">
            <div
              class="bg-products"
              v-for="item in ProductCategories.slice(10, 20)"
              :key="item.id"
            >
              <router-link
                :to="{
                  name: 'Category',
                  params: { name: item.title },
                }"
              >
                <div
                  class="w-full flex flex-col justify-center items-center h-full gap-3"
                >
                  <div class="image__products">
                    <img :src="item.productImgUrl" />
                  </div>

                  <div class="title__products">{{ item.title }}</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide__arrows">
      <Transition name="fade" mode="out-in">
        <button
          class="slide__arrow slide__arrow--prev"
          @click="prevSlides"
          v-show="slidePosition !== 0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </button>
      </Transition>

      <Transition name="fade" mode="out-in">
        <button
          class="slide__arrow slide__arrow--next"
          @click="nextSlides"
          v-show="slidePosition !== 1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.bg-catalogueProduct {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1200px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  position: relative;
}

.bg-catalogueProduct .header-catalogueProduct {
  background-color: #fff;
  height: 3.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0 1.25rem;
}

.header-catalogueProduct .text-header__CTLProduct {
  font-size: 1rem;
  color: gray;
  font-weight: 500;
  padding-top: 22px;
}

.content-CTLProduct {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider {
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(0);
  transition: all 0.5s ease-in-out;
  margin: 0;
  padding: 0;
}

.slide-1 {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.wp-products {
  display: flex;
  width: 100%;
  height: 100%;
}

.bg-products {
  width: 180px;
  height: 150px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.bg-products:hover {
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  border-right: 1px solid rgba(0, 0, 0, 0.18);
}

.image__products {
  width: 65px;
  height: 65px;
  background-color: #f4f4f4;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title__products {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.8);
}

.slide__arrow {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: 0.3s;
  transform-box: fill-box;
  position: absolute;
}

.slide__arrow--prev {
  left: -12px;
  top: 55%;
}

.bg-catalogueProduct:hover .slide__arrow--prev {
  transform: scale(1.5);
  transform-origin: 50% 50%;
  transition: 0.2s;
  cursor: pointer;
}
.slide__arrow--next {
  right: -12px;
  top: 55%;
}

.bg-catalogueProduct:hover .slide__arrow--next {
  transform: scale(1.5);
  transform-origin: 50% 50%;
  transition: 0.2s;
  cursor: pointer;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
