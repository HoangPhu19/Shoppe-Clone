<script setup>
import { ref, onMounted } from "vue";

import { ProductsTopSell } from "../../../assets/data";

const curentSplide = ref(0);

const nextSplide = () => {
  curentSplide.value = curentSplide.value + 6;
  if (curentSplide.value >= ProductsTopSell.length) {
    curentSplide.value = 0;
  }
};

const prevSplide = () => {
  curentSplide.value = curentSplide.value - 6;
  if (curentSplide.value < 0) {
    curentSplide.value = curentSplide.value + 18;
  }
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleArray(ProductsTopSell);

onMounted(() => {
  shuffleArray(ProductsTopSell);
});
</script>

<template>
  <div class="WP-TSProducts">
    <div class="header-TSProducts">
      <div class="header-TSProducts__left">TÌM KIẾM HÀNG ĐẦU</div>

      <div class="header-TSProducts__right">
        <div class="TSProducts-right__text">Xem Tất Cả</div>

        <div class="TSProducts-right__svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            width="20"
            height="20"
            viewBox="0 0 20 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="content-TSProducts">
      <div
        v-for="TSproduct in ProductsTopSell.slice(
          curentSplide,
          curentSplide + 6
        )"
        :key="TSproduct.id"
        class="bg-splide__products"
      >
        <div class="bg-img__products">
          <img :src="TSproduct.UrlImg" />

          <div class="price-products">
            <span>{{ TSproduct.price }}</span>
          </div>

          <div class="logo-products"></div>
        </div>

        <div class="title-splide__products">{{ TSproduct.title }}</div>
      </div>

      <button class="splide-arrows splide-arrow__prev" @click="prevSplide">
        <svg
          enable-background="new 0 0 13 20"
          viewBox="0 0 13 20"
          x="0"
          y="0"
          class="shopee-svg-icon icon-arrow-left-bold"
        >
          <polygon
            points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"
          ></polygon>
        </svg>
      </button>

      <button class="splide-arrows splide-arrow__next" @click="nextSplide">
        <svg
          enable-background="new 0 0 13 21"
          viewBox="0 0 13 21"
          x="0"
          y="0"
          class="shopee-svg-icon icon-arrow-right-bold"
        >
          <polygon
            points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"
          ></polygon>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.WP-TSProducts {
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
}

.header-TSProducts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 3.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ee4d2d;
}

.header-TSProducts__right {
  display: flex;
  align-items: center;
}

.header-TSProducts__right:hover {
  cursor: pointer;
}

.content-TSProducts {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.content-TSProducts:hover {
  cursor: pointer;
}

.bg-splide__products {
  width: 200px;
  padding: 1.25rem 0.625rem;
  margin-bottom: 20px;
}

.bg-img__products {
  width: 100%;
  height: 100%;
  position: relative;
}

.bg-img__products img {
  width: 100%;
  height: 100%;
}

.price-products {
  background-color: rgba(0, 0, 0, 0.26);
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1.5625rem;
  line-height: 1.5625rem;
  font-weight: 500;
  text-align: center;
}

.logo-products {
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/06720e49514cbd94b7552496b4de454a.png);
  width: 1.5rem;
  height: 1.875rem;
  background-repeat: no-repeat;
  background-size: 1.5rem 1.875rem;
  position: absolute;
  top: 0;
  left: 0;
}

.title-splide__products {
  width: 100%;
  margin-top: 1.25rem;
  color: #555;
  font-size: 1.125rem;
  text-align: left;
  text-transform: capitalize;
  word-break: break-word;
  line-height: 1.5625rem;
  font-weight: 500;
  height: 1.5625rem;
}

.splide-arrows {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: scale(1);
  -webkit-transform-origin: 50% 50%;
  -webkit-transition: 0.3s;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: 0.3s;
  transform-box: fill-box;
  position: absolute;
  cursor: pointer;
}

.splide-arrow__prev {
  top: 50%;
  left: -12px;
}
.splide-arrow__next {
  top: 50%;
  right: -12px;
}
.content-TSProducts:hover .splide-arrow__prev {
  -webkit-transform: scale(2);
  -webkit-transform-origin: 50% 50%;
  -webkit-transition: 0.3s;
  transform: scale(1.5);
  transform-origin: 50% 50%;
  transition: 0.2s;
}
.content-TSProducts:hover .splide-arrow__next {
  -webkit-transform: scale(2);
  -webkit-transform-origin: 50% 50%;
  -webkit-transition: 0.3s;
  transform: scale(1.5);
  transform-origin: 50% 50%;
  transition: 0.2s;
}

.splide-arrows svg {
  height: 0.625rem;
  width: 0.625rem;
  fill: currentColor;
}
</style>
