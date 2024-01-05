<template>
  <div class="red-page">
    <day-list title="Add days"
              description="This is the weekdays list, you can add days to it:"
              :items="weekdays"
    />
    <input :value="fieldValue" @input="onInput" @keyup.enter="onEnter" />
    <button @click="onEnter">Enter</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { storeHelpers } from '@/store/store-helpers';
import dayList from '@/components/day-list.vue';

export default {
  name: 'red-page',
  setup() {
    const fieldValue = ref('');
    const onInput = (event) => {
      fieldValue.value = event.target.value;
    };
    const onEnter = () => {
      add(fieldValue.value);
      fieldValue.value = '';
    };
    const add = (newItem) => storeHelpers.add(newItem);
    const weekdays = computed(() => storeHelpers.getWeekdays.value);
    return {
      add,
      fieldValue,
      onEnter,
      onInput,
      weekdays,
    };
  },
  components: {
    dayList
  },
};
</script>

<style scoped>
.red-page h1 {
  color: red;
}
</style>