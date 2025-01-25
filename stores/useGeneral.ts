import { defineStore } from "pinia";
import { useNuxtApp } from "#imports";

import type { GeneralState, TodoCategory } from "~/types/general.types";

export const useGeneralStore = defineStore("general", {
  state: (): GeneralState => ({
    categories: [],
    formIsOpen: false,
    loaderIsActive: false,
    filter: [],
    finishedTasksShow: true,
  }),
  actions: {
    setCategories(categories: TodoCategory[]) {
      this.categories = categories;
    },
    setFormIsOpen(value: boolean) {
      this.formIsOpen = value;
    },
    async setTaskUpdate(id: string, value: boolean) {
      const { $apiFetch } = useNuxtApp();
      try {
        const response = await $apiFetch(
          `https://todo.nextio.dev/items/todos/${id}`,
          {
            method: "PATCH",
            body: {
              is_completed: value,
            },
          }
        );
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async setTaskDelete(id: string) {
      const { $apiFetch } = useNuxtApp();
      try {
        const response = await $apiFetch(
          `https://todo.nextio.dev/items/todos/${id}`,
          {
            method: "DELETE",
          }
        );
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    setLoaderIsActive(value: boolean) {
      this.loaderIsActive = value;
    },
    setFilter(value: string) {
      if (this.filter.includes(value)) {
        this.filter = this.filter.filter((item) => item !== value);
      } else {
        this.filter.push(value);
      }
    },
    setFinishedTasksShow(value: boolean) {
      this.finishedTasksShow = value;
    },
  },
});
