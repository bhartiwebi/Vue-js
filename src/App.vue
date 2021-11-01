<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <Home data="bharti rathod" msg="hii bharti is hear" />
  <Condition />
  <Loops /> -->
  <Parent />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from "./components/Home.vue";
// import Condition from "./components/Condition.vue";
// import Loops from "./components/Loops.vue";
import Parent from './components/Parent.vue';

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Home,
    // Condition,
    // Loops,
    Parent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
