<template>
  <div>
    <h2>
      For loops component-3
      <table border="1px">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
          <tr v-for="item in users" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </thead>
      </table>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Loops",
  props: {
    data: String,
  },
  data() {
    return {
      users: [
        { id: 1, name: "bharti", email: "rrathodbharti@gmail.com" },
        { id: 2, name: "sandhya", email: "sandhya@gmail.com" },
        { id: 3, name: "urvashi", email: "urvashi@gmail.com" },
      ],
    };
  },
};
</script>

<style scoped>
div {
  background-color: #a4c2c3;
}
</style>