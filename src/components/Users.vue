<template>
    <div class="Users">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "Users",
    }
</script>

<style scoped>
    .Users {
        max-width: 1200px;
        margin: auto;
        display: flex;
    }
</style>