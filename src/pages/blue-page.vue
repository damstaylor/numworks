<template>
  <div class="blue-page">
  </div>
</template>

<script>
export default {
  name: 'blue-page',
  methods: {
    nextColor() {
      this.$router.push({ name: 'red-page' });
    },
  },
};
</script>

<style scoped>
.blue-page h1 {
  color: blue;
}
</style>