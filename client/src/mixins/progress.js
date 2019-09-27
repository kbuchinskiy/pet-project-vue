export default {
  methods: {
    startProgress() {
      this.$Progress.start();
    },
    finishProgress() {
      this.$Progress.finish();
    },
  },
  watch: {
    isLoading(status) {
      status ? this.startProgress() : this.finishProgress()
    },
  },
};
