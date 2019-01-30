<template>
    <div class="cart-item">
        <div class="img">
            <img src="../assets/shoe.jpg" alt="Failed to load image">
        </div>
        <div class="detail">
            <h5>Sneakers</h5>
            <p>Grey and blue sneakers with white sole.</p>
            <div class="quantity">
                <label for="quantity">Quantity</label>
                <button>+</button>
                <input type="number" id="quantity">
                <button>-</button>
            </div>
            <button class="btn remove-btn">Remove from cart</button>
        </div>
    </div>
</template>

<style scoped>
.cart-item{
    display: flex;
}

.img{
    width: 30%;
}

.img img{
    width: 100%;
}

.detail{
    width: 70%;
}

.quantity{
    display: flex;  
    align-items: center;
}

.quantity input{
    width: 20%;
    margin: 0 5px;
}

.quantity label{
    margin-right: 20px;
}

.remove-btn{
    background-color: rgb(230, 78, 78);
    color: white;
    margin-top: 10px;
}
</style>

