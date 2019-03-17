<template>
  <div class="row">
    <component
      v-bind:is="element"
      class="input"
      v-bind:class="inputClass"
      v-bind:name="name"
      v-bind:type="type"
      v-bind:value="text"
      v-bind:placeholder="placeholder"
      v-on:input="update"
      v-bind="$attrs"
    />
    <!-- v-bind:value.prop="value" -->
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    type: { type: String, default: "text" },
    value: { required: false },
    placeholder: { type: String },
    invalid: { type: Boolean, default: false },
    text: { required: true }
  },
  computed: {
    inputClass() {
      return {
        invalid: this.invalid
      };
    },
    element() {
      return this.type === "textarea" ? this.type : "input";
    }
  },
  methods: {
    update(event) {
      console.log(event.currentTarget.value);
      //   this.$emit('input',event.currentTarget.value)
      this.$emit("update", event.currentTarget.value);
    }
  },
  model: {
    prop: "text",
    event: "update"
  }
};
</script>
