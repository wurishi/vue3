<template>
  <div>
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import part1 from './3_1';

export default defineComponent({
  setup() {
    const { count } = part1();
    return {
      count,
    };
  },
});
</script>
