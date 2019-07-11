<template>
  <nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start" />
        <div class="navbar-end">
          <div class="buttons">
            <nuxt-link to="/about" class="navbar-item">
              About
            </nuxt-link>
            <nuxt-link to="/events" class="navbar-item">
              Events
            </nuxt-link>
            <nuxt-link to="/lhd" class="navbar-item">
              Local Hack Day
            </nuxt-link>
            <nuxt-link to="/contact" class="navbar-item">
              Contact us
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  background-color: #4d5682;
}
.navbar-item {
  font-size: 24px;
  color: white;
}
.navbar-item:hover {
  color: #0c2264;
  background: none;
}
.nuxt-link {
  font-size: 24px;
}
#nwplus-logo {
  /* icon in top left */
}
</style>
