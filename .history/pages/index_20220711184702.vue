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
        .signInWithPopup(provider)
        .then((data) => {
          console.log(data)
          this.name = data.user.name;
          this.email = data.user.email;
        })
      const userData = {
        name: this.name ,
        email: this.email,
      };
      this.$store.commit('sendLoginUserData', userData);
      // this.$router.push('/confirm');
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