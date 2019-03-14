<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <form>
      <!-- <FormInput name="username" v-bind:value="username" placehoulder="Username" v-on:input="val => username = val" /> -->
      <!-- <FormInput name="username" v-model="username" placeholder="Username"/> -->
      <SmartForm
        class="form"
        v-bind:title="title"
        v-bind:operation="operation"
        v-bind:valid="valid"
      >
        <FormInput name="username" v-model="username" placeholder="Username"/>
        <FormInput name="password" type="password" v-model="password" placeholder="Password"/>

        <template v-if="model === 'signup'">
          <FormInput
            name="verify-password"
            type="password"
            v-model="password2"
            placeholder="Retype Password"
            v-bind:invalid="retypePasswordError"
          />
          <FormInput name="email" type="email" v-model="email" placeholder="Email"/>
        </template>
        <template slot="actions">
          <template v-if="model === 'login'">
            <button type="button" class="secondary" v-on:click="model = 'signup'">Sign up</button>
            <button type="submit" v-bind:disabled="!valid">Login</button>
          </template>
          <template v-else-if="model === 'signup'">
            <button type="button" class="secondary" v-on:click="model = 'login'">Back to login</button>
            <button type="submit" v-bind:disabled="!valid">Create account</button>
          </template>
        </template>
      </SmartForm>
    </form>
  </main>
</template>
<script>
import SmartForm from "./SmartForm.vue";
export default {
  data() {
    return {
      username: "",
      model: "login",
      password: "",
      password2: "",
      email: ""
    };
  },
  methods: {
    async operation() {
      await this[this.model]();
    },
    async login() {
      //TODO
    },
    async signup() {
      //TODO
    }
  },
  computed: {
    title() {
      switch (this.model) {
        case "login":
          return "Login";
        case "signup":
          return "Create a new account";
      }
    },
    retypePasswordError() {
      return this.password2 && this.password !== this.password2;
    },
    signupValid() {
      return this.password2 && this.email && !this.retypePasswordError;
    },
    valid() {
      return (
        this.username &&
        this.password &&
        (this.model !== "signup" || this.signupValid)
      );
    }
  }
};
</script>
