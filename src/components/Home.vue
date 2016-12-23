<template>
  <div>
    <header-bar></header-bar>
    <div class="container-fluid"><router-view></router-view></div>
  </div>
</template>
<script>
import HeaderBar from './block/header.vue'
  export default{
    components: {
      HeaderBar
    }
  }
</script>
