<template>
  <div class="red-page">
  </div>
</template>

<script>
export default {
  name: 'red-page',
  methods: {
    nextColor() {
      this.$router.push({ name: 'green-page' });
    },
  },
};
</script>

<style scoped>
.red-page h1 {
  color: red;
}
</style>