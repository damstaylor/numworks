<template>
  <div class="red-page">
    <day-list title="Add days"
              description="This is the weekdays list, you can add days to it:"
              :items="getWeekdays"
    />
    <input :value="fieldValue" @input="onInput" @keyup.enter="onEnter" />
    <button @click="onEnter">Enter</button>
  </div>
</template>

<script>
import dayList from '@/components/day-list.vue';
import { useWeekdaysStore } from '../store/weekdays';

const store = useWeekdaysStore();

export default {
  name: 'red-page',
  components: { dayList },
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