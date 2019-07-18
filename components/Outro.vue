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
  color: #21258A;
  padding-top: 50px;
}
.outro p {
  margin: auto;
  max-width: 670px;
  text-align: left;
  font-family: "HKConcentrate-Medium";
}
</style>
