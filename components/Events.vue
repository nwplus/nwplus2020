<template>
  <div style="padding: 1.5% 8%;">
    <h2>
      Events
    </h2>
    <div
      v-for="item in items"
      :key="item.title"
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
export default {
  props: { items: {
    type: Array,
    required: true
  }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
@font-face {
  font-family: "HKConcentrate-Bold";
  src: url("../assets/fonts/HKConcentrate-Bold.woff") format("woff");
}

h2 {
  font-family: "Merriweather", serif;
  text-align: left;
  height: 45px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 630;
  margin-bottom: 3%;
  color: #21258A;
}

  .text {
  font-family: "Merriweather", serif;
  font-size: 18px;
  color: #21258A;
  padding-right: 10%;
  padding-left: 7%;
}

.title {
  padding-top: 8%;
  font-family: "HKConcentrate-Bold";
  font-size: 32px;
  color: #21258A;
  line-height: 37px;
}

.imgResize {
  min-width: 23em;
  min-height: 23em;
  object-fit: cover; /* Do not scale the image */
  object-position: 50% 50%; /* Center the image within the element */
  border-radius: 40px;
  padding: 0;
}

.white {
  background-color: white;
  border-radius: 40px;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .imgResize {
  min-width: 100%;
}
  .white {
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 25px;
  }

}

</style>
