<template>
  <div class="page-home">
    <Header />
    <h2>Home</h2>
    <img src="@/assets/img/logo.svg" />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',

    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/css/_vars.scss';

  .page-home {
    text-align: center;

    h2 {
      font-size: $font-size;
    }
  }
</style>
