<template>
  <div class="emailContainer">
    <section class="email">
      <h1>News letter signup </h1>
      <b-field>
        <b-input v-model="email" placeholder="Email" type="email" />
      </b-field>
      <b-field>
        <b-input
          v-model="firstName"
          placeholder="First Name"
          type="text"
          required
        />
      </b-field>
      <b-field>
        <b-input
          v-model="lastName"
          placeholder="Last Name"
          type="text"
          required
        />
      </b-field>
      <b-field>
        <b-input
          v-model="major"
          placeholder="Major"
          type="text"
          required
        />
      </b-field>
      <b-field>
        <b-input
          v-model="grad"
          placeholder="Grad Year"
          type="number"
          min="2019"
          max="2030"
        />
      </b-field>
      <b-button type="is-success" @click="submit">
        Submit
      </b-button>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      firstName: '',
      lastName: '',
      major: '',
      grad: ''
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.post('http://localhost:5000/nwhacks-2019-dev/us-central1/SubscribeToMailingList/', {
          email_address: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
          major: this.major,
          grad: this.grad
        })
      } catch (e) {
        console.log(JSON.stringify(e.response, null, 4))
        const reply = e.response
        if (reply.status === 200) {
          this.$toast.open({
            duration: 5000,
            message: `Sucessfully added you to our mailing list!`,
            type: 'is-success'
          })
        }
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

<style scoped>
.email {
  max-width: 50%;
  margin: 0 auto;
}
</style>
