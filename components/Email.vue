<template>
  <div class="emailContainer">
    <div class="leftPos" style="padding: 1.5% 8%;">
      <h1 class="subscribeText">
        Subscribe to our newsletter for upcoming events
      </h1>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <b-input v-model="email" class="emailInput" placeholder="hacker@gmail.com" type="email" />
          </div>
          <div class="level-item">
            <b-button class="subBtn" @click="submit">
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
        await this.$axios.post('http://localhost:5000/nwhacks-2019-dev/us-central1/SubscribeToMailingList/', {
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

<style>

.emailContainer {
  padding-top: 50px;
}

.leftPos {
  width: 100vw;
  text-align: left
  /* Help, can't make it stick to the left */
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
  font-family: "HKConcentrate-Medium";
  font-weight: 600;
  color: #21258A;
  margin-bottom: 10px;
}

.subBtn, .subBtn:hover {
  background: linear-gradient(180deg, #4DE8C2 0%, #18CDCD 100%, #19CBCB 100%);
  text-align: center;
  color: white;
  font-size: 17px;
  line-height: 21px;
  font-family: "HKConcentrate-Bold";
}
</style>
