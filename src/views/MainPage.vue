<template>
  <div class="wrapper">
    <div class="container">
      <GridLayout>

      </GridLayout>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/components/GridLayout";
export default {
  name: "MainPage",
  components: {GridLayout},
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
  max-width: 1400px;
}
</style>
