import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import EmployeeList from './components/EmployeeList'
import Checkbox from './components/Checkbox'
import Parent from './components/Parent'
import Condition from './components/Condition'

const routes=[
    {
        name:'Home', path:'/Home', component:Home
    },
    {
        name:'EmployeeList',path:'/EmployeeList',component:EmployeeList
    },
    {
        name:'Checkbox', path:'/Checkbox',component:Checkbox
    },
    {
        name:'Parent', path:'/Parent',component:Parent
    },
    {
        name:'Condition', path:'/Condition',component:Condition
    }
   
   

];
const router=createRouter   ({
    history:createWebHashHistory(),
    routes
});

export default router;