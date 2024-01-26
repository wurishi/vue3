<template>
  <div ref="root">{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup: () => {
    const root = ref<HTMLElement>(null);

    onMounted(() => {
      console.log(root.value.textContent);
    });

    return {
      root,
    };
  },
  data() {
    return {
      name: 'Hello',
    };
  },
  mounted() {
    this.name = 100;
    console.log(this.name, this.root);
  },
});
</script>
