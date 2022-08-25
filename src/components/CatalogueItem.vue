<template>
  <div class="positioner">
    <div class="item bg-secondary card-shadow">
      <div class="wrapper mb-3">
        <img :src="url" :alt="title" />
      </div>
      <div class="p-3">
        <h3 class="font-lg mb-3">{{ title }}</h3>
        <p class="body mb-5">{{ body }}</p>
        <p class="font-xl mb-4">{{ formattedPrice }} руб.</p>
      </div>
    </div>
    <div class="delete-btn bg-pink" @click="deleteItem">
      <img class="center" src="../assets/delete.svg" alt="delete" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogueItem",
  props: {
    url: String,
    title: String,
    body: String,
    price: Number,
    id: Number,
  },
  computed: {
    formattedPrice() {
      return String(this.price).replace(/(.)(?=(\d{3})+$)/g, "$1 ");
    },
  },
  methods: {
    deleteItem() {
      this.$store.commit("removeItem", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
$body-height: 80px;
$img-height: 200px;
$delete-size: 32px;
$delete-position: -8px;

.positioner {
  position: relative;
  transition: transform $duration;

  .delete-btn {
    top: $delete-position;
    right: $delete-position;
    position: absolute;
    display: none;
    width: $delete-size;
    height: $delete-size;
    border-radius: $big-border-radius;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color $duration;

    &:hover {
      background-color: mix(red, $pink);
    }

    .center {
      margin: auto;
    }
  }

  &:hover .delete-btn {
    position: absolute;
    display: flex;
  }

  &:hover {
    transform: translateY(-10px);
  }
}

.item {
  display: flex;
  flex-direction: column;
  border-radius: $base-border-radius;
  cursor: pointer;
  overflow: hidden;

  .body {
    font-weight: $regular;
    height: $body-height;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wrapper {
    height: $img-height;
    overflow: hidden;
  }
}
</style>
