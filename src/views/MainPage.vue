<template>
  <div class="wrapper">
    <div class="container">
      <PageHeader></PageHeader>
      <div class="content">
        <CreateForm></CreateForm>
        <GridLayout>
          <template v-if="items.length">
            <CatalogueItem
              v-for="item in items"
              :key="item.id"
              :price="item.price"
              :url="item.url"
              :title="item.title"
              :body="item.body"
              :id="item.id"
            >
            </CatalogueItem>
          </template>
          <p class="font-xxl" v-else>Товары не найдены</p>
        </GridLayout>
      </div>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/components/GridLayout";
import PageHeader from "@/components/PageHeader";
import CatalogueItem from "@/components/CatalogueItem";
import { useStore } from "vuex";
import { computed } from "vue";
import CreateForm from "@/components/CreateForm";

export default {
  name: "MainPage",
  components: { CreateForm, CatalogueItem, PageHeader, GridLayout },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);

    return {
      items,
    };
  },
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
  max-width: 1440px;
}

.content {
  display: flex;
}

@media screen and (max-width: $sm) {
  .container {
    padding: $base-padding;
  }
}

@media screen and (max-width: $md) {
  .content {
    flex-direction: column;
  }
}
</style>
