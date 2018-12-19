<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'app',
  methods: {
    getEnum() {
      this.$store.dispatch('getEnum')
    },
    getConstant() {
      this.$store.dispatch('getConstant')
    },
  },
  created() {
    this.$nextTick(() => {
      this.getEnum();
      this.getConstant();
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
