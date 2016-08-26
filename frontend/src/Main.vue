<template>
  <header>
    <h1><strong>V</strong>ulp<strong>L</strong></h1>
    <h2>Para quem ama Podcasts️</h2>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import store from 'vuex_root/store'

export default {
  store
}
</script>

<style lang="scss">
main {
  display: flex;
  width: 80%;
  margin: auto
}
</style>
