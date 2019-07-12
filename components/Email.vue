<template>
  <div class="leftPos" style="padding: 1.5% 8%;">
    <h1 class="subscribeText"> Subscribe to our newsletter for upcoming events </h1>
    <div class="container">
      <b-input v-model="email" class="emailInput" placeholder="hacker@gmail.com" type="email" />
      <b-button class="subBtn" @click="submit">
        Subscribe
      </b-button>
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

.leftPos {
  justify-content: left;
  float: left;
  width: 100vw;
  /* Help, can't make it stick to the left */
}

.emailInput {
  position: relative;
  z-index: 0;
  width: 30%;
  box-sizing: border-box;
  border-radius: 4px;
}

.subscribeText {
  font-size: 18px;
  line-height: 23px;
  font-family: "HKConcentrate-Medium";
  font-weight: 600;
  color: #21258A;
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
