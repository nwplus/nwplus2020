<template>
  <div style="position: relative;">
    <img class="backgroundTop" src="../assets/sprite/svg/topBaclground.svg">
    <img class="sun" src="../assets/sprite/Sun.png">
    <NavBar />
    <section class="mainSection">
      <div>
        <h1 id="nwtitle">
          UBC nwPlus
          <div style="font-size: 30px;">
            Connect, build, discover
          </div>
        </h1>
        <img class="topPeople" src="../assets/sprite/topPeople.png">
        <Email />
        <img class="squTree" src="../static/backgroundSvg/squTree.svg">
        <Intro :text="intro" :sub="introSub" />
        <WhyJoin id="whyJoin" />
        <Events id="events" :items="events" />
        <Outro :text="outro" />
        <Sponsors v-if="sponsorFlag" :items="Sponsors" />
      </div>
    </section>
    <Footer id="contact" :text="footer" />
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
    const listOfSponsors = await fireDb.get(Sponsors)
    const listOfEvents = await fireDb.get(Events)
    // Populate sponsors with their image urls
    const populatedSponsors = await Promise.all(
      listOfSponsors.map(sponsor => getSponsorImage(sponsor))
    )
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

$title_font: Merriweather;

$sub_font: Apercu Pro;

html body {
  width: 100vw;
  overflow-x: hidden;
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
#nwtitle {
  font-family: "Merriweather";
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  margin-top: 20%;
  color: #0c2264;
  text-align: left;
  margin-left: 8%;
  margin-bottom: 20px;
  @include until($desktop) {
    width: 100%;
    margin-left: 0%;
    text-align: center;
  }
  @media (max-width: 350px) {
    margin: auto;
    margin-top: 20%;
    width: 82%;
  }
}

.mainSection {
  margin: 0 auto;
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

p {
  font-family: "HKConcentrate-Medium";
}
</style>
