<template>
  <div>
    <NavBar />
    <section class="mainSection">
      <div>
        <h1 id="nwtitle">
          UBC nwPlus
          <div style="font-size: 30px;">
            Connect, build, discover
          </div>
        </h1>
        <Email />
        <Intro :text="intro" :sub="introSub" />
        <WhyJoin id="whyJoin" />
        <Events id="events" :items="events" />
        <Outro :text="outro" />
        <Sponsors :items="Sponsors" />
      </div>
    </section>
    <Footer id="contact" :text="footer" />
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
      introSub: data.IntroSubtext
    }
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";
#nwtitle {
  font-family: "Merriweather", serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  margin-top: 20%;
  color: #0C2264;
  text-align: left;
  margin-left: 8%;
  margin-bottom: 20px;
  @include until($desktop) {
    width: 100%;
    margin-left: 0%;
    text-align: center;
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
    margin-left: 5%;
    margin-right: 5%;
  }
}

.links {
  padding-top: 15px;
}

p {
  font-family: "HKConcentrate-Medium";
}
</style>
