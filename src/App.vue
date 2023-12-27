<template>
  <div>
  <router-view v-slot="{Component}">
    <color-header />
    <component :is="Component"></component>
  </router-view>
  </div>
</template>

<script>
import ColorHeader from './components/color-header.vue'

export default {
  name: "App",
  methods: {
  },
  components: {
    ColorHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#app > * {
  height: 100%;
}
</style>
