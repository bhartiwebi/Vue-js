<template>
  <div>
      <h2>Form Validation</h2>
    <form @submit="login">
      <input type="text" placeholder="enter your name" v-model="name" required/><br><br>
      <input type="text" placeholder="enter your password" v-model="password" required/><br><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
      return{
          error:[],
          name:null,
          password:null,
      }

  },
methods:{
    login(e){
        this.error=[];
        if(this.name && this.password)
        {
            console.warn("no error")
        }
        if(!this.name)
        {
            this.error.push("username is required");
            
        }
        if(!this.password)
        {
            this.error.push("password is required");
        }

        console.warn("Hello" ,this.error);
        e.preventDefault();
    }
}

};
</script>
<style scoped>
div{
    background-color: peru;
}
</style>