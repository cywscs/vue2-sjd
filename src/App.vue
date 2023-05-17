<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Detect from './components/Detect.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Detect,
    Home,
    Login
  }
}

</script>

<style>

</style>
