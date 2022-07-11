<template>
  <div class="login">
    <div>
      <button @click="login">googleアカウントでログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      name: null,
      email: null,
    }
  },
  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase
        .auth()
        .signInWithRedirect(provider)
        .then((result) => {
          this.$store.commit('sendLoginUserData', userData);
          const userData = result.user;
        })
      this.$router.push('/confirm');
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>