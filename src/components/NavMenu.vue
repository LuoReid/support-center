<template>
  <nav class="menu">
    <router-link v-bind:to="{ name:'home'}" exact>Home</router-link>
    <router-link v-bind:to="{ name:'faq'}" exact>FAQ</router-link>
  </nav>
</template>
<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu }
};
</script>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>
