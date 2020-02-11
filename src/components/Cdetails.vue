<template>
  <div class="Cdetails container">
      <router-link to="/" class="btn btn-default">返回</router-link>
      <h1 class="page-header">{{customers.name}}
        <span class="pull-right">
          <router-link class="btn btn-primary" :to="'/edit/'+customers.id">编辑</router-link>
          <button class="btn btn-danger" @click="deleteC(customers.id)">删除</button>
        </span>
        
      </h1>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-phone"></span>{{customers.phone}}</li>
        <br>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope"></span>{{customers.email}}</li>
      </ul>
         <ul class="list-group">
        <li class="list-group-item"><span class=" glyphicon glyphicon-education "></span>{{customers.education}}</li>
          <br>
        <li class="list-group-item"><span class=" glyphicon glyphicon-calendar "></span>{{customers.school}}</li>
      </ul>
         <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-user"></span>{{customers.pro}}</li>
          <br>
        <li class="list-group-item"><span class="glyphicon glyphicon-comment"></span>{{customers.personal}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Cdetails",
  
  data() {
    return {
      customers: [],
      list:[]
    };
  },
  methods: {
    getid(id) {
      this.$http.get("http://localhost:3000/user?id="+id).then((res) => {
        this.customers = res.body[0];
    console.log(res.body[0]);
      });
    },
    deleteC(id){
     this.$http.delete("http://localhost:3000/user/"+id).then((res) => {
       console.log("3");
       this.$router.push({
          path: "/",
          query: {
            alertMes: "删除成功！"
          }
        });
      });
    }
  },
  created(){
      this.getid(this.$route.params.id);
  }
};
</script>

<style type="text/css">
span{
  margin-right: 10px;
}
</style>