<template>
  <div>
    <div>
      <div>{{ obj.count }}: {{ obj.deep.name }}</div>
      <button @click="addList">click</button>
    </div>
    <hr />
    <div>
      <div>tmpCount: {{ tmpCount }} obj.tmpCount: {{ obj.tmpCount }}</div>
      <div>arr[0]: {{ arr[0].value }} map.a: {{ map.get('a').value }}</div>
      <div>plusOne: {{ plusOne }}</div>
      <button @click="tmpCount++">tmpCount</button>
      <button @click="plusOne++">plusOne</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watchEffect,
} from 'vue';

export default defineComponent({
  setup: () => {
    const tmpCount = ref(0);

    const obj = reactive({
      count: 0,
      list: [],
      deep: {
        name: 'NAME',
      },
      tmpCount,
    });

    const addList = () => {
      const name = 'Name' + Math.random();
      obj.list.push(name);
      obj.count = obj.list.length;
      obj.deep.name = name;
    };

    const arr = ref([]);
    arr.value.push(tmpCount);
    const map = ref(new Map([['a', tmpCount]]));

    const plusOne = computed(() => 'Hi: ' + tmpCount.value);

    const stop = watchEffect(
      () => {
        console.log(tmpCount.value);
      },
      {
        onTrack: (evt) => {
          console.log('onTrack', evt);
        },
        onTrigger: (evt) => {
          console.log('onTrigger', evt);
        },
        flush: 'sync',
      }
    );

    return {
      obj,
      addList,
      tmpCount,
      arr,
      map,
      plusOne,
    };
  },
});
</script>
