<template>
  <div>
    <h1>parent component</h1>
    <Users />
    <Users1 />
    <Users2 />
   
  </div>
</template>

<script>
import Users from "./Users";
import Users1 from "./Users1";
import Users2 from "./Users2";
export default {
  name: "Parent",
  components: {
    Users,
    Users1,
    Users2,
  },
};
</script>

<style scoped>
div {
  background-color: #a9d0c3;
  height: 500px;
}
</style>