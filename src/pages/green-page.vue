<template>
  <div class="green-page">
    <day-list title="Remove days"
              description="This is the weekday list, you can remove days from it:"
              :items="weekdays"
              :action="{ text: 'X', handleClick: (idx) => remove(idx) }"
      />
  </div>
</template>

<script>
import { computed } from 'vue';
import { storeHelpers } from '@/store/store-helpers';
import dayList from '@/components/day-list.vue';

export default {
  name: 'green-page',
  setup() {
    const weekdays = computed(() => storeHelpers.getWeekdays.value);
    const score = computed(() => storeHelpers.getScore.value);
    const remove = () => storeHelpers.remove();
    return {
      weekdays,
      score,
      remove,
    };
  },
  components: {
    dayList,
  },
};
</script>

<style scoped>
.green-page h1 {
  color: green;
}
</style>