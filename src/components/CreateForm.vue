<template>
  <form
    class="form p-4 mr-3 mb-3 bg-secondary card-shadow"
    @submit.prevent="onSubmit"
  >
    <label for="title">Наименование товара</label>
    <MyInput
      type="text"
      v-model="title"
      required
      id="title"
      placeholder="Введите наименование товара"
    ></MyInput>
    <label for="body">Описание товара</label>
    <TextArea
      v-model="body"
      id="body"
      placeholder="Введите описание товара"
    ></TextArea>
    <label for="url">Ссылка на изображение товара</label>
    <MyInput
      type="url"
      v-model="url"
      required
      id="url"
      placeholder="Введите ссылку"
    ></MyInput>
    <label for="price">Цена товара</label>
    <MyInput
      type="number"
      class="mb-4"
      v-model.number="price"
      required
      id="price"
      placeholder="Введите цену"
    ></MyInput>
    <button type="submit" class="submit">Добавить товар</button>
  </form>
</template>

<script>
import MyInput from "@/components/MyInput";
import { ref } from "vue";
import { useStore } from "vuex";
import TextArea from "@/components/TextArea";
export default {
  name: "CreateForm",
  components: { MyInput, TextArea },
  setup() {
    // data
    const title = ref("");
    const url = ref("");
    const body = ref("");
    const price = ref(0);

    // store
    const store = useStore();

    // methods
    function onSubmit() {
      console.log(title);
      store.commit("addNewItem", {
        title: title.value,
        url: url.value,
        body: body.value,
        price: price.value,
        id: Date.now(),
      });
      title.value = "";
      url.value = "";
      body.value = "";
      price.value = 0;
    }

    return {
      title,
      url,
      body,
      price,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: sticky;
  top: $base-margin * 8;
  display: flex;
  flex-direction: column;
  width: $grid-column-width;
  border-radius: $base-border-radius;
  align-self: flex-start;

  label {
    @extend .mb-1;
    font-size: $font-size-sm;
  }

  .submit {
    border-radius: $big-border-radius;
    padding-top: 10px;
    padding-bottom: 11px;
    cursor: pointer;
    transition: background-color $duration, color $duration;
  }

  &:invalid {
    .submit {
      background: $gray;
      color: $tertiary;
    }
  }

  &:valid {
    .submit {
      background: $green;
      color: white;

      &:hover {
        box-shadow: 0 2px 10px -2px $green;
      }

      &:active {
        background-color: $light-blue;
      }
    }
  }
}
</style>
