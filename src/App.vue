<template>
  <div id="app">
    <Users/>
  </div>
</template>

<script>
import Users from "./components/Users";

export default {
  name: 'App',
  components: {
    Users
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: unset;
  }
</style>
