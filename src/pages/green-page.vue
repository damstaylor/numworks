<template>
  <div class="green-page">
    <day-list title="Remove days"
              description="This is the weekday list, you can remove days from it:"
              :items="getWeekdays"
              :action="{ text: 'X', handleClick: (idx) => remove(idx) }"
      />
  </div>
</template>

<script>
import dayList from '@/components/day-list.vue';
import { useWeekdaysStore } from '../store/weekdays.js';

const store = useWeekdaysStore();

export default {
  name: 'green-page',
  components: {
    dayList,
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