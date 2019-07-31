<template>
  <div class="emailContainer">
    <div class="leftPos" style="padding: 1.5% 8%;">
      <h1 class="subscribeText">
        Subscribe to our newsletter for upcoming events
      </h1>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <b-input v-model="email" class="emailInput" placeholder="hacker@nwplus.io" type="email" />
          </div>
          <div class="level-item">
            <b-button style="color: white; border:none" class="subBtn" @click="submit">
              Subscribe
            </b-button>
          </div>
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
          email_address: this.email
        })
        this.$toast.open({
          duration: 5000,
          message: `Sucessfully added you to our mailing list!`,
          type: 'is-success',
          position: 'is-bottom'
        })
      } catch (e) {
        const reply = e.response
        if (reply.status === 500) {
          this.$toast.open({
            duration: 5000,
            message: `Something went wrong with our sever.. please try again later`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        }
        if (reply.status === 502) {
          this.$toast.open({
            duration: 5000,
            message: `An error occured: ${reply.data.errors}`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        }
        if (reply.status === 400) {
          this.$toast.open({
            duration: 5000,
            message: `Please fill out all fields!`,
            position: 'is-bottom',
            type: 'is-danger'
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
$sub_font: Apercu Pro, sans-serif;
.emailContainer {
  text-align: left;
  @include until ($desktop) {
    text-align: center;
  }
}

.emailInput {
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 313px;
  padding-right: 0px !important;
}

.subscribeText {
  font-size: 18px;
  line-height: 23px;
  font-family: $sub_font;
  color: #0DEFE1;
  margin-bottom: 10px;
}

.subBtn {
  background: linear-gradient(180deg, #4DE8C2 0%, #18CDCD 100%, #19CBCB 100%);
  text-align: center;
  color: white;
  font-size: 17px;
  line-height: 21px;
  font-family: $sub_font;
}
</style>
