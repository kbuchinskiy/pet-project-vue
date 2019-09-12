<template>
  <div class="product-list">
    <product-item
      v-for="product in productsInStock"
      :key="product.id"
      :product="product"
    ></product-item>
  </div>
</template>

<script>
import productItem from "@/components/productItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    productItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["productsInStock"])
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

