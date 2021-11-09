<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- 
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <Home data="bharti rathod" msg="hii bharti is hear" />
  <Condition />
  <Loops />
  <Parent />
  <Display />
  <!-- <Child name="Arya Rathod" /> -->
  <Child v-bind:users="users" />
  <Checkbox />
  <Login />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from "./components/Home.vue";
import Condition from "./components/Condition.vue";
import Loops from "./components/Loops.vue";
import Display from "./components/Display.vue";
import Child from "./components/Child.vue";
import Checkbox from "./components/Checkbox.vue";
import Login from "./components/Login.vue";
// import Parent from './components/Parent.vue';

export default {
  name: "App",
  components: {
    // HelloWorld,
    Checkbox,
    Home,
    Condition,
    Loops,
    Display,
    Child,
    Login,
    // Parent
  },

  data() {
    return {
      users: [
        { name: "bharti rathod", email: "bharti@gmail.com" },
        { name: "Arya rathod" },
        { name: "Sandhya rathod" },
      ],
    };
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
