<template>
  <nav>
    <!-- use vue-router and <router-link> -->
    <nuxt-link to="/about" class="nuxt-link">
      About
    </nuxt-link>
    <nuxt-link to="/events" class="nuxt-link">
      Events
    </nuxt-link>
    <nuxt-link to="/lhd" class="nuxt-link">
      Local Hack Day
    </nuxt-link>
    <nuxt-link to="/contact" class="nuxt-link">
      Contact us
    </nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  /* flexbox etc */
}
.nuxt-link {
  font-size: 24px;
}
#nwplus-logo {
  /* icon in top left */
}
</style>
