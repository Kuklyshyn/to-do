<template>
  <textarea
    class="ui-textarea"
    :placeholder="props.placeholder"
    :value="props.value"
    @input="updateValue"
  ></textarea>
</template>
<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:value"]);
const updateValue = (event) => {
  emit("update:value", event.target.value);
};
</script>
<style scoped lang="scss">
.ui-textarea {
  width: 100%;
  height: 88px;
  border-radius: 8px;
  border: 1px solid #f6f6f6;
  font-size: 16px;
  padding: 20px;
  resize: none;
  outline: none;
  color: #000000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #4f4f4f;
  }
  &:active {
    border-color: #4f4f4f;
  }
  &:hover {
    border-color: #aaaaaa;
  }
}
</style>
