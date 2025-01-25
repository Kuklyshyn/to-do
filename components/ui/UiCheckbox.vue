<template>
  <div class="ui-checkbox" :class="{ 'ui-checkbox--dark': props.dark }">
    <input
      type="checkbox"
      :id="`checkbox-${checkboxId}`"
      class="ui-checkbox__input"
      :checked="checked"
      @change="handleChange($event)"
    />
    <label
      :for="`checkbox-${checkboxId}`"
      class="flex flex-col lg:flex-row items-start lg:items-center gap-2 ui-checkbox__label"
    >
      <span class="text-base-1 ui-checkbox__label-text">{{ props.label }}</span>
      <slot />
    </label>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  dark: {
    type: Boolean,
    default: false,
  },
});

const checkboxId = computed(() => {
  if (props.id !== "") {
    return props.id;
  }
  return props.label !== null ? props.label.replace(/\s+/g, "-") : "default";
});

const emit = defineEmits(["update:checked"]);

const handleChange = (event) => {
  emit("update:checked", event.target.checked);
};
</script>
<style scoped>
.ui-checkbox__label {
  cursor: pointer;
  position: relative;
  padding-left: 26px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;
    width: 16px;
    height: 16px;
    border: 1px solid #000000;
    border-radius: 2px;

    @media (min-width: 1024px) {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 7px;
    width: 4px;
    height: 8px;
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
    transform: rotate(35deg);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    @media (min-width: 1024px) {
      top: 50%;
      transform: translateY(-50%) rotate(35deg);
    }
  }
}
.ui-checkbox__input {
  display: none;

  &:checked + .ui-checkbox__label::after {
    opacity: 1;
  }
}
.ui-checkbox--dark {
  .ui-checkbox__label {
    &:before {
      border-color: #d9d9d9;
      border-radius: 4px;
    }
    &:after {
      border-color: #ffffff;
    }
  }
  .ui-checkbox__input {
    &:checked + .ui-checkbox__label::before {
      background-color: #000000;
      border-color: #000000;
    }
    &:checked + .ui-checkbox__label::after {
      border-color: #ffffff;
    }
  }
}
.completed {
  .ui-checkbox__label-text {
    text-decoration: line-through;
  }
}
</style>
