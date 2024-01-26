<template>
  <div class="demo">
    <div class="list">
      <div
        v-for="demo in demoList"
        :key="demo"
        @click="changeDemo(demo)"
        :style="{ color: currentDemo == demo ? 'red' : '' }"
      >
        {{ demo }}
      </div>
    </div>
    <hr />
    <component v-if="currentDemo" :is="currentDemo" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import main from '../main';
export default {
  setup() {
    const { demoList } = main;
    const demo = ref('');
    const changeDemo = (d: string) => {
      demo.value = d;
    };

    return {
      demoList,
      currentDemo: demo,
      changeDemo,
    };
  },
};
</script>

<style scoped>
.demo .list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
