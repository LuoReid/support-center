<template>
  <div class="new-ticket">
    <h1>New ticket</h1>
    <SmartForm title="New ticket" v-bind:operation="operation" v-bind:valid="valid">
      <FormInput
        name="title"
        v-model="title"
        placeholder="Short description (max 100 chars)"
        maxlength="100"
        required
      />
      <FormInput
        type="textarea"
        name="description"
        v-model="description"
        placeholder="Describe your problem in details"
        rows="4"
      />
      <template slot="actions">
        <router-link tag="button" v-bind:to="{name:'tickets'}" class="secondary">Go back</router-link>
        <button type="submit" v-bind:disabled="!valid">Send ticket</button>
      </template>
    </SmartForm>
  </div>
</template>
<script>
import SmartForm from "./SmartForm.vue";
import FormInput from "./FormInput.vue";
export default {
  components: { SmartForm, FormInput },
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: {
    valid() {
      return !!this.title && !!this.description;
    }
  },
  methods: {
    async operation() {
      const result = await this.$fetch("tickets/new", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          description: this.description
        })
      });
      this.title = this.description = "";
    }
  }
};
</script>

