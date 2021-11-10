<template>
  <div>
    <h3>Life cycle hooks</h3>
    <h4>beforeCreate, created</h4>

    <h4>beforeMount, mounted</h4>

    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cycle",
  data() {
    return {
      name: "payl",
    };
  },
  //  created(){

  //     console.warn("created" ,this.name)
  // },
  // beforeCreate()
  // {
  //      this.name="komal"
  //     console.warn("before", this.name)
  // },
  mounted() {
    console.warn("mounted", this.$el);
  },
  beforeMount() {
    console.warn("beformount", this.$el);
  },
};
</script>

<style scoped>
div {
  background-color: rgb(228, 201, 80);
}
</style>