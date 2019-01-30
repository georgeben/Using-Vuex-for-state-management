<template>
    <div class="product-item card">
        <img src="../assets/shoe.jpg" alt="Failed to load image">
        <div class="title">
            <h4>{{product.name}}</h4>
            <h5>N{{product.price}}</h5>
        </div>
        <p>{{product.description}}</p>
        <button class="btn">Add To Cart</button>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product']
}
</script>
<style scoped>

/* .product-item{
    width: 25%;
}

.product-item img{
    width: 200px;
    display: block;
    margin: auto;
}

.title{
    display: flex;
    justify-content: space-between;
} */

button{
    background-color: rgb(99, 176, 221);
}
</style>


