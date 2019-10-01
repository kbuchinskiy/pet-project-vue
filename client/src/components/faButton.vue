<template>
  <button @click="$emit('click')">
    <font-awesome-icon :icon="icon"/>
  </button>
</template>

<script>
  import {library} from "@fortawesome/fontawesome-svg-core";
  import {
    faArrowLeft,
    faShoppingCart,
    faTimes,
    faPlus,
    faMinus,
    faTrash
  } from "@fortawesome/free-solid-svg-icons";
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

  library.add(faArrowLeft);
  library.add(faShoppingCart);
  library.add(faTimes);
  library.add(faPlus);
  library.add(faMinus);
  library.add(faTrash);

  export default {
    components: {
      FontAwesomeIcon
    },
    props: {
      icon: String
    }
  };
</script>

<style lang="scss" scoped>
  button {
    font-size: 1.2em;
    color: #333;

    transform-origin: center;
  }

  button:active {
    transform: translateY(1px);
  }
</style>
