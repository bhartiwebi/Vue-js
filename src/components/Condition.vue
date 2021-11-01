<template>
  <div>
    <h2 v-if="show">Condition component-2</h2>
    <h2 v-else> Condition else block</h2>

    <button v-on:click="display">toggle Element</button>
  </div>
</template>

<script>
export default {
  name: "Condition",
  props: {
    data: String,
  },
  
  data()
  {
      return{show:true}
        
  },
  methods:{
      display()
      {
          this.show=!this.show
          
      }
      
  },

 
};
</script>
<style scoped>
div{
background-color: #8fea8f;
}
</style>
