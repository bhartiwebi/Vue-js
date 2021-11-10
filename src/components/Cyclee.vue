<template>
  <div>
    <h3>Life Cycle hook 2</h3>
    <h4>beforedistroy, distroy</h4>

    <h4>{{ name }}</h4>
  </div>
</template>
<script>
export default {
  name: "Cyclee",
  dt() {
    return {
      name: "webiwork",
    };
  },
  // beforeDestroy()
  // {
  //   console.warn("beforedestroy")
  // },
  // destroyed(){
  //   console.warn("destroy")
  // }
};
</script>
<style scoped>
div {
  background-color: rgb(216, 140, 127);
}
</style>