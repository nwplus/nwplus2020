<template>
  <nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img
            id="navbar-logo"
            class="navbar-item"
            src="../assets/sprite/svg/nwplus-logo.svg"
            alt="nwPlus logo"
          >
        </nuxt-link>
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
  font-family: "HKConcentrate-Medium";
  padding: 8px 32px;
}
.navbar-item:hover {
  color: #0c2264;
  background: none;
}
.buttons {
  margin-right: 78px;
}
#navbar-logo {
  max-height: none;
  height: 59px;
  width: auto;
  box-sizing: border-box;
  padding: 0;
}
.nuxt-link {
  font-size: 24px;
}
#nwplus-logo {
  /* icon in top left */
}
</style>
