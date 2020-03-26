<template>
    <div class="User">
        <div class="User__block">
            <img class="User__block-img" :src="user.avatar" alt="avatar">
            <div class="User__block-name-block">
                <p>{{user.first_name}}</p>
                <p>{{user.last_name}}</p>
                <p class="User__block-email">{{user.email}}</p>
            </div>
        </div>
        <router-link to="/" class="User__back-button">Back</router-link>
    </div>
</template>

<script>
    import './User.scss'

    export default {
        name: "User",

        computed: {
            user() {
                return this.$store.getters.getUsers.find(item => item.id.toString() === this.$route.params.id.toString());
            }
        },
    }


</script>

<style scoped>

</style>