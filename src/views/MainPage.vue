<template>
  <div class="wrapper">
    <div class="container">
      <PageHeader></PageHeader>
      <div class="content">
        <CreateForm></CreateForm>
        <GridLayout>
          <template v-if="items.length">
            <transition-group appear name="items">
              <CatalogueItem
                class="items-item"
                v-for="item in sortedItems"
                :key="item.id"
                :price="item.price"
                :url="item.url"
                :title="item.title"
                :body="item.body"
                :id="item.id"
              />
            </transition-group>
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

    // computed
    const items = computed(() => store.state.items);

    const sortedItems = computed(() => {
      switch (store.state.currentSort) {
        case 1:
          return [...items.value].sort(
            ({ price: p1 }, { price: p2 }) => p1 - p2
          );

        case 2:
          return [...items.value].sort(
            ({ price: p1 }, { price: p2 }) => p2 - p1
          );

        case 3:
          return [...items.value].sort(({ title: t1 }, { title: t2 }) =>
            t1.localeCompare(t2)
          );

        default:
          return items.value;
      }
    });

    return {
      items,
      sortedItems,
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

.items-item {
  transition: all 0.4s ease-in-out;
}

.items-enter-from,
.items-leave-to {
  opacity: 0;
  transform: scale(0.4) !important;
}
</style>
