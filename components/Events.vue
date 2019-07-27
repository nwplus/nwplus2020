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
        <div class="column">
          <p class="title">
            {{ item.title }}
          </p>
          <br>
          <p class="text">
            {{ item.text }}
          </p>
          <br>
          <a
            :href="item.learnMoreLink"
            target="_blank"
          >
            <img
              class="learnResize"
              src="../static/events/learnMore.png"
              alt="learn more"
            >
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
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
@font-face {
  font-family: "HKConcentrate-Bold";
  src: url("../assets/fonts/HKConcentrate-Bold.woff") format("woff");
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
  font-family: "HKConcentrate-Medium";
  line-height: 40px;
  font-weight: 630;
  margin-bottom: 3%;
  color: #21258A;
  text-align: left;
  }

  .text {
  font-family: "Merriweather", serif;
  font-size: 18px;
  color: #21258A;
  padding-right: 10%;
  padding-left: 7%;
  text-align: left;
  }

  .title {
  padding-left: 7%;
  padding-top: 8%;
  font-family: "HKConcentrate-Bold";
  font-size: 32px;
  color: #21258A;
  line-height: 37px;
  text-align: left;
  }

  .imgResize {
  max-height: 25em;
  max-width: 25em;
  object-fit: cover; /* Do not scale the image */
  object-position: 50% 50%; /* Center the image within the element */
  border-radius: 40px;
  padding: 0;
  }

  .learnResize {
    width: 15vw;
  }

  .white {
  background-color: white;
  border-radius: 40px;
  margin-top: 50px;
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
