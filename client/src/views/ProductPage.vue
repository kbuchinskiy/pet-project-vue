<template>
  <div class="product-page-view">
    <div class="product-page">
      <section>
        <h1 class="title">{{ product.title }}</h1>
        <img class="main-image" :src="product.image" alt />
        <p class="price">
          Price: <b>{{ product.price }}</b>
        </p>
        <button class="order-button" @click="addProductItem(product)">
          add to cart
        </button>
        <p v-show="productInCartAmount(product.id)">
          In cart: {{ productInCartAmount(product.id) }}
        </p>
      </section>
      <section>
        <accordion
          :tabsData="tabsData"
          :oneTabToOpen="false"
          :initialTabIndex="0"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import accordion from '../components/accordion/accordion.vue'

export default {
  components: { accordion },
  name: 'product-view',
  data() {
    return {
      tabsData: [
        {
          title: 'title 1',
          content: 'content'
        },
        {
          title: 'title 2',
          content: 'content'
        },
        {
          title: 'title 3',
          content: 'content'
        }
      ]
    }
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  computed: mapGetters('cart', ['productInCartAmount']),
  methods: {
    ...mapActions('cart', ['addProductItem'])
  }
}
</script>

<style scoped lang="scss">
.product-page {
  display: flex;
  margin: 0 auto;

  section {
    &:last-child {
      margin-left: 3vw;
    }
  }
}

.title {
  font-size: 50px;
  margin: 0.5em 0;
}

.main-image {
  margin-bottom: 1em;
}

.price {
  b {
    font-weight: bold;
  }
}

.order-button {
  margin: 2em 0;
  font-weight: 600;
  border: 1px solid #555;
  padding: 10px;
}
</style>
