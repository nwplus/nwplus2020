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

<style scoped>
.text {
  font-size: 32px;
  line-height: 40px;
  color: #0c2264;
  font-family: "Merriweather", serif;
  font-weight: bold;
  width: 40%;
  margin-left: 8%;
  text-align: left;
  margin-top: 135px;
}

.sub {
  font-size: 18px;
  line-height: 21px;
  color: #0c2264;
  font-family: "HKConcentrate-Medium";
  width: 55%;
  margin:  45px 0 120px 8%;
  text-align: left;
}
</style>
