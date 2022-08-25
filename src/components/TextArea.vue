<template>
  <textarea
    type="text"
    class="pl-3 pr-3 input mb-3"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    placeholder: String,
    modelValue: [String, Number],
  },
  emits: {
    "update:modelValue": null,
  },
};
</script>

<style lang="scss" scoped>
$textarea-height: 108px;

.input {
  padding-top: 10px;
  padding-bottom: 11px;
  border: none;
  border-radius: $base-border-radius;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  height: $textarea-height;
  resize: none;

  &::placeholder {
    color: $tertiary;
  }
}
</style>
