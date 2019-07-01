<template>
  <div>
    <section class="container">
      <div>
        <logo />
        <welcome :info="info">
          <h1 class="title">
            LHD2020
          </h1>
          <h2 class="subtitle">
            The LHD website
          </h2>
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button--green"
            >Documentation</a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey"
            >GitHub</a>
          </div>
        </welcome>
        <faq :items="items" />
        <Outro :text="outro" />
      </div>
    </section>
    <Footer :text="footer" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Welcome from '~/components/Welcome.vue'
import Faq from '~/components/Faq.vue'
import Outro from '~/components/Outro.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
export default {
  components: {
    Logo,
    Welcome,
    Faq,
    Outro,
    Footer
  },
  asyncData: async () => {
    const data = await fireDb.get()
    const listOfFaq = await fireDb.getFAQ()
    return { info: data.WelcomeText,
      items: listOfFaq,
      outro: data.OutroText,
      footer: data.FooterText
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
</style>
