<template>
<div>
  <h1> Home component-1</h1>
  <!-- <h2>{{ data }}</h2>
  <h2>{{ msg }}</h2> -->
  <button v-on:click="hello('hello World')">call hello function</button>
</div>
</template>

<script>
export default {
  name: "Home",
  props: {
    data: String,
    msg: String,
   
  },


  methods: {
      hello(data){
          console.log("hello world")
          alert(data)
          
      }
  },
};
</script>

<style scoped>
div{
background-color: coral;
}
</style>
