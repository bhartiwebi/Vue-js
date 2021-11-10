<template>
    <div>
        <h2>Filter Vue js</h2>
        <h3>{{name}}</h3>
        <h3>{{email}}</h3>
    </div>
</template>

<script>
export default {
    name:'Filter',
    data(){
        return{
            name: "bharti rathod",email:"bhartirathod@gmail.com"
            
        }
        
    }
}
</script>

<style scoped>
div{
    background-color: rgb(167, 240, 173);
}
</style>