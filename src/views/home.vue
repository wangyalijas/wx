<template>
  <div></div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
  computed: {
  },
  components: {
  },
  created() {
    this.$nextTick(() => {
      this.fetchOpenIdAsync();
    });
  },
  methods: {
    fetchOpenIdAsync() {
      this.$store.commit('getOpenIdUserId', this.$route.query);
      if (this.$store.state.accessToken) {
        this.handleRouter('Job');
      }
    },
  },
};
</script>
