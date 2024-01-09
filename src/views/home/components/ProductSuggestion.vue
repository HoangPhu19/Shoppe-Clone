<script setup>
import { onMounted, ref } from "vue";

import ProductItem from "./ProductItem.vue";
import { ProductVouchers } from "../../../assets/data";

const listProduct = ref([]);

onMounted(() => {
  fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((res) => {
      listProduct.value = res.products;
      onShuffleProduct();
      applyDiscounts();
    });
});

const onShuffleProduct = () => {
  listProduct.value.sort(() => Math.random() - 0.5);
};

const applyDiscounts = () => {
  listProduct.value.forEach((product) => {
    const hasDicount = Math.random() > 0.5;
    if (hasDicount) {
      const randomDiscountIndex = Math.floor(
        Math.random() * ProductVouchers.length
      );
      const randomDiscount = ProductVouchers[randomDiscountIndex].discountCode;
      product.discountCode = randomDiscount;
    }
  });
};
</script>

<template>
  <div class="container">
    <div class="header">
      <span>GỢI Ý HÔM NAY</span>

      <div></div>
    </div>

    <div class="content">
      <ProductItem
        :data="product"
        v-for="product in listProduct.slice(0, 24)"
        :key="product.id"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin-inline: auto;
  margin-block: 20px;
  background-color: #f5f5f5;

  .header {
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #fff;

    span {
      color: #ee4d2d;
      font-size: 1.1rem;
      font-weight: 500;
    }

    div {
      width: 100%;
      height: 3px;
      background-color: #ee4d2d;
      position: absolute;
      bottom: 0;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 10px;
  }
}
</style>
