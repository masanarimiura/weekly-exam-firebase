<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{ $store.state.count }}</p>
      <p>{{ ログインしたアカウントのEmail }}</p>
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