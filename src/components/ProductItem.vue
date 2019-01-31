<template>
    <div class="product-item card">
        <img src="../assets/shoe.jpg" alt="Failed to load image">
        <div class="title">
            <h4>{{product.id}}</h4>
            <h4>{{product.name}}</h4>
            <h5>N{{product.price}}</h5>
        </div>
        <p>{{product.description}}</p>
        <div v-if="modify" >
            <button class=" btn edit" data-toggle="modal" data-target="#editModal">Edit</button>
            <button @click="deleteProduct" >Delete</button>

        </div>
        <button v-else @click="addProductToCart" class="btn">Add To Cart</button>

         <!-- Delete Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete {{product.name}}?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="deleteProduct"  type="button" class="btn delete" data-dismiss="modal">Delete product</button>
                </div>
                </div>
            </div>
        </div>

        <!-- EditModal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="button" class="btn delete" data-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product', 'modify'],
    methods: {
        addProductToCart(){
            this.$store.commit('addToCart', this.product);
        },
        deleteProduct(){
            console.log("About to delete ", this.product.id);
            this.$store.commit('removeProduct', this.product.id)
        }
    }
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


