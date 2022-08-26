<template>
  <select
    class="select"
    name="sort"
    id="sort"
    @change="changeMode($event.target.value)"
  >
    <option v-for="(mode, idx) in sortModes" :key="idx" :value="idx">
      {{ mode }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SortSelect",
  computed: {
    sortModes() {
      return this.$store.state.sortModes;
    },
  },
  methods: {
    changeMode(sort) {
      this.$store.commit("changeSort", Number(sort));
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  color: $tertiary;
  padding: 10px $base-padding * 4 11px;
  border: none;
  border-radius: $base-border-radius;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  option {
    color: black;
  }
}
</style>
