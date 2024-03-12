<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    category.value = response.data;

    createCombinedArray();
  } catch (error) {
    throw error;
  }
});

const category = ref([]);
const categoryImage = ref([
  "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
  "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
  "https://i.pinimg.com/736x/d5/be/dc/d5bedc2548b3973fccb8c7c11aa960e5.jpg",
  "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
  "https://media.istockphoto.com/id/467970412/vi/vec-to/groceries.jpg?s=1024x1024&w=is&k=20&c=wSBDfdIi6q6FpMyzgWmWbYR9mBgvzmPH_Z0erbTynng=",
  "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
  "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0_tn",
  "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25664472/2023/10/28/ec86af36-d85e-49e2-980b-c7591041a9c11698463541313Texturedjerseytop1.jpg",
  "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
  "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn",
  "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
  "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
  "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
  "https://dwatchluxury.com/wp-content/uploads/2023/11/Top-10-Famous-Womens-Watch-Brands-2.jpg",
  "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
  "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
  "https://kinhmateyeplus.com/wp-content/uploads/2023/11/8102.png",
  "https://www.hdcarwallpapers.com/walls/toyota_gr_supra_jarama_racetrack_edition_2021_4k_3-HD.jpg",
  "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
  "https://images.squarespace-cdn.com/content/v1/56ae4c848a65e218a8c26b6c/1508795027271-S6NMTOUUDT3BONBAHAE2/Metropolis_hanging_JanGarncarekDesign_1.jpg?format=750w",
]);

const categoryProducts = ref([]);

function createCombinedArray() {
  const newArray = [];

  for (let i = 0; i < category.value.length; i++) {
    const newItem = {
      item: category.value[i],
      imageUrl: categoryImage.value[i],
    };
    newArray.push(newItem);
  }
  categoryProducts.value = newArray;
}

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
  console.log(slidePosition.value);
};
const prevSlides = () => {
  slidePosition.value = slidePosition.value - 1;
  changeSlides();
  console.log(slidePosition.value);
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
              v-for="item in categoryProducts.slice(0, 10)"
            >
              <div class="image__products">
                <img :src="item.imageUrl" />
              </div>

              <div class="title__products">{{ item.item }}</div>
            </div>
          </div>

          <div class="wp-products">
            <div
              class="bg-products"
              v-for="item in categoryProducts.slice(10, 20)"
            >
              <div class="image__products">
                <img :src="item.imageUrl" />
              </div>

              <div class="title__products">{{ item.item }}</div>
            </div>
          </div>
        </div>

        <!-- <div class="slide-2">
          <div class="wp-products__2">
            <div
              class="bg-products__2"
              v-for="item in ProductCategories.slice(10, 14)"
              :key="item.id"
            >
              <div class="image__products">
                <img :src="item.productImgUrl" />
              </div>

              <div class="title__products">{{ item.title }}</div>
            </div>
          </div>

          <div class="wp-products__2">
            <div
              class="bg-products__2"
              v-for="item in ProductCategories.slice(24, 28)"
              :key="item.id"
            >
              <div class="image__products">
                <img :src="item.productImgUrl" />
              </div>

              <div class="title__products">{{ item.title }}</div>
            </div>
          </div>
        </div> -->
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
.slide-2 {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.wp-products {
  display: flex;
  width: 100%;
  height: 100%;
}

.wp-products__2 {
  display: flex;
  width: 40%;
}
.bg-products {
  width: 180px;
  height: 150px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.bg-products__2 {
  width: 180px;
  height: 150px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.bg-products:hover {
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  border-right: 1px solid rgba(0, 0, 0, 0.18);
}

.bg-products__2:hover {
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

.image__products img {
  height: 80px;
}

.title__products {
  margin-top: 10px;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.8);
  height: 2.5rem;
  line-height: 1.25rem;
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
