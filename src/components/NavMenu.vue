<template>
  <nav class="menu">
    <router-link v-bind:to="{ name:'home'}" exact>Home</router-link>
    <router-link v-bind:to="{ name:'faq'}" exact>FAQ</router-link>
    <div class="spacer"></div>
    <template v-if="$state.user">
      <a>{{ $state.user.username}}</a>
      <a v-on:click="logout">Logout</a>
    </template>
    <router-link v-else v-bind:to="{name:'login'}">Login</router-link>
  </nav>
</template>
<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu },
  methods:{
    async logout(){
      const result = await this.$fetch('logout')
      if(result.status === 'ok'){
        this.$state.user = null
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>
