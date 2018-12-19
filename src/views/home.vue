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
      this.$store.commit('getOpenIdUserId', {
        'X-UserId': this.$route.query['X-UserId'],
        'X-OpenId': this.$route.query['X-OpenId'],
      });
      if (this.$store.state.accessToken) {
        this.handleRouter('Job');
      }
    },
  },
};
</script>
