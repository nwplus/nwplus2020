<template>
  <div class="mainContainer">
    <h2>
      Events
    </h2>
    <div
      v-for="item in sortedEvents"
      :key="item.order"
    >
      <div class="columns white">
        <img class="column imgResize" :src="item.imageLink">
        <div class="column ">
          <p class="title">
            {{ item.title }}
          </p>
          <br>
          <p class="text">
            {{ item.text }}
          </p>
          <p v-if="item.title === 'cmd-f'" class="disclaimer">
            *The cmd-f team would like to acknowledge that "female" or "women" is not an
            accurate description for many people and it may make some feel unwelcome.
            We use * to specifically and intentionally include cis and trans women,
            as well as non-binary, agender, intersex people.
          </p>
          <a :href="item.learnMoreLink || item.eventLink" target="_blank" class="learnMoreButton">
            <img class="learnMoreImage" src="../assets/sprite/svg/LearnMoreButton.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
export default {
  props: { items: {
    type: Array,
    required: true
  }
  },
  computed: {
    sortedEvents: function () {
      return orderBy(this.items, 'order')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$title_font: Merriweather;
$sub_font: Apercu Pro, sans-serif;
.disclaimer {
  font-size: 12px;
  font-style: italic;
  font-family: $sub_font;
  text-align: left;
  padding: 2% 2%;
  padding-right: 10%;
  padding-left: 7%;
  @media(max-width: 900px) {
    text-align: center;
  }
}

  .mainContainer {
    padding: 1.5% 8%;
    @media (max-width: 900px) {
      width: 96%;
      margin: auto;
    }
    @media (max-width: 350px) {
      width: 78%;
      margin: auto;
    }
  }
  h2 {
  width: 30%;
  left: 10%;
  height: 45px;
  font-size: 32px;
  font-family: $title_font;
  line-height: 40px;
  font-weight: 630;
  margin-bottom: 3%;
  color: #21258A;
  text-align: left;
  }

  .text {
  font-family: $sub_font;
  font-size: 18px;
  color: #21258A;
  padding-right: 10%;
  padding-left: 7%;
  text-align: left;
  }

  .title {
  padding-left: 7%;
  padding-top: 8%;
  font-family: $title_font;
  font-size: 32px;
  color: #21258A;
  line-height: 37px;
  text-align: left;
  }

  .imgResize {
  max-width: 25em;
  min-height: 26em;
  max-height: 33em;
  object-fit: cover; /* Do not scale the image */
  object-position: 50% 50%; /* Center the image within the element */
  border-radius: 40px;
  padding: 0;
  }
  @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0)
  {
    .imgResize {
        max-height: 26em;
    }
  }

  .learnResize {
    width: 15vw;
  }

  .white {
  background-color: white;
  position: relative;
  border-radius: 40px;
  margin-top: 50px;
  }
  .learnMoreButton {
    position: static;
    margin-top: 5%;
    height: 40px;
    // z-index: 1;
    @include from ($desktop) {
      margin-left: 7%;
      float: left;
    }
  }
  .learnMoreImage:hover {
        box-shadow: 2px 3px 4px rgba(114, 114, 114, 0.25);
  }
  @media (max-width: 768px) {
  .imgResize {
    min-height: 100vw;
    max-width: 100%;
    padding: 0;
    margin: auto;
  }
  .mainContainer {
    padding: 0;
  }
  .white {
    position: static;
  }
  .learnMoreButton {
    position: static;
    margin: 5% 0%;
  }
  h2 {
  text-align: center;
  width: 100%
  }

  .title {
  text-align: center;
  padding: 0;
  }

  .text {
  text-align: center;
  padding: 0;
  }

  .learnResize {
    width: 10em;
  }
  }

</style>
