<template>
  <div
    class="form__overlay"
    :class="{ show: generalStore.formIsOpen }"
    @click="handleCloseForm"
  >
    <div class="form__content" ref="formContent" @click.stop>
      <div class="form__title flex justify-between items-center">
        <h2>Add task</h2>
        <button class="form__close" @click="handleCloseForm">
          <img src="/images/sidebar/x.svg" alt="close" />
        </button>
      </div>
      <UiTextarea
        placeholder="Add a new task"
        @update:value="taskName = $event"
        :value="taskName"
      />
      <UiSelect
        :value="generalStore.categories"
        @update:value="taskCategory = $event[0]"
        :selected="taskCategory"
      />
      <div class="flex justify-end">
        <UiButton
          label="Add new task"
          @click="handleAddTask"
          :disabled="taskName.length === 0 || !taskCategory?.id"
        >
          <img src="/images/sidebar/Trash.svg" alt="plus" class="w-5 h-5" />
        </UiButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGeneralStore } from "~/stores/useGeneral";
import type { TodoCategory } from "~/types/general.types";

const { $apiFetch } = useNuxtApp();
const generalStore = useGeneralStore();
const formContent = ref<HTMLElement | null>(null);
const taskName = ref("");
const taskCategory = ref<TodoCategory | null>(null);
const emit = defineEmits(["refresh"]);
const handleAddTask = async () => {
  if (taskName.value.length > 0 && taskCategory.value?.id) {
    let data = {
      todo: taskName.value,
      category: taskCategory.value?.id,
    };
    const res = await $apiFetch("https://todo.nextio.dev/items/todos", {
      method: "POST",
      body: data,
    });
    taskName.value = "";
    taskCategory.value = null;
    generalStore.setFormIsOpen(false);
    emit("refresh");
  }
};
const handleCloseForm = () => {
  taskName.value = "";
  taskCategory.value = null;
  generalStore.setFormIsOpen(false);
};
</script>
<style scoped lang="scss">
.form__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 100;
  }
}
.form__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  width: 535px;
  max-width: calc(100% - 40px);
  height: 348px;
  z-index: 101;
}

.form__title {
  margin-bottom: 24px;
}
</style>
