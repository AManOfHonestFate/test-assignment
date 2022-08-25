<template>
  <div class="item bg-secondary">
    <img class="img mb-3" :src="imgUrl" :alt="title" />
    <div class="p-3">
      <h3 class="font-lg mb-3">{{ title }}</h3>
      <p class="mb-5">{{ body }}</p>
      <p class="font-xl mb-4">{{ formattedPrice }} руб.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogueItem",
  props: {
    imgUrl: String,
    title: String,
    body: String,
    price: Number,
  },
  computed: {
    formattedPrice() {
      return String(this.price).replace(/(.)(?=(\d{3})+$)/g, "$1 ");
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  border-radius: $base-border-radius;
  overflow: hidden;

  .body {
    font-weight: $regular;
    max-height: 300px;
    text-overflow: ellipsis;
  }
}
</style>
