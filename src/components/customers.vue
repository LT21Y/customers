<template>
  <div class="customers container">
<v-Alert v-if="alertMes" :message="alertMes"></v-Alert>
    <h1 class="page-header">用户管理系统</h1>
        <input type="text" class="form-control" placeholder="搜索姓名" v-model="filterInput">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in filterby(list,filterInput)" :key="list.id">
          <td>{{list.name}}</td>
          <td>{{list.phone}}</td>
          <td>{{list.email}}</td>
          <td><router-link class="btn btn-default" :to="'/customers/'+list.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alert from './alert'
export default {
  name: "customers",
  data() {
    return {
      list:[],
       alertMes:""
    };
  },
  components:{
      "v-Alert":alert
  },
  methods:{
    getdata(){
      this.$http.get("http://localhost:3000/user").then((res)=>{
          this.list=res.body;
          console.log(res.body);
      });
    },
    filterby(list,value){
     return list.filter((list)=>{
        return list.name.match(value);
      });
    }
  },
  created(){
       if(this.$route.query.alertMes!=null){
      this.alertMes=this.$route.query.alertMes;
    }
    this.getdata();
  },
  updated(){
 
     this.getdata();
   
  }
};
</script>

<style>
</style>