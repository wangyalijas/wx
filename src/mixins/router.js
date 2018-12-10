export default {
  methods: {
    handleRouter(name, query = {}, params = {}) {
      this.$router.push({
        name,
        params,
        query,
      });
    },
  },
};
