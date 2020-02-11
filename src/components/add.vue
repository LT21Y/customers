<template>
  <div class="add container">
<v-Alert v-if="alertMes" :message="alertMes"></v-Alert>
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCutomers">
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
        <button type="submit" class="btn btn-primary">添加</button>
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
      alertMes:"",
      customer: {}
    }
  },
   components:{
      "v-Alert":alert
  },
  methods: {
    addCutomers(e) {
      if ((this.customer.name || this.customer.phone || this.customer.email) ==null) {
       this.alertMes="请填入信息";
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          school: this.customer.school,
          pro: this.customer.pro,
          personal: this.customer.personal
        };
        this.$http.post("http://localhost:3000/user", newCustomer).then(function(res) {  //提交数据
            console.log(res);
          });
        this.$router.push({
          path: "/",
          query: {
            alertMes: "用户信息添加成功！"
          }
        });
      }
      e.preventDefault(); //阻止默认事件
    }
  }
};
</script>

<style>
</style>