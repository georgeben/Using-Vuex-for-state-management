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
        }
    },
    actions: {
        getAllProducts: (context) => {
            let products = shop.getAllProducts();
            context.commit('addProducts', products);
        }
    },
    getters: {

    },
});

export default store;