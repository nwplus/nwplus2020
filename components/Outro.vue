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

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$title_font: Merriweather;
$sub_font: Apercu Pro, sans-serif;
.outro {
  align-items: center;
  color: #21258A;
  padding-top: 50px;
  margin-bottom: 8%;
}
.outro p {
  margin: auto;
  font-size: 24px;
  max-width: 80%;
  text-align: center;
  @include until($desktop) {
    text-align: center;
    font-size: 18px;
    width: 100%;
    margin: auto;
  }
  @media (max-width: 350px) {
    width: 95%;
  }
}
</style>
