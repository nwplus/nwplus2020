<template>
  <div class="footer">
    <a href="https://www.facebook.com/nwplusubc/">
      <svg-icon name="fb" /></a>
    <a href="https://www.instagram.com/nwplusubc/">
      <svg-icon name="insta" /></a>
    <a href="https://medium.com/nwplusubc">
      <svg-icon name="medium" /></a>
    <a href="https://twitter.com/nwPlusubc">
      <svg-icon name="twitter" /></a>
    <p> Copyright © 2019 nwPlus </p>
  </div>
</template>

<style>
.footer {
  background-color: #3D3947;
  padding: 100px 0 100px 0;
  color: white;
  align-items: center;
  text-align: center;
}

.footer p {
  margin-top: 40px;
  margin-bottom: 0;
}

.footer svg {
  height: 30px;
  width: 90px;
}

@media (max-width: 768px) {
  .footer svg {
    height: 30px;
    width: 50px;
  }
}
</style>
