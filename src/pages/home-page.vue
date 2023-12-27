<template>
  <div class="home-page">
    <h1>Hello!</h1>
    <br />
    <div>Here are some colors</div>
    <button @click="start">Start</button>
    <br />
  </div>
</template>

<script>
export default {
  name: 'home-page',
  methods: {
    start() {
      this.$router.push({ name: 'red-page' });
    },
  }
};
</script>

<style scoped>
.home-page {
  background-image: url("../assets/images/Designer.jpeg");
  height: 100%;

  @media screen and (max-width: 1000px) {
    background-image: url("../assets/images/case_bg.gif");
  }
}
</style>