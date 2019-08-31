<template>
  <div class="outro">
    <p>
      nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us or speaking at one of our events, feel free to reach out to us at
      <a
        href="mailto:hello@nwplus.io"
      >hello@nwplus.io</a>.
    </p>
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
  color: #21258a;
  padding-top: 50px;
  margin-bottom: 8%;
}
.outro p {
  margin: auto;
  font-size: 24px;
  max-width: 80%;
  text-align: center;
  font-family: $sub_font;
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
.outro a {
  color: #33303b;
  &:hover {
    color: #0defe1;
  }
}
</style>
