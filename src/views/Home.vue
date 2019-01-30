<template>
  <div class="home">
    <section class="products" >
      <ProductItem />
    </section>

    <section class="cart">
      <ShoppingCart />
    </section>
    
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
  name: 'home',
  components: {
    ProductItem,
    ShoppingCart,
  },
}
</script>

<style>
.home{
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.products{
  width: 70%;
}

.cart{
  width: 30%;
}

.card{
  background-color: #fff;
  box-shadow: 1px 1px 2px #777;
  padding: 5px;
}
</style>

