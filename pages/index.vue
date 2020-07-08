<template>
  <div style="position: relative; width: 100%;">
    <img class="backgroundTop desktop" src="../assets/sprite/svg/topBaclground.svg">
    <img class="backgroundTop mobile" src="../assets/sprite/svg/topBgMobile.svg">
    <img class="sun" src="../assets/sprite/Sun.png">
    <NavBar />
    <section class="mainSection">
      <div class="mainContent">
        <h1 id="nwtitle">
          <img class="logo" src="../assets/sprite/svg/nwplus.svg">
          <br>
          UBC nwPlus
          <h2 id="nwsubtitle">
            Connect, build, discover
          </h2>
        </h1>
        <img class="topPeople" src="../assets/sprite/topPeople.png">
        <Email class="desktopOnly" />
        <img class="squTree" src="../static/backgroundSvg/squTree.svg">
        <Intro id="intro" :text="intro" :sub="introSub" />
        <WhyJoin id="whyJoin" />
        <Events id="events" :items="events" />
        <Outro id="contact" :text="outro" />
        <Sponsors v-if="sponsorFlag" :items="Sponsors" />
        <Email class="mobileOnly" />
      </div>
    </section>
    <Footer :text="footer" />
    <div class="backgroundBottom">
      <img src="../assets/sprite/svg/backgroundBottom.png">
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Sponsors from '~/components/Sponsors.vue'
import WhyJoin from '~/components/WhyJoin.vue'
import Outro from '~/components/Outro.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
import Email from '~/components/Email.vue'
import Events from '~/components/Events.vue'
import Intro from '~/components/Intro.vue'
export default {
  components: {
    NavBar,
    WhyJoin,
    Outro,
    Footer,
    Sponsors,
    Events,
    Email,
    Intro
  },
  asyncData: async () => {
    const Sponsors = 'Sponsors'
    const Events = 'Events'
    // functions
    const getSponsorImage = async (sponsor) => {
      sponsor.imageURL = await fireDb.getImageUrl(sponsor.image)
      return sponsor
    }
    // data
    const data = await fireDb.get()
    const listOfEvents = await fireDb.get(Events)
    // Populate sponsors with their image urls
    let populatedSponsors
    if (data.featureFlags.sponsorFlag) {
      const listOfSponsors = await fireDb.get(Sponsors)
      populatedSponsors = await Promise.all(
        listOfSponsors.map(sponsor => getSponsorImage(sponsor))
      )
    } else {
      populatedSponsors = []
    }
    return {
      info: data.WelcomeText,
      Sponsors: populatedSponsors,
      outro: data.OutroText,
      footer: data.FooterText,
      events: listOfEvents,
      intro: data.IntroText,
      introSub: data.IntroSubtext,
      ...data.featureFlags
    }
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");

// @font-face {
//   font-family: "HKConcentrate-Bold";
//   src: url("../assets/fonts/HKConcentrate-Bold.woff") format("woff");
// }
@font-face {
  font-family: "Apercu Pro";
  src: url("../assets/fonts/apercu_regular_pro.otf") format("opentype");
}

$title_font: Merriweather;
$sub_font: Apercu Pro, sans-serif;

html body {
  width: 100vw;
  overflow-x: hidden;
}

.desktopOnly {
  @include until($desktop) {
    display: none;
  }}

.mobileOnly {
  display: none;
  @include until($desktop) {
    display: block;
  }
}

.squTree {
  position: absolute;
  z-index: -1;
  top: 15%;
  right: 0.2%;
  @include until($desktop) {
    visibility: hidden;
  }
}

.topPeople {
  position: absolute;
  right: 10%;
  top: 6%;
  width: 45%;
  height: auto;
  z-index: -1;
  @include until($desktop) {
    position: static;
    top: auto;
    right: auto;
    width: 60%;
  }
}

.sun {
  position: absolute;
  top: 2%;
  right: 10%;
  z-index: -1;
  @include until($desktop) {
    visibility: hidden;
  }
}

.backgroundBottom {
  height: 75%;
  width: 100%;
  position: absolute;
  left: 0%;
  bottom: 1%;
  z-index: -2;
  @include until($desktop) {
    height: 90%;
  }
}
.backgroundBottom img {
  width: 100%;
  height: 100%;
}

.backgroundTop {
  width: 100%;
  position: absolute;
  left: 0%;
  z-index: -1;
}

.desktop {
  @include until($tablet) {
    display: none;
  }
}

.mobile {
  @include from($tablet) {
    display: none;
  }
}

.mainContent {
  margin-top: 12%;
}
.logo {
  @include until($desktop) {
    margin-top: 10px;
    height: 80px;
  }
}
#nwsubtitle {
  font-family: $sub_font;
  font-weight: normal;
  font-size: 30px;
  @include until($desktop) {
    font-size: 26px;
  }
  @media (max-width: 380px) {
    font-size: 22px;
  }
}
#nwtitle {
  font-family: $title_font;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: left;
  color: #0DEFE1;
  margin-bottom: 20px;
  margin-left: 8%;
  @include until($desktop) {
    width: 100%;
    margin-top: 12%;
    font-size: 42px;
    line-height: 50px;
    padding-bottom: 30px;
  }
  @include tablet-only{
    margin-top: 0;
  }
  @media (max-width: 380px) {
    margin: auto;
    margin-top: 20%;
    font-size: 38px;
    line-height: 46px;
    width: 90%;
  }
}

#intro {
  padding-top: 50px;
}

.mainSection {
  margin: 0 auto;
  margin-bottom: 0;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 0;
  @include until($desktop) {
    margin: auto 3%;
    width: auto;
  }
}

.links {
  padding-top: 15px;
}
</style>
