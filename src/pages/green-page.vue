<template>
  <div class="green-page">
    <h2>Remove days</h2>
    <div>This is the weekday list, you can remove days from it:</div>
    <ul>
      <li v-for="(item, idx) in getWeekdays" :key="idx">
        <span>{{ item }}</span>
        <button @click="remove(idx)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useWeekdaysStore } from '../store/weekdays.js';

const store = useWeekdaysStore();

export default {
  name: 'green-page',
  created() {
  },
  computed: {
    getWeekdays() {
      return store.getWeekdays;
    },
  },
  methods: {
    remove(idx) {
      store.remove(idx);
    },
  },
};
</script>

<style scoped>
.green-page h1 {
  color: green;
}
</style>