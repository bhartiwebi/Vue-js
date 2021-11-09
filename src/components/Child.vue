<template>
  <div>
    <h2>Props in Vue js</h2>
    <h2>Child vue</h2>
    <!-- <h3>{{name}}</h3> -->

    <h3 v-for="user in users" :key="user.name">
        {{user.name}}
        {{user.email}}
    </h3>
 
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ['users'],
};
</script>

<style scoped>
div {
  background-color: rgb(160, 226, 235);
}
</style>