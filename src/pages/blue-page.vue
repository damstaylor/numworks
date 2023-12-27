<template>
  <div class="blue-page">
    <h2>Lets' play a game!</h2>
    <div>Click on the button in the allotedd time. Each time you click on the button less than 1 second before the alloted time, you get 100 extra points.</div>
    <div>Score: {{ getScore }}</div>
    <button v-if="!isStarted" @click="start">Start</button>
    <button v-else @click="stop">Stop</button>
    <div v-if="message">{{ message }}</div>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useScoreStore } from '../store/score';

const store = useScoreStore();

export default {
  name: 'blue-page',
  data() {
    return {
      isStarted: false,
      isStopped: false,
      message: '',
      timeout: null,
    };
  },
  computed: {
    getCount() {
      return store.count;
    },
    getScore() {
      return store.score;
    },
  },
  methods: {
    incrementScore() {
      store.incrementScore();
    },
    start() {
      this.isStarted = true;
      this.message = '';
      this.timeout = setTimeout(() => {
        if (this.isStopped) {
          this.message = 'You won!';
          this.incrementScore();
        } else {
          this.message = 'You lost!';
        }
        this.isStarted = false;
        this.isStopped = false;
      }, 1000);
    },
    stop() {
      this.isStopped = true;
    },
    reset() {
      store.reset();
    },
  },
};
</script>

<style scoped>
.blue-page h1 {
  color: blue;
}
</style>