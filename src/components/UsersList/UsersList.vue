<template>
    <div class="UsersList">
        <div class="UsersList__search">
            <input type="text" v-model="searchField">
            <button @click="searchHandle">search</button>
        </div>
        <ul class="UsersList__list">
            <router-link :to="user.id.toString()" class="UsersList__list-item" v-for="user in users" :key="user.id">
                <img class="UsersList__list-item-image" :src="user.avatar" alt="">
                <div class="UsersList__list-item-info-block">
                    <p>{{user.first_name}}</p>
                    <p>{{user.last_name}}</p>
                    <p>{{user.email}}</p>
                </div>
            </router-link>
        </ul>
        <div v-if="!searchFlag" class="UsersList__pagination-block">
            <paginate
                    :page-count="totalPages"
                    :click-handler="clickHandler"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
            >
            </paginate>
            <select class="UsersList__pagination-block-select" v-model="perPage" @change="selectChange">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>
    </div>
</template>

<script>
    import './UsersList.scss'
    import Paginate from 'vuejs-paginate'

    export default {
        name: "UsersList",
        components: {Paginate},

        data() {
            return {
                page: 1,
                perPage: 5,
                searchField: '',
                searchFlag: false
            }
        },

        computed: {
            users() {
                return this.$store.getters.getUsers;
            },
            totalPages() {
                return this.$store.getters.getTotalPages;
            }
        },

        beforeMount() {
            this.$store.dispatch('fetchUsers',{page: 1});
        },

        methods: {
            clickHandler(props) {
                this.page = props;
                this.$store.dispatch('fetchUsers',{page: props});
            },

            selectChange() {
                this.$store.commit('setPerPage', this.perPage);
                this.$store.dispatch('fetchUsers',{page: this.page});
            },

            searchHandle() {
                this.searchFlag = true;
                this.$store.dispatch('fetchAndFilterUsers', this.searchField);
            }
        }
    }


</script>

<style lang="css">
    .pagination {
        display: flex;
    }

    .pagination li {
        margin: 0 5px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
        box-sizing: border-box;
        width: 40px;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
    }

    .active {
        background: black;
        color: white;
    }

    .disabled {
        opacity: 0.5;
    }

    .disabled:hover {
        cursor: default;
    }
    
    .disabled a:hover {
        cursor: default;
    }

</style>