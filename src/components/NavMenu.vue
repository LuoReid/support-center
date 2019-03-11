<template>
  <nav class="menu">
    <router-link v-bind:to="{ name:'home'}">Home</router-link>
    <router-link v-bind:to="{ name:'faq'}">FAQ</router-link>
  </nav>
</template>
<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu }
};
</script>

