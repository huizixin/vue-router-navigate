<template>
  <div>
    <h1>{{ "menu1-" + timer }}</h1>
    <button @click="$router.navigateTo('/test-sub1')">跳转到sub1</button>
  </div>
</template>

<script>
export default {
  name: "TestMenu1",
  data() {
    return {
      timer: 0,
      setTime: null,
    };
  },
  mounted() {
    this.setTime = setInterval(() => {
      this.timer = this.timer + 1;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.setTime = null;
  },
};
</script>

<style scoped>
.btn {
  color: red;
}
.textRed{
    color:red
}
</style>
