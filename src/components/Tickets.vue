<template>
  <div class="tickets">
    <Loading v-if="remoteDataBusy"/>
    <div class="empty" v-else-if="tickets.length === 0">You don't have any ticket yet.</div>
    <section v-else class="tickets-list">
      <div v-for="ticket of tickets" class="ticket-item">
        <!-- <a v-on:click="id = ticket._id">{{ticket.title}}</a> -->
        <router-link v-bind:to="{name:'ticket',params:{id:ticket._id}}">{{ticket.title}}</router-link>
        <span class="badge">{{ticket.status}}</span>
        <span class="date">{{ticket.date | date}}</span>
      </div>
      <Ticket v-if="id" v-bind:id="id"/>
    </section>
  </div>
</template>

<script>
import RemoteData from "../mixins/RemoteData";
import Ticket from "./Ticket.vue";
export default {
  mixins: [RemoteData({ tickets: "tickets" })],
  components: { Ticket },
  data() {
    return {
      id: null
    };
  },
};
</script>
