<template>
  <div>
    <img
      class="backgroundRiver"
      src="../static/cRiver.png"
    >
    <div class="spacing">
      <h2>
        Why join nwPlus?
      </h2>
      <br>
      <b-row>
        <b-col id="cConnect">
          <img src="../static/cConnect.png">
          <br><br>
          <div class="cbd">
            Connect
          </div>
          <p>
            Meet other students who are passionate about the tech space through our events and workshops.
          </p>
        </b-col>
        <b-col id="cBuild">
          <img src="../static/cBuild.png">
          <br><br>
          <div class="cbd">
            Build
          </div>
          <p>
            Learn a new programming language or a new web framework at our hack nights and technical workshops.
          </p>
        </b-col>
        <b-col id="cDiscover">
          <img src="../static/cDiscover.png">
          <br><br>
          <div class="cbd">
            Discover
          </div>
          <p>
            With events like nwHacks, you’ll have the opportunity to collaborate on real projects with developers and designers with the support of industry mentors.
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
@font-face {
  font-family: "HKConcentrate-Bold";
  src: url("../assets/fonts/HKConcentrate-Bold.woff") format("woff");
}
@font-face {
  font-family: "HKConcentrate-Medium";
  src: url("../assets/fonts/HKConcentrate-Medium.woff") format("woff");
}
.backgroundRiver {
  position: absolute;
  z-index: -10;
  width: 100%;
  left: 0;
  height: 1124px;
  top: 18vh;
}
h2 {
  font-family: "Merriweather", serif;
  width: 30%;
  left: 10%;
  height: 45px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 630;
  margin-bottom: 3%;
}
.spacing {
  margin-left: 5%;
  width: 87vw;
  color: #0c2264;
}
img {
  width: 277px;
  height: 277px;
  box-sizing: content-box;
}
.cbd {
  font-family: "HKConcentrate-Bold";
  font-size: 30px;
  line-height: 35px;
  font-weight: bold;
  text-align: center;
}
p {
  font-family: "HKConcentrate-Medium";
  padding: 1.5% 15%;
  font-size: 18px;
  /* font-weight: 480; */
  line-height: 22px;
  text-align: center;
}
</style>
