<template>
  <div class="home">
    <ProductItem />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';

export default {
  name: 'home',
  components: {
    ProductItem,
  },
}
</script>

<style>
.home{
  padding: 10px;
}

.card{
  background-color: #fff;
  box-shadow: 1px 1px 2px #777;
  padding: 5px;
}
</style>

