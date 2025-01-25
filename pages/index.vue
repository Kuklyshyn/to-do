<template>
  <div>
    <AppHeader />
    <AppTasks
      :tasks="data.data"
      title="Your tasks for today"
      :completed="false"
      @refresh="refreshData"
    />
    <AppTasks
      v-if="generalStore.finishedTasksShow"
      :tasks="data.data"
      title="Your finished tasks"
      :completed="true"
      @refresh="refreshData"
      :limitList="true"
      :limitCount="3"
    />
    <AppForm :isOpen="generalStore.formIsOpen" @refresh="refreshData" />
  </div>
</template>
<script setup>
import { useGeneralStore } from "~/stores/useGeneral";
const generalStore = useGeneralStore();
const { $apiFetch } = useNuxtApp();
const { data, status, error, refresh, clear } = useAsyncData("todos", () =>
  $apiFetch("https://todo.nextio.dev/items/todos")
);
const refreshData = async () => {
  await refresh();
};
</script>
