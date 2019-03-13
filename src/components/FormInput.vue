<template>
  <div class="row">
    <input
      class="input"
      v-bind:class="inputClass"
      v-bind:name="name"
      v-bind:type="type"
      v-bind:value.prop="value"
      v-bind:placeholder="placehoder"
      v-on:input="update"
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
  },
  methods:{      
    update(event) {
      console.log(event.currentTarget.value);
      this.$emit('input',event.currentTarget.value)
    }
  }
};
</script>
