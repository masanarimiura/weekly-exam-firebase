<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p @>{{ $store.state.userData.name }}</p>
      <p>{{ $store.state.userData.email }}</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>