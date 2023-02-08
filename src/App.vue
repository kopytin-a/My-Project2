<template>
  <div class="app">
    <navbar-menu></navbar-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu"
export default {
  components: {
    NavbarMenu,
  }
}
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
  .app {
    padding: 20px;
  }
</style>