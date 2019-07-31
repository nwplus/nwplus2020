<template>
  <div>
    <div class="text">
      {{ text }}
    </div>
    <div class="sub">
      {{ sub }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'loading..'
    },
    sub: {
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
.text {
  font-size: 32px;
  line-height: 40px;
  color: #0c2264;
  font-family: $title_font;
  font-weight: bold;
  margin-top: 8%;
  margin-left: 8%;
  width:  52%;
  text-align: left;
  @include until($desktop) {
    width: 100%;
    margin: 6% auto;
    margin-top: 10%;
    text-align: center;
  }
  @media (max-width: 350px) {
    width: 82%;
  }
  }

  .sub {
  font-size: 18px;
  line-height: 21px;
  color: #0c2264;
  font-family: $sub_font;
  margin: 8%;
  margin-top: 5%;
  margin-bottom: 8%;
  width: 55%;
  text-align: left;
  @include until($desktop) {
    width: 100%;
    margin: auto;
    margin-bottom: 8%;
    text-align: center;
  }
  @media (max-width: 350px) {
    width: 82%;
  }
  }

  // @media screen and (max-width: mobile) {
  // margin-left: 0px;
  // border: 5px solid blue;
  // }
</style>
