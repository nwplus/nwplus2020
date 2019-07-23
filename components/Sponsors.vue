<template>
  <div id="sponsors">
    <h2>Sponsors</h2>
    <div id="sponsors-list" :class="'is-flex'">
      <div v-for="item in items" :key="item.name">
        <a :href="item.url" target="_blank">
          <img :src="item.imageURL" :alt="item.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.sponsors {
  display: flex;
  justify-content: space-around;
}
#sponsors {
  text-align: center;
}
#sponsors h2 {
  width: 100%;
  left: 10%;
  height: 45px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 630;
  margin-bottom: 3%;
  color: #21258a;
}
#sponsors-list {
  justify-content: space-evenly;
}
#sponsors img {
  height: auto;
  max-width: 100px;
  padding: 5px;
}
</style>
