<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <div class="error" v-if="error">Can't load the questions</div>
    <section class="list">
      <article v-for="question of questions">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      questions: [],
      error: null
    };
  },
  created(){
    fetch('http://127.0.0.1:3000/questions').then(res => {
      if(res.ok){
        return res.json()
      }else{
        return Promise.reject('error')
      }
    }).then(res => {
      this.questions = res
    }).catch(e => {
      this.error = e
    })
  }
  // async created() {
  //   try {
  //     const response = await fetch("http://localhost:3000/questions");
  //     if (response.ok) {
  //       this.questions = await response.json();
  //     } else {
  //       throw new Error("error");
  //     }
  //   } catch (e) {
  //     this.error = e;
  //   }
  // }
};
</script>
