<template>
  <div class="day-list">
    <h2>{{ title }}</h2>
    <div>{{ description }}</div>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        <span>{{ item }}</span>
        <button v-if="action" @click="action.handleClick(idx)">{{ action.text }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'day-list',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    items: { type: Array, default: () => [] },
    action: { type: Object, default: null },
  },
  data() {
    return {
      fieldValue: '',
    };
  },
}
</script>
<style scoped>
.day-list h1.red-page {
  color: red;
}
.day-list h1.green-page {
  color: green;
}
.day-list h1.blue-page {
  color: blue;
}
</style>
