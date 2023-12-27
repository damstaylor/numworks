<template>
  <div class="color-header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/red">Red</router-link> |
      <router-link to="/green">Green</router-link> |
      <router-link to="/blue">Blue</router-link>
    </nav>
    <div v-if="$route.name !== 'home-page'">
      <h1 :class="$route.name">{{ headerText }}</h1>
      <button @click="nextColor">Next color</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'color-header',
  computed: {
    headerText() {
      if (!this.$route.name) {
        return '';
      }
      return 'This is ' + this.$route.name.replace('-page', '');
    },
  },
  methods: {
    nextColor() {
      const routes = this.$router.getRoutes();
      const currentIdx = routes.findIndex(r => r.name === this.$route.name);
      const newRoute = routes[currentIdx + 1] || routes.find(r => r.name === 'red-page');
      this.$router.push(newRoute);
    },
  },
}
</script>
<style scoped>
.color-header h1.red-page {
  color: red;
}
.color-header h1.green-page {
  color: green;
}
.color-header h1.blue-page {
  color: blue;
}
</style>
