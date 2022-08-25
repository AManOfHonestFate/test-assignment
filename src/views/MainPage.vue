<template>
  <div class="wrapper">
    <div class="container p-5">
      <PageHeader></PageHeader>
      <GridLayout>
        <template v-if="items">
          <CatalogueItem
              v-for="item in items"
              :key="item.id"
              :price="item.price"
              :img-url="item.url"
              :title="item.title"
              :body="item.body"
          >
          </CatalogueItem>
        </template>
        <p v-else>
          Товары не найдены
        </p>
      </GridLayout>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/components/GridLayout";
import PageHeader from "@/components/PageHeader";
import CatalogueItem from "@/components/CatalogueItem";
import useStore from "vuex";
import {computed} from "vue";

export default {
  name: "MainPage",
  components: { CatalogueItem, PageHeader, GridLayout },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);

    return {
      items
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
}
</style>
