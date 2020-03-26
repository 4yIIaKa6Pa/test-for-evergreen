<template>
    <div class="Users">
        <UsersList/>
    </div>
</template>

<script>
    import UsersList from "./UsersList/UsersList";
    export default {
        name: "Users",
        components: {UsersList}
    }
</script>

<style scoped>
    .Users {
        max-width: 1200px;
        margin: auto;
        display: flex;
    }
</style>