<template>
  <button
    class="ui-button text-white rounded-full px-4 py-3 w-full lg:w-auto flex items-center justify-center"
    :disabled="props.disabled"
  >
    <slot /><span class="ml-1">{{ props.label }}</span>
  </button>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
.ui-button {
  background-color: #000000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #1b1b1b;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #4f4f4f;
    cursor: not-allowed;
  }
}
</style>
