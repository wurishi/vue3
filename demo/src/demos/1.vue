<template>
  <div>{{ count }} {{ object.foo }} {{ type }}</div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent, h } from 'vue';
type MyEnum = 'A' | 'B';
interface IProp {
  name: string;
  value: number;
  enum: MyEnum;
  D1?: Object;
}
export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    enum: {
      type: String as () => MyEnum,
      default: '',
    },
    D1: {
      type: Object,
      default: () => ({}),
    },
  },
  setup: (props: IProp, context) => {
    const count = ref(props.value);
    const object = reactive({ foo: props.name });
    return {
      count,
      object,
      type: props.enum,
    };
  },
});

interface TMP {
  fn(name: string): string[];
}

const C2 = defineComponent<IProp & TMP>({
  props: {
    name: String,
    value: Number,
    enum: String,
    D1: Object,
  } as any,
  setup(props) {
    return {
      hello: props.name,
    };
  },
  render(p0: any, p1: any, p2: IProp & TMP) {
    console.log(arguments);
    return h('h1', {}, 'C2 Component ' + p2.name);
  },
});

export const Com = C2;
</script>
