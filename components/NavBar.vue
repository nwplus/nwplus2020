<template>
  <nav class="sticky">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a v-scroll-to="'#navbar'" href="#" class="navbar-item">
          <img
            id="navbar-logo"
            class="navbar-item"
            src="../assets/sprite/svg/nwplus-logo.svg"
            alt="nwPlus logo"
          >
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
            <a v-scroll-to="'#whyJoin'" href="#" class="navbar-item">About</a>
            <a v-scroll-to="'#events'" href="#" class="navbar-item">Events</a>
            <a href="http://lhd.nwplus.io" class="navbar-item">Local Hack Day</a>
            <a v-scroll-to="'#contact'" href="#" class="navbar-item">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const navbar = document.querySelector('.navbar-burger')
    const navbarLinks = document.querySelector('#navbar')
    navbar.addEventListener('click', function () {
      const target = navbar.dataset.target
      const $target = document.getElementById(target)
      navbar.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
    window.addEventListener(
      'resize',
      function () {
        const viewportWidth =
          window.innerWidth || document.documentElement.clientWidth
        if (viewportWidth > 1024) {
          navbar.classList.remove('is-active')
          navbarLinks.classList.remove('is-active')
        }
      },
      false
    )
    navbarLinks.addEventListener('click', function () {
      if (navbar.classList.contains('is-active')) {
        navbar.classList.remove('is-active')
        navbarLinks.classList.remove('is-active')
      }
    })
  }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  background-color: #4d5682;
  width: 100%;
  padding: 0;
}
.navbar-item {
  font-size: 24px;
  color: white;
  font-family: "HKConcentrate-Medium";
  padding: 8px 32px;
}
a.navbar-item:hover,
a.navbar-item:focus,
a.navbar-item:focus-within {
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
.a {
  font-size: 24px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.navbar-brand {
  align-items: center;
}
.navbar-burger {
  color: white;
}
.is-active .buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.is-active .buttons .navbar-item {
  color: #4d5682;
}
</style>
