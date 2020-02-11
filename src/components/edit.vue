<template>
  <div class="edit container">
    <v-Alert v-if="alertMes" :message="alertMes"></v-Alert>
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">更新信息</h1>

    <form @submit="updataCutomers">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="school" v-model="customer.school" />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="pro" v-model="customer.pro" />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" rows="10" v-model="customer.personal"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">更新</button>
      </div>
    </form>
  </div>
</template>

<script>
import alert from './alert'
export default {
  name: "add",
  data() {
    return {
      
      customer:{}  
    };
  },
    components:{
      "v-Alert":alert
  },
  methods: {
    getid(id) {
      this.$http.get("http://localhost:3000/user?id="+this.$route.params.id).then((res) => {  
        this.customer = res.body[0];
    console.log(res.body[0]);
      })},
    updataCutomers(e) {
      if ((this.customer.name || this.customer.phone || this.customer.email) ==null) { 
        // console.log("不能为空");
          this.alertMes="请填入信息";
      } else {
        let updataCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          school: this.customer.school,
          pro: this.customer.pro,
          personal: this.customer.personal
        };
        this.$http.put("http://localhost:3000/user/"+this.$route.params.id, updataCustomer).then(function(res) { //更新数据
            console.log(res);
          });
        this.$router.push({
          path: "/",
          query: {
            alertMes: "用户信息更新成功！"
          }
        });
      }
      e.preventDefault(); //阻止默认事件
    }
  },
  created(){
    this.getid();
  }
};
</script>

<style>
</style>