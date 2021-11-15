<template>
  <div>
    <h2>Employee List</h2>
    <form @submit.prevent="submitData" method="post">
      <input
        type="text"
        name="title"
        placeholder="enter title"
        v-model="post.title"
      />
      <br /><br />
      <input
        type="text"
        name="body"
        placeholder="enter body"
        v-model="post.body"
      /><br /><br />
      <button type="submit">add</button>
    </form>

    <div>
      <br />
      <table border="2px">
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
          <td>Action</td>
        </tr>
        <tr v-for="item in post.list" v-bind:key="item.id">
          <td>{{ item.id }}</td>

          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>
            <button v-on:click="deleteitem(item.id)">delete</button>
            <button v-on:click="updateitem(item)">Edit</button>

            <!-- <button v-on:click="updateitem">Edit</button> -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';

import axios from "axios";

export default {
  name: "EmployeeList",

  data() {
    return {
      post: {
        list: [],
        isEditing: false,

        title: null,
        body: null,
      },
    };
  },

  methods: {
    submitData(e) {
      e.preventDefault();
      if (this.post.isEditing) {
        alert("update successfully");
        const item = this.post.item;
        
        axios
          .put("http://localhost:3000/posts/" + item.id, this.post)
          .then((res) => {
            console.log("res", res);
          });
      } else {
        axios.post("http://localhost:3000/posts", this.post).then((res) => {
          console.log("res", res);
           
        });
      }
      this.refreshList();
    },

    updateitem(item) {
      console.log(this.post);
      this.post.title = item.title;
      this.post.body = item.body;
      this.post.isEditing = true;
      this.post.item = item;
    },

    // edititem() {
    //   this.post.isEditing = true;

    // },

    deleteitem(id) {
      this.axios.delete("http://localhost:3000/posts/" + id).then((result) => {
        console.log(result);
        //  this.list = this.list.filter(dt => dt.id != id)
        this.refreshList();
      });
      alert("are you sure want to delete this record");
    },

    mounted() {
      this.refreshList();
    },

    refreshList() {
      axios.get("http://localhost:3000/posts").then((resp) => {
        console.log(resp);
        this.post.list = resp.data;
      });
    },
  },

  mounted() {
    this.refreshList();
  },
};
</script>

<style scoped>
table {
  border-color: rgb(75, 137, 179);
}
</style>