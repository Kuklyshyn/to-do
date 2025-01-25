<template>
  <div class="list-element__container p-5 bg-white rounded-xl mb-2">
    <div class="list-element__content">
      <div
        class="list-element__element text-base-1 flex items-center justify-between"
        :class="{ 'completed': props.task.is_completed }"
      >
        <UiCheckbox
          :label="props.task.todo"
          :checked="checker"
          :id="props.task.id.toString()"
          :dark="true"
          @update:checked="handleChange"
        >
          <UITag :category="props.task.category" />
        </UiCheckbox>
        <button
          v-if="props.task.is_completed"
          class="border-gray-300 border rounded-lg p-2"
          @click="handleDelete"
        >
          <img
            src="/public/images/sidebar/delete.svg"
            alt="menu"
            class="w-5 h-5"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { TodoItem } from "~/types/general.types";
import { useGeneralStore } from "~/stores/useGeneral";
const generalStore = useGeneralStore();
const props = defineProps({
  task: {
    type: Object as PropType<TodoItem>,
    required: true,
  },
});
const emit = defineEmits(["refresh"]);
const checker = ref(props.task.is_completed);
const handleChange = async (value: boolean) => {
  try {
    const success = await generalStore.setTaskUpdate(props.task.id.toString(), value);
    if (success) {
      emit("refresh");
    }
  } catch (error) {
    console.error(error);
  }
};
const handleDelete = async () => {
  try {
    const success = await generalStore.setTaskDelete(props.task.id.toString());
    if (success) {
      emit("refresh");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
