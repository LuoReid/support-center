<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <form>
      <!-- <FormInput name="username" v-bind:value="username" placehoulder="Username" v-on:input="val => username = val" /> -->
      <FormInput name="username" v-model="username" placeholder="Username"/>
    </form>
  </main>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {}
};
</script>
