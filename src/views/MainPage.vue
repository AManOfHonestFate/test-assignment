<template>
  <div class="wrapper">
    <div class="container p-5">
      <PageHeader></PageHeader>
      <GridLayout>
        <CatalogueItem
          v-for="i in 10"
          :key="i"
          :price="1000000"
          img-url="https://s3-alpha-sig.figma.com/img/488b/7f1f/e88ef4c6003a678c0c9d6a1b91606ae9?Expires=1662336000&Signature=D3x~qQrD~vwui5nUzCoz6~hnllGgxHqoXsPtis-rrgLeXWM1jeUmrMZSBw5VqebNfkxK-uwghN2j9ZzqynFgOu0QpkH-Mu4mSMwA3FAWQiveLP4s30VVYG-S-BTss4XJePA15qltgTMYdzehXurluTelv3uXnSezId-b7~bCVTY-7sOEi~IIoxYm-h2wFKSbOZQ~ZoUL9fXAELc1tx3kK3YLKamOc6O3213QGoaDcZjvrKcIiqyS7r~MPBDkZC3bO3N0RAOIOHTDMpneLwDzOWwu5zhk~4gQPga1y38u7l1a41aNLbtXEbXd~jjFlhx76TG0B0z80Wf7FKeOBeWREg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Название товара"
          body="Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк"
        >
        </CatalogueItem>
      </GridLayout>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/components/GridLayout";
import PageHeader from "@/components/PageHeader";
import CatalogueItem from "@/components/CatalogueItem";
export default {
  name: "MainPage",
  components: { CatalogueItem, PageHeader, GridLayout },
  setup() {},
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
