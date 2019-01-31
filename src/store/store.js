import Vue from 'vue';
import Vuex from 'vuex';
import shop from '../api/shop';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        addProducts: (state, products) => {
            state.products = products;
        },
        addToCart: (state, product) => {
            state.cart.push(product);
        },
        removeFromCart(state, id){
            state.cart.forEach((item, index) => {
                if(item.id == id){
                    state.cart.splice(index, 1);
                }
            })
        },
        increaseQuantity(state, id){
            console.log("Increase quantity mutation")
            state.cart.forEach((item) => {
                if(item.id == id){
                    item.quantity++
                    console.log(item)
                }
            })
        },
        decreaseQuantity(state, id){
            console.log("Increase quantity mutation")
            state.cart.forEach((item) => {
                if(item.id == id){
                    item.quantity--
                    console.log(item)
                }
            })
        },
    },
    actions: {
        getAllProducts: (context) => {
            let products = shop.getAllProducts();
            context.commit('addProducts', products);
        }
    },
    getters: {
        cartTotal(state){
            let total = 0;
            state.cart.forEach(item => {

                total+= (item.price * item.quantity)
            });

            return total;
        }
    },
});

export default store;