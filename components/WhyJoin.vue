<template>
  <div class="whyjoin">
    <div class="backgroundRiverContainer">
      <img
        id="backgroundRiver"
        src="../static/cRiver.png"
      >
    </div>
    <div class="spacing">
      <h2>
        Why join nwPlus?
      </h2>
      <br>
      <div class="columns">
        <div id="cConnect" class="column no-margin">
          <div>
            <img src="../static/cConnect.png">
            <br><br>
            <div class="cbd">
              Connect
            </div>
            <p>
              Meet other students who are passionate about the tech space through our events and workshops.
            </p>
          </div>
        </div>
        <div id="cBuild" class="column no-margin">
          <div>
            <img src="../static/cBuild.png">
            <br><br>
            <div class="cbd">
              Build
            </div>
            <p>
              Learn a new programming language or a new web framework at our hack nights and technical workshops.
            </p>
          </div>
        </div>
        <div id="cDiscover" class="column no-margin">
          <div>
            <img src="../static/cDiscover.png">
            <br><br>
            <div class="cbd">
              Discover
            </div>
            <p>
              With events like nwHacks, you’ll have the opportunity to collaborate on real projects with developers and designers with the support of industry mentors.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
@font-face {
  font-family: "HKConcentrate-Bold";
  src: url("../assets/fonts/HKConcentrate-Bold.woff") format("woff");
}
@font-face {
  font-family: "HKConcentrate-Medium";
  src: url("../assets/fonts/HKConcentrate-Medium.woff") format("woff");
}

$title_font: Merriweather;
$sub_font: Apercu Pro;
.backgroundRiverContainer {
    position: relative;
    width: 100vw;
}
#backgroundRiver {
    position: absolute;
    left: 0;
    top: -5%;
    transform: translate(0, -21vw);
  z-index: -1;
  width: 100% !important;
  max-width: 100% !important;
}
@media only screen and (max-width: 768px) {
    .backgroundRiverContainer {
        display: none;
    }
}
.no-margin {
  padding: 0;
}
h2 {
  font-family: $title_font;
  width: 30%;
  left: 10%;
  height: 45px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 630;
  margin-bottom: 3%;
  @include until ($desktop) {
    text-align: center;
    left: 0%;
    width: 100%
  }
}
.spacing {
  margin-left: 5%;
  color: #0c2264;
  @include until($desktop) {
    margin: auto;
  }
}
#whyJoin {
  margin-bottom: 8%;
}
.whyjoin img {
  width: 277px;
  box-sizing: content-box;
}
.cbd {
  font-family: $title_font;
  font-size: 30px;
  line-height: 35px;
  font-weight: bold;
  text-align: center;
}
.whyjoin p {
  padding: 1.5% 15%;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-family: $sub_font;
  @include until ($desktop) {
    width: 90%;
    padding: 5% 0%;
    margin: auto;
  }
  @media (max-width: 350px) {
    width: 82%;
  }
}
</style>
