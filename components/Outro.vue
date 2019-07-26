<template>
  <div id="outro" class="outro">
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

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.outro {
  align-items: center;
  color: #21258A;
  padding-top: 50px;
  margin-bottom: 8%;
}
.outro p {
  margin: auto;
  max-width: 670px;
  text-align: left;
  font-family: "HKConcentrate-Medium";
  @include until($desktop) {
    text-align: center;
    width: 100%;
    margin: auto;
  }
  @media (max-width: 350px) {
    width: 95%;
  }
}
</style>
