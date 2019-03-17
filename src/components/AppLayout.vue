<template>
  <div class="app-layout">
    <header class="img">
      <div>
        <img src="../assets/logo.svg" alt="logo" class="img">
      </div>
      <div>My shirt shop</div>
    </header>
    <NavMenu/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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
