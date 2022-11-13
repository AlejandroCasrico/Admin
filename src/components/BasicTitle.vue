<template>
  <div class="row">
    <div class="col">
      <h1 class="mb-2 text-gray-800 text-left">{{ title }}</h1>
      <p class="mb-4 text-left" v-if="subtitle">{{ subtitle }}</p>
    </div>
    <div class="col">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "BasicTitle",
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
