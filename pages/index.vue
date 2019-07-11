<template>
  <div>
    <section class="container">
      <div>
        <logo />
        <welcome :info="info" />
        <WhyJoin />
        <Events :items="events" />
        <Faq :items="items" />
        <Outro :text="outro" />
        <Email />
        <Sponsors :items="Sponsors" />
      </div>
    </section>
    <Footer :text="footer" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Welcome from '~/components/Welcome.vue'
import Faq from '~/components/Faq.vue'
import Sponsors from '~/components/Sponsors.vue'
import WhyJoin from '~/components/WhyJoin.vue'
import Outro from '~/components/Outro.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
import Email from '~/components/Email.vue'
import Events from '~/components/Events.vue'
export default {
  components: {
    Logo,
    Welcome,
    Faq,
    WhyJoin,
    Outro,
    Footer,
    Sponsors,
    Events,
    Email
  },
  asyncData: async () => {
    // functions
    const getSponsorImage = async (sponsor) => {
      sponsor.imageURL = await fireDb.getImageUrl(sponsor.image)
      return sponsor
    }
    // data
    const data = await fireDb.get()
    const listOfFaq = await fireDb.getFAQ()
    const listOfSponsors = await fireDb.getSponsors()
    const listOfEvents = await fireDb.getEvents()
    // Populate sponsors with their image urls
    const populatedSponsors = await Promise.all(listOfSponsors.map(sponsor => getSponsorImage(sponsor)))
    return {
      info: data.WelcomeText,
      items: listOfFaq,
      Sponsors: populatedSponsors,
      outro: data.OutroText,
      footer: data.FooterText,
      events: listOfEvents
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

p {
  font-family: "HKConcentrate-Medium";
}
</style>
