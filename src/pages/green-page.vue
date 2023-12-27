<template>
  <div class="green-page">
  </div>
</template>

<script>
export default {
  name: 'green-page',
  methods: {
    nextColor() {
      this.$router.push({ name: 'blue-page' });
    },
  },
};
</script>

<style scoped>
.green-page h1 {
  color: green;
}
</style>