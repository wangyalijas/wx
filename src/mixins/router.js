export default {
  methods: {
    handleRouter(name, query = {}, params = {}) {
      console.log(1)
      this.$router.push({
        name,
        params,
        query,
      });
    },
  },
};
