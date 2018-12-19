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
        'X-UserId': this.$route.query.userId,
        'X-OpenId': this.$route.query.openId,
      });
      if (this.$store.state.header) {
        this.handleRouter('Job');
      }
    },
  },
};
</script>
