<template>
  <MainPage></MainPage>
</template>

<script>
import MainPage from "@/views/MainPage";
export default {
  name: "App",
  components: { MainPage },
};
</script>

<style lang="scss">
/* import google font */
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");

/* reset styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  @extend .bg-primary;
  font-family: "Source Sans Pro", sans-serif;
  font-width: $strong;
}

img {
  max-width: 100%;
}

button {
  border: none;
  background: none;
}
</style>
