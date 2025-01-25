<template>
  <div
    class="ui-select"
    ref="selectRef"
    @click="handleClick"
    :class="{ active: isOpen }"
  >
    <div class="ui-select__label">
      <div class="ui-select__label-text text-base-2">{{ currentCategory }}</div>
      <div class="ui-select__label-icon">
        <img src="/images/sidebar/arrow.svg" alt="chevron-down" />
      </div>
    </div>
    <div class="ui-select__options">
      <div
        class="ui-select__option"
        v-for="category in props.value"
        :key="category.id"
      >
        <UiRadio
          :label="category.name"
          :checked="category.id === props.selected?.id"
          name="category"
          @update:checked="handleSelect(category)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TodoCategory } from "~/types/general.types";

const props = defineProps<{
  value: TodoCategory[];
  selected: TodoCategory | null;
}>();

const selectRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};

const emit = defineEmits<{
  (e: "update:value", value: TodoCategory[]): void;
}>();

const handleSelect = (value: TodoCategory) => {
  emit("update:value", [value]);
  isOpen.value = false;
};

const currentCategory = computed(() => {
  return props.selected?.name || "Select category";
});
</script>
<style scoped lang="scss">
.ui-select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
}
.ui-select__label {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  height: 56px;
  padding: 0 24px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
}
.ui-select__options {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 20px 20px 10px 20px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  z-index: -1;
  overflow: hidden;
}

.ui-select__label-icon {
  transition: transform 0.2s ease-in-out;
}

.active {
  .ui-select__options {
    height: fit-content;
    opacity: 1;
    z-index: 10;
  }
  .ui-select__label-icon {
    transform: rotate(180deg);
  }
  .ui-select__label {
    border-color: #4f4f4f;
  }
}
</style>
