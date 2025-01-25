<template>
  <div class="header mb-5 lg:mb-12">
    <div class="header__content">
      <h1 class="header__title">Good Morning Daniel
        <span class="header__subtitle hidden lg:inline-block">{{ new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' }).replace(/\//g, '.') }}</span>
      </h1>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.header {
  &__subtitle {
    font-size: 20px;
    color: #757575;
  }
}
</style>
