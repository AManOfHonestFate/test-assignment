<template>
  <div class="wrapper">
    <div class="container">
      <PageHeader></PageHeader>
      <GridLayout>

      </GridLayout>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/components/GridLayout";
import PageHeader from "@/components/PageHeader";
export default {
  name: "MainPage",
  components: {PageHeader, GridLayout},
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.container {
  @extend .p-5;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
}
</style>
