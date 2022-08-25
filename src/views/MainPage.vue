<template>
  <div class="wrapper">
    <div class="container">ayo</div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.container {
  @extend .p-3;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
</style>
