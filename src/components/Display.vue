<template>
  <div>
    <h2>Normal Property</h2>
    <h3 v-once>{{ name }}</h3>

    <h4>{{ name }}</h4>
    <h3>{{ 33 * 3 }}</h3>
    <h4>{{ ok ? "yes" : "no" }}</h4>

    <button v-bind:disabled="disableBtn" v-on:click="update">click me</button>
  </div>
</template>
<script>
export default {
  name: "Display",
  data() {
    return {
      name: "Arya",
      ok: true,
      disableBtn: true,
    };
  },
  methods: {
    update() {
      this.name = "bharti";
    },
  },
};
</script>

<style scoped>
div {
  background-color: bisque;
}
</style>