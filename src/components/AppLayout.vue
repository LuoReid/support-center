<template>
  <div class="app-layout">
    <header class="img">
      <div>
        <img src="../assets/logo.svg" alt="logo" class="img">
      </div>
      <div>My shirt shop</div>
    </header>
    <router-view/>
  </div>
</template>
<style lang="stylus" scoped>
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>
