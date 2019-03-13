<template>
  <div class="row">
    <input
      class="input"
      v-bind:class="inputClass"
      v-bind:name="name"
      v-bind:type="text"
      v-bind:value.prop="value"
      v-bind:placeholder="placehoder"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    type: { type: String, default: "text" },
    value: { required: true },
    placehoder: { type: String },
    invalid: { type: Boolean, default: false }
  },
  computed: {
    inputClass() {
      return {
        invalid: this.invalid
      };
    }
  }
};
</script>
