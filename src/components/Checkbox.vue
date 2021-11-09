<template>
  <div>
    <h3>Form with checkbox and radio button</h3>

    <input
      type="text"
      placeholder="enter your name"
      v-model="checkbox.username"
    /><br /><br />
    <input
      type="password"
      placeholder="enter your password"
      v-model="checkbox.password"
    /><br /><br />

    <p>Choose Hobbies</p>
    <input
      type="checkbox"
      id="singing"
      value="singing"
      v-model="checkbox.hobbies"
    />
    <label for="singing">Singing</label>

    <input
      type="checkbox"
      id="dance"
      value="dance"
      v-model="checkbox.hobbies"
    />
    <label for="dance">Dance</label>
    <br /><br />

    <p>select Gender</p>
    <input type="radio" id="male" value="male" v-model="checkbox.gender" />
    <label for="male">male</label>

    <input type="radio" id="female" value="female" v-model="checkbox.gender" />
    <label for="female">female</label>
    <br /><br />
    <button v-on:click="checkuser">submit</button>
  </div><br>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      checkbox: {
        username: null,
        password: null,
        hobbies: [],
        gender: null,
      },
    };
  },
  methods: {
    checkuser() {
      console.warn(this.checkbox);
    },
  },
};
</script>

<style scoped>
div {
  background-color: rgb(199, 164, 175);
}
</style>