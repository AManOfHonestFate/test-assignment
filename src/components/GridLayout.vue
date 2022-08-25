<template>
  <div class="grid-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridLayout",
};
</script>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, $grid-column-width);
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: $base-margin * 4;
  flex-grow: 1;
}
</style>
