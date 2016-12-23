<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand">Brand</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li  :class="{ 'active': $route.path=='/home/a'}"><a><router-link to="/home/a">a</router-link></a></li>
          <li  :class="{ 'active': $route.path=='/home/b'}"><a><router-link to="/home/b">b</router-link></a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
  export default{
    name:"Header"
  }
</script>
