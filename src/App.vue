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
      let result = this.$store.dispatch({type: 'getEnum'});
      console.log(result)
    },
    getConstant() {
      let result = this.$store.dispatch('getConstant');
      // const params = {
      //   type: '',
      // };
      // const header = {
      //   'X-UserId': 1,
      //   'X-OpenId': 'test123456',
      // }
      // this.$http(this.Api.urlConfig.getConstant, params, header).then(({ data }) => {
      //   console.log(data);
      // });
    },
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$store)
      let result = this.$store.dispatch({type: 'getConstant'});
      console.log(result);
      // this.getEnum();
      // this.getConstant();
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
