<template>
  <div class="emailContainer">
    <div class="leftPos" style="padding: 1.5% 8%;">
      <h1 id="subscribeText">
        Subscribe to our newsletter for upcoming events
      </h1>
      <h1 id="subscribeTextMobile">
        Subscribe to our newsletter
      </h1>
      <div class="level is-mobile">
        <div class="level-item isMobile">
          <b-input v-model="email" class="emailInput" placeholder="hacker@nwplus.io" type="email" />
          <b-button @click="submit" style="color: white; border:none;" class="subBtn">
            Subscribe
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: ''
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.post(process.env.mailingListUrl, {
          email: this.email
        })
        this.email = ''
        this.$toast.success('Successfully added you to our mailing list!', {
          duration: 2500,
          type: 'success',
          position: 'bottom-center'
        })
      } catch (e) {
        const reply = e.response
        if (reply.status === 409) {
          this.$toast.error('You are already subscribed!', {
            duration: 2500,
            position: 'bottom-center',
            type: 'error'
          })
        }
        if (reply.status === 502) {
          this.$toast.error(`An error occured: ${reply.data.errors}`, {
            duration: 2500,
            position: 'bottom-center',
            type: 'error'
          })
        }
        if (reply.status === 400 || reply.status === 500) {
          this.$toast.error(reply.data, {
            duration: 2500,
            position: 'bottom-center',
            type: 'error'
          })
        }
      }
    }
  }
}

</script>

<style lang="scss">
@import "bulma/bulma.sass";
$title_font: Merriweather;
$sub_font: HK Grotesk Regular, sans-serif;
.emailContainer {
  text-align: left;
}

.isMobile {
  @include from ($desktop) {
    justify-content: flex-start !important;
  }
}

.emailInput {
  position: relative;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px !important;
}

#subscribeText {
  font-size: 18px;
  line-height: 23px;
  font-family: $sub_font;
  color: #0DEFE1;
  margin-bottom: 10px;
  display: block;
  @include until ($desktop) {
    display: none;
  }
}

#subscribeTextMobile {
  margin: auto;
  font-size: 18px;
  line-height: 23px;
  font-family: $sub_font;
  color: #21258A;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  display: none;
  @include until ($desktop) {
    display: block;
  }
}

.subBtn {
  position: relative;
  background: linear-gradient(180deg, #4DE8C2 0%, #18CDCD 100%, #19CBCB 100%);
  text-align: center;
  color: white;
  font-size: 17px;
  line-height: 21px;
  font-family: $sub_font;
  border-radius: 0px 4px 4px 0px;
}
</style>
