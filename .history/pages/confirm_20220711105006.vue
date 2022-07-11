<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{ $store.state.userData. }}</p>
      <p>{{ $store.state.userData }}</p>
    </div>
  </div>
</template>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>