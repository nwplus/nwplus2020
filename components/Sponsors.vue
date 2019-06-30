<template>
  <div>
    <h1>Sponsors</h1>
    <div
      v-for="item in items"
      :key="item.name"
    >
      <a
        :href="item.url"
      >
        <img
          :src="item.imageURL"
          :alt="item.name"
        >
      </a>
</div>
  </div>
</template>

<script>
export default {
  props: { items: {
    type: Array,
    required: true
  }
  }
}
</script>

<style>
</style>
