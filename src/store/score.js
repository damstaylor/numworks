import { defineStore } from 'pinia';

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
  getters: {
    getScore: (state) => state.score,
  },
  actions: {
    incrementScore(add) {
      this.score += add;
    },
    reset() {
      this.score = 0;
    },
  },
})