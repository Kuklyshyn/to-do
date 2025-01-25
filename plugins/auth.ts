export default defineNuxtPlugin((nuxtApp) => {
  const token = useRuntimeConfig().public.accessToken;

  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  nuxtApp.provide("apiFetch", (url: string, options: any = {}) => {
    return $fetch(url, {
      ...fetchOptions,
      ...options,
    });
  });
});
