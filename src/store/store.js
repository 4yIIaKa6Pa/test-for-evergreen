import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        perPage: 5,
        totalPages: {}
    },
    mutations: {
        setPerPage (state, payload) {
            state.perPage = payload;
        },
        setUsers (state, payload) {
            state.users = payload;
        },
        setTotalPages (state, payload) {
            state.totalPages = payload;
        },
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getTotalPages(state) {
            return state.totalPages
        }
    },

    actions: {
        fetchUsers({state, commit}, payload) {
            axios.get(`https://reqres.in/api/users?page=${payload.page}&per_page=${state.perPage}`)
                .then(response => {
                    console.log(response);
                    commit('setUsers', response.data.data);
                    commit('setTotalPages', response.data.total_pages);
                })
        }
    }


});

export default store;