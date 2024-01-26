import { onMounted, ref } from 'vue';

export default function() {
  const count = ref<string | number>(0);
  onMounted(() => {
    count.value = '3_1';
  });
  return {
    count,
  };
}
