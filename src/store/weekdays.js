import { defineStore } from 'pinia';

export const useWeekdaysStore = defineStore('weekdays', {
  state: () => ({
    weekdays: [],
  }),
  getters: {
    getWeekdays: (state) => state.weekdays,
  },
  actions: {
    add(newItem) {
      this.weekdays.push(newItem);
    },
    remove(idx) {
      this.weekdays.splice(idx, 1);
    },
  },
})