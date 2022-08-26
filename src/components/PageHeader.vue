<template>
  <header class="flex-header mr-3 mb-3">
    <h2 class="h2 font-xxl">Добавление товара</h2>
    <SortSelect></SortSelect>
  </header>
</template>

<script>
import SortSelect from "@/components/SortSelect";
export default {
  name: "PageHeader",
  components: { SortSelect },
};
</script>

<style lang="scss" scoped>
.flex-header {
  display: flex;
  justify-content: space-between;
}

// adaptive h2
@media screen and (max-width: $md) {
  .h2 {
    font-size: $font-size-lg;
  }
}
</style>
