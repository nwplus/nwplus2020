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
      const reply = await this.$axios.post('http://localhost:5000/nwhacks-2019-dev/us-central1/SubscribeToMailingList/', {
        email_address: this.email,
        first_name: this.firstName,
        last_name: this.lastName
      })
      console.log(reply)
    }
  }
}
</script>

<style>

</style>
