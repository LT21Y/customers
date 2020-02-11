<template>
  <div id="app">
    
    <!-- Static navbar -->
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">用户管理系统</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav"> 
            <li><router-link to="/">客户信息</router-link></li>
            <li><router-link to="/About">关于我们</router-link></li>
          
          </ul>
           <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">添加用户</router-link></li>
           
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
   
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "/assets/css/base.css";
</style>
