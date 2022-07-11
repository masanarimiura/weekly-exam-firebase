<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{ $store.state.userData.name }}</p>
      <p>{{ $store.state.userData.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created:{}
  data() {
    return {
      value: null
    };
  },
  computed: {
    theValue: {
      get() {
        return this.$store.state.count;
      },
      set() {
        this.$store.dispatch("timerCount");
      }
    }
  },
  methods: {
    addCount: function () {
      this.$store.commit("addCount");
    },
    timerCount: function () {
      this.$store.dispatch("timerCount");
    }
  }
};
</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>