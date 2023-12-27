<template>
  <div class="red-page">
    <h2>Add days</h2>
    <div>This is the weekdays list, you can add days to it:</div>
    <ul>
      <li v-for="(item, idx) in getWeekdays" :key="idx">
        {{ item }}
      </li>
    </ul>
    <input :value="fieldValue" @input="onInput" />
    <button @click="onEnter">Enter</button>
  </div>
</template>

<script>
import { useWeekdaysStore } from '../store/weekdays';

const store = useWeekdaysStore();

export default {
  name: 'red-page',
  data() {
    return {
      fieldValue: '',
    };
  },
  computed: {
    getWeekdays() {
      return store.getWeekdays;
    },
  },
  methods: {
    onInput(event) {
      this.fieldValue = event.target.value;
    },
    onEnter() {
      store.add(this.fieldValue);
      this.fieldValue = '';
    },
  },
};
</script>

<style scoped>
.red-page h1 {
  color: red;
}
</style>