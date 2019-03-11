<template>
  <div class="app-layout">
    <header class="img">
      <div>
        <img src="../assets/logo.svg" alt="logo" class="img">
      </div>
      <div>My shirt shop</div>
    </header>
    <NavMenu/>
    <router-view/>
    <router-link v-bind:to="{ name:'faq' }">FAQ</router-link>
  </div>
</template>
<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: {
    NavMenu
  }
};
</script>

<style lang="stylus">
@import '../style/main';
</style>

<style lang="stylus" scoped>
@import '../style/main';
</style>
