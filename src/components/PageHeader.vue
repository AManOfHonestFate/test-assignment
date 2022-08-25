<template>
  <header class="flex-header">
    <h2 class="h2">Добавление товара</h2>
    <select></select>
  </header>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style lang="scss" scoped>
.flex-header {
  display: flex;
  justify-content: space-between;
}

// adaptive h2
.h2 {
  @extend .font-xxl;
  @extend .mr-3;
}
@media screen and (max-width: $md){
  .h2 {
    font-size: $font-size-lg;
  }
}
</style>