<template>
  <div class="faq">
    <h1>FAQ</h1>
    <div
      v-for="item in items"
      :key="item.question"
      :class="[items.indexOf(item) % 2 == 0 ? 'faqBoxLeft faq-flexbox' : 'faqBoxRight faq-flexbox']"
    >
      <button
        class="accordion"
        @click="openSesame"
      >
        {{ item.question }}
      </button>
      <div class="panel">
        <p>
          {{ item.answer }}
        </p>
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
  },
  methods: {
    openSesame: (e) => {
      e.target.classList.toggle('active')
      const panel = e.target.nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }
    }
  }
}
</script>

<style>
.faq {
  margin-bottom: 200px;
}
.faq-flexbox {
  display: flex;
  border: 1px solid aqua;
  border-radius: 10px;
  margin-left: 2vw;
  margin-right: 2vw;
  background-color: white;
  color: black;
  cursor: pointer;
  max-width: 40vw;
  margin-bottom: 12px;
  text-align: left;
  outline: none;
  transition: 0.4s;
}

.faqBoxLeft {
  float: left;
  clear: left;
}
.faqBoxRight {
  float: right;
  clear: right;
}

.accordion {
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 20px;
  width: 45vw;
  text-align: left;
  outline: none;
  transition: 0.4s;
  border: none;
  outline: none;
}

.active,
.accordion:hover {
  background-color: rgba(100, 100, 100, 0.15);
}

.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
  clear: both;
}
</style>
