import { computed } from 'vue';
import { useWeekdaysStore } from './weekdays';
import { useScoreStore } from './score';

const weekdaysStore = useWeekdaysStore();
const scoreStore = useScoreStore();

export const storeHelpers = {
  getWeekdays: computed(() => weekdaysStore.getWeekdays),
  getScore: computed(() => scoreStore.getScore),
  add: (idx) => weekdaysStore.add(idx),
  remove: (idx) => weekdaysStore.remove(idx),
};
