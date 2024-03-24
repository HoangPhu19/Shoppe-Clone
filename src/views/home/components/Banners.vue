<script setup>
import { ref, onMounted } from "vue";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/skyblue";

const bannerImages = ref([
  {
    id: 1,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-84b6dbb942b411b06e260b2534a52ab1_xxhdpi",
  },
  {
    id: 2,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-65184875156ad061d40cd97e5dd9707f_xxhdpi",
  },
  {
    id: 3,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-c01ffe7818db36dd90e0c8ed0ec2baa1_xxhdpi",
  },
  {
    id: 4,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-47088f8c275271ceb5d0e1a430a0f262_xxhdpi",
  },
  {
    id: 5,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-ecb189f4f502876533ee86a0af67281f_xxhdpi",
  },
  {
    id: 6,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-ed9104cb971e205afcdd0bf1cf5479c1_xxhdpi",
  },
  {
    id: 7,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-8c21dfee7be5fc4b244cf1026ce40984_xxhdpi",
  },
  {
    id: 8,
    imageUrl:
      "https://cf.shopee.vn/file/vn-50009109-1300c148ab86e7684a47cd9612d37d97_xxhdpi",
  },
]);

const options = {
  rewind: true,
  gap: "1rem",
  autoplay: true,
  interval: 2000,
};

const showArrows = ref(false);

const handleArrowsUpdated = (splide) => {
  const prevArrow = document.querySelector(".splide__arrow--prev");
  const nextArrow = document.querySelector(".splide__arrow--next");
  prevArrow.style.display = showArrows.value ? "block" : "none";
  nextArrow.style.display = showArrows.value ? "block" : "none";
};

const handleMouseOver = () => {
  showArrows.value = true;
  handleArrowsUpdated();
};

const handleMouseOut = () => {
  showArrows.value = false;
  handleArrowsUpdated();
};

onMounted(() => {
  handleArrowsUpdated();
});
</script>

<template>
  <div class="banners">
    <div class="banners-top">
      <div
        class="banners-top__left"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      >
        <Splide
          :options="options"
          aria-label="My Favorite Images"
          :has-track="false"
        >
          <SplideTrack>
            <SplideSlide v-for="banner in bannerImages" :key="banner.id">
              <img :src="banner.imageUrl" class="rounded-sm" />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      <div class="banners-top__right">
        <div class="banners-top__right__top"></div>

        <div class="banners-top__right__bottom"></div>
      </div>
    </div>

    <div class="banners-bottom">
      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Khung Giờ Săn Sale</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Miễn Phí Ship - Có Shoppe</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Voucher Giảm Đến 500.000Đ</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Hàng Hiệu Outlet Giảm 50%</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Mã Giảm Giá</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Gì Cũng Rẻ - Deal Sốc 9.000Đ</div>
        </div>
      </div>
      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Nạp Thẻ, Dịch Vụ & Data</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Hãng Quốc Tế</div>
        </div>
      </div>

      <div class="banners-bottom__value">
        <div class="banners-bottom__value__img">
          <img
            src="https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi"
          />
        </div>

        <div class="banners-bottom__value__title">
          <div>Bắt Trend - Giá Sốc</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banners {
  margin-top: 140px;
  width: 1200px;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
}
.banners-top {
  display: flex;
}

.banners-top__left {
  position: relative;
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0;
  overflow: hidden;
  object-fit: contain;
}

.banners-top__left img {
  width: 100%;
}

.banners-top__right {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  margin-left: 0.3125rem;
  gap: 5px;
}
.banners-top__right__top {
  background-image: url("https://cf.shopee.vn/file/vn-50009109-182c923b9447ea889792cb0ac05ac484_xhdpi");
  background-repeat: no-repeat;
  flex: 1;
  background-size: cover;
  border-radius: 2px;
}

.banners-top__right__bottom {
  background-image: url("https://cf.shopee.vn/file/vn-50009109-66e02eaf7d1860a767bef0306f52d80a_xhdpi");
  background-repeat: no-repeat;
  flex: 1;
  background-size: cover;
  border-radius: 2px;
}

.banners-bottom {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  margin: 10px auto 0;
  min-height: 108px;
}

.banners-bottom__value {
  width: 100px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.banners-bottom__value:hover {
  transform: translateY(-5px);
}

.banners-bottom__value__img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 18px auto 8px;
}

.banners-bottom__value__img img {
  object-fit: contain;
  height: 100%;
}

.banners-bottom__value__title {
  text-align: center;
  font-size: 0.8125rem;
  line-height: 0.875rem;
  max-width: 150px;
  margin-bottom: 8px;
  word-wrap: break-word;
  overflow: hidden;
  white-space: pre-line;
  color: #222;
  letter-spacing: 0;
}
</style>
