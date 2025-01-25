<template>
  <div class="tasks mb-10" v-show="tasks.length > 0 && props.show">
    <h2 class="mb-5 flex flex-row items-center">
      {{ props.title }}
      <span
        v-if="!props.completed"
        class="flex items-center justify-center ml-2 w-6 h-6 text-xs bg-black rounded-full text-center text-white"
        >{{ tasks.length }}</span
      >
    </h2>
    <UiListElement v-for="task in tasks" :key="task.id" :task="task" @refresh="refreshData" />
    <p v-if="props.limitList && props.tasks.length > props.limitCount" class="text-base-3 cursor-pointer" @click="showAllTasks">{{ !limitList ? "See less" : "See all" }} finished tasks</p>
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useGeneralStore } from "~/stores/useGeneral";
const generalStore = useGeneralStore();
const props = defineProps({
  tasks: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: true,
  },
  limitCount: {
    type: Number,
    default: 3,
  },
  limitList: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["refresh"]);
const limitList = ref(false);
const showAllTasks = () => {
  limitList.value = !limitList.value;
};

const tasks = computed(() => {
  let temp = props.tasks.filter((task) => task.is_completed === props.completed && (generalStore.filter.length === 0 || generalStore.filter.includes(task.category)))
  if (limitList.value) {
    return temp.slice(0, props.limitCount);
  }
  return temp;
});

watch(() => props.limitList, (newVal) => {
  limitList.value = newVal;
}, { immediate: true });

const refreshData = () => {
  emit("refresh");
};
</script>
