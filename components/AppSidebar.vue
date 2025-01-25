<template>
  <div class="sidebar__container">
    <div class="sidebar__background" :class="{ 'show': mobile && isShowMenu }" @click="isShowMenu = false"></div>
    <div class="sidebar__content">
      <div
        class="flex flex-col items-center lg:items-stretch rounded-2xl bg-white p-4 sidebar__element"
      >
        <!-- Start header -->
        <div class="flex items-center justify-between w-full">
          <NuxtLink to="/">
            <img
              src="/public/images/sidebar/Logo.svg"
              alt="logo"
              class="w-10 h-10 min-w-[145px] max-h-[32px]"
            />
          </NuxtLink>
          <button
            v-if="mobile"
            class="border-gray-300 border rounded-lg p-2"
            :class="{ 'border-gray-600': isShowMenu }"
            @click="isShowMenu = !isShowMenu"
          >
            <img
              v-show="!isShowMenu"
              src="/public/images/sidebar/menu.svg"
              alt="menu"
              class="w-6 h-6"
            />
            <img
              v-show="isShowMenu"
              src="/public/images/sidebar/x.svg"
              alt="menu"
              class="w-6 h-6"
            />
          </button>
        </div>
        <!-- End header -->

        <!-- Start menu -->

        <div
          v-if="!mobile || isShowMenu"
          class="flex flex-col gap-2 w-full mt-10"
        >
          <!-- Start link to home -->
          <NuxtLink
            to="/"
            class="flex items-center gap-2 bg-lightgray2 w-full py-3 px-5 rounded-full"
          >
            <img
              src="/public/images/sidebar/CirclesFour.svg"
              alt="home"
              class="w-6 h-6"
            />
            <span class="text-base-1">Dashboard</span>
          </NuxtLink>
          <!-- End link to home -->

          <!-- Start your categories -->
          <div class="flex flex-col w-full px-10 pt-4">
            <span class="label-base"> Your categories</span>
            <ul class="flex flex-col items-start gap-2 mt-4 main-nav">
              <li
                v-for="category in categories"
                :key="category.id"
                class="text-base-2 py-2"
                :class="{ 'active': generalStore.filter.includes(category.id) }"
              >
                <div @click="generalStore.setFilter(category.id)">{{ category.name }}</div>
              </li>
            </ul>
          </div>
          <!-- End your categories -->

          <!-- Start checkbox -->
          <div class="flex flex-col w-full px-8 my-2">
            <UiCheckbox
              label="Finished tasks"
              :checked="generalStore.finishedTasksShow"
              @update:checked="generalStore.setFinishedTasksShow"
            />
          </div>
          <!-- End checkbox -->
        </div>

        <!-- End menu -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import type { TodoCategory } from "~/types/general.types";
import { useGeneralStore } from "@/stores/useGeneral";

const props = defineProps({
  categories: {
    type: Array as PropType<TodoCategory[]>,
  },
});
const isShowMenu = ref(false);
const generalStore = useGeneralStore();
const mobile = ref(false);

const handleResize = () => {
  mobile.value = window.innerWidth < 1024;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
  generalStore.setCategories(props.categories || []);
  generalStore.setLoaderIsActive(true);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
