<template>
  <div>
    <p>{{ info }} </p>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      default: 'loading..'
    }
  }
}
</script>
