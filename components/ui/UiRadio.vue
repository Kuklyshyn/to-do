<template>
  <div class="ui-radio">
    <label class="ui-radio__label">
      <input
        type="radio"
        :checked="props.checked"
        :name="props.name"
        @change="handleChange"
      />
      <span class="ui-radio__checkmark"></span>
      {{ props.label }}
    </label>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:checked"]);

const handleChange = (event) => {
  emit("update:checked", event.target.checked);
};
</script>
<style scoped>
.ui-radio__label {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 25px;
  margin-bottom: 8px;
  gap: 10px;
  cursor: pointer;

  .ui-radio__checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #F6F6F6;
    transition: border-color 0.2s ease-in-out;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #000;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  &:hover {
    .ui-radio__checkmark {
      border-color: #AAAAAA;
    }
  }

  input:checked + .ui-radio__checkmark {
    border-color: #000;

    &::after {
      opacity: 1;
    }
  }
  input {
    position: absolute;
    opacity: 0;
  }
}
</style>
