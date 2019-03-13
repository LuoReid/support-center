<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <Loading v-if="remoteDataBusy"/>
    <div class="error" v-if="hasRemoteErrors">Can't load the questions</div>
    <section class="list">
      <article v-for="question of questionList">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>
<script>
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      questionList: "questions",
    })
  ],
  data() {
    return {
      questions: [],
      error: null,
      loading: false
    };
  },
  // created(){
  //   fetch('http://127.0.0.1:3000/questions').then(res => {
  //     if(res.ok){
  //       return res.json()
  //     }else{
  //       return Promise.reject('error')
  //     }
  //   }).then(res => {
  //     this.questions = res
  //   }).catch(e => {
  //     this.error = e
  //   })
  // }
  async created() {
    console.log(this.$state)
    this.loading = true;
    try {
      this.questions = await this.$fetch("questions");
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  }
};
</script>
