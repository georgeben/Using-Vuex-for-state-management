import Vue from 'vue';
import Vuex from 'vuex';
import shop from '../api/shop';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        addProducts: (state, products) => {
            state.products = products;
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