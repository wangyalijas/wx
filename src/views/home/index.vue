<template>
  <div class="home">
    <div class="home__select">12312
      <div class="home__select--m">dasda</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
};
</script>

<style lang="scss" scoped>
  .home {
    background: pink;
    @include e(select) {
     font-size: 0.80rem;
     @include m(m) {
      font-size: 1.07rem;
     }
    }
  }
</style>
