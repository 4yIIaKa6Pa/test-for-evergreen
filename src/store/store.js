import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        perPage: 5,
        totalPages: 0
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
        },

        //В основном отправляестя запрос с параметром filter на сервер,
        //но так как в данном апи такой функции нету а задание требует
        //реализация будет такая
        fetchAndFilterUsers({commit}, payload) {
            axios.get(`https://reqres.in/api/users?page=1&per_page=99999999`)
                .then(response => {
                    console.log(payload.length);
                    let filteredArray = response.data.data.filter(user => {
                        if(payload.length === 0){
                            return true
                        }
                        return user.first_name.toLowerCase().includes(payload.toLowerCase())
                    });
                    commit('setUsers', filteredArray);
                })
        }
    }


});

export default store;