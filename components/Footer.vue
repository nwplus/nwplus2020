<template>
  <div class="bottom">
    <div class="left">
      <img class="left-fg" src="../static/footer/left-fg.png">
      <img class="left-bg" src="../static/footer/left-bg.png">
      <img class="bike" src="../static/footer/bike.png">
    </div>
    <div class="right">
      <img class="right-fg" src="../static/footer/right-fg.png">
      <img class="right-bg" src="../static/footer/right-bg.png">
    </div>
    <div class="footerT">
      <a href="https://www.facebook.com/nwplusubc/">
        <svg-icon name="fb" /></a>
      <a href="https://www.instagram.com/nwplusubc/">
        <svg-icon name="insta" /></a>
      <a href="https://medium.com/nwplusubc">
        <svg-icon name="medium" /></a>
      <a href="https://twitter.com/nwPlusubc">
        <svg-icon name="twitter" /></a>
      <p> {{ text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Copyright © 2019 nwPlus'
    }
  }
}
</script>

<style>
.footerT {
  background-color: #3D3947;
  padding: 100px 0 100px 0;
  color: white;
  position: relative;
  align-items: center;
  text-align: center;
  z-index: 0;
}

.footerT p {
  margin-top: 40px;
  margin-bottom: 0;
}

.footerT svg {
  height: 30px;
  width: 90px;
}

.left-fg {
  position: relative;
  margin-bottom: -200px;
  z-index: 1;
  width: auto;
}

.left-bg {
  position: relative;
  margin-left: -300px;
  z-index: 0;
  width: auto;
}

.bike {
  position: relative;
  margin-bottom: -80px;
  z-index: 1;
  width: auto;
}

.right {
  margin-top: -400px;
  margin-bottom: 400px;
}

.right-bg {
  position: relative;
  margin-right: -60px;
  float: right;
  z-index: 0;
  width: auto;
}

.right-fg {
  position: relative;
  margin-top: 30px;
  float: right;
  z-index: 1;
  width: auto;
}

@media (max-width: 1024px) {
  .left-fg {
    margin-bottom: -100px;
  }
  .left-bg {
    margin-left: -170px;
  }
  .bike {
    margin-left: -80px;
    margin-bottom: -30px;
  }
  .right {
    margin-top: -260px;
    margin-bottom: 260px;
  }
  .right-bg {
    margin-right: -60px;
  }
  .right-fg {
    margin-top: 30px;
  }
  .bottom img {
    height: 260px;
  }
  .footer svg {
    height: 30px;
    width: 50px;
  }
}

@media (max-width: 768px) {
  .left-fg {
    margin-bottom: -80px;
  }
  .left-bg {
    margin-left: -100px;
  }
  .bike {
    margin-left: -30px;
    margin-bottom: -10px;
  }
  .right {
    margin-top: -150px;
    margin-bottom: 150px;
  }
  .right-bg {
    margin-right: -40px;
  }
  .right-fg {
    margin-top: 25px;
  }
  .bottom img {
    height: 150px;
  }
}

@media (max-width: 350px) {
  .footerT svg {
    height: 20px;
    width: 50px;
  }
}
</style>
