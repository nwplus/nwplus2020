<template>
  <div>
    <h1>Sponsors</h1>
    <div :class="'sponsors'">
      <div
        v-for="item in items"
        :key="item.name"
      >
        <a
          :href="item.url"
        >
          <img
            :src="item.imageURL"
            :alt="item.name"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { items: {
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
  img {
    height: auto;
    max-width: 200px;
    padding: 5px;
  }
</style>
