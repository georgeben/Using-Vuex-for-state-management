<template>
    <div class="card" >
        <h4>Your Cart</h4>
        <p>This lists all the items you have chosen to buy.</p>
        <CartItem />

        <p>Total: 500</p>
        <button class="btn">Checkout</button>
    </div>
</template>


<script>
import CartItem from './CartItem';

export default {
    name: 'ShoppingCart',
    components: {
        CartItem,
    }
}
</script>

<style scoped>
button{
    background-color: rgb(99, 176, 221);
}
</style>


