<template>
  <div class="email">
    <input v-model="email" :placeholder="'Email'">
    <input v-model="firstName" :placeholder="'First Name'">
    <input v-model="lastName" :placeholder="'Last Name'">
    <button @click="submit">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.post('http://localhost:5000/nwhacks-2019-dev/us-central1/SubscribeToMailingList/', {
          email_address: this.email,
          first_name: this.firstName,
          last_name: this.lastName
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
            message: `A mailchimp error occured. You may have already signed up.`,
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

</style>
