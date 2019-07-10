<template>
  <div class="outro">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'loading..'
    }
  }
}
</script>

<style>
.outro {
  align-items: center;
}
.outro p {
  margin: auto;
  max-width: 670px;
  text-align: left;
}
</style>
