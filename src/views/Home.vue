<template>
  <div class="product-list">
    <product-item
      v-for="product in productItems"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :image="product.image"
    ></product-item>
  </div>
</template>

<script>
import productItem from "@/components/productItem.vue";
const data = [
  {
    id: "prod1",
    title: "Product 1",
    price: 250,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod2",
    title: "Product 2",
    price: 150,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod3",
    title: "Product 3",
    price: 250,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod4",
    title: "Product 4",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod5",
    title: "Product 5",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod6",
    title: "Product 6",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod7",
    title: "Product 7",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod8",
    title: "Product 8",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod9",
    title: "Product 9",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  },
  {
    id: "prod10",
    title: "Product 10",
    price: 240,
    image: "https://picsum.photos/300/300?image=0&&blur"
  }
];

export default {
  components: {
    productItem
  },
  data() {
    return {
      productItems: data
    };
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  box-sizing: border-box;
  padding: 4% 2% 0;
  margin-top: 70px;
}
</style>

