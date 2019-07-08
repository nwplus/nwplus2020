<template>
  <section class="container">
    <div>
      <logo />
      <welcome :info="info" />
      <h1 class="title">
        nwPlus 2020
      </h1>
      <WhyJoin />
      <faq :items="items" />
      <Sponsors :items="Sponsors" />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Welcome from '~/components/Welcome.vue'
import Faq from '~/components/Faq.vue'
import Sponsors from '~/components/Sponsors.vue'
import WhyJoin from '~/components/WhyJoin.vue'
import fireDb from '~/plugins/firebase.js'
export default {
  components: {
    Logo,
    Welcome,
    WhyJoin,
    Sponsors,
    Faq
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
    // Populate sponsors with their image urls
    const populatedSponsors = await Promise.all(listOfSponsors.map(sponsor => getSponsorImage(sponsor)))
    return { info: data.WelcomeText, items: listOfFaq, Sponsors: populatedSponsors }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
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
</style>
